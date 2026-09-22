/**
 * REPOSITORY INTERFACE: Temporary Share
 * 
 * Esta interfaz permite cambiar entre Firebase, Supabase o Mock sin tocar la UI.
 * Según la Especificación Sección 7.
 */

export interface TemporaryItem {
  id: string;
  payload: string;
  createdAt: string; // ISO Date
  expiresAt: string; // ISO Date
  views: number;
  maxViews?: number;
}

export interface ITemporaryRepository {
  create(data: Pick<TemporaryItem, 'payload'>, ttlSeconds: number): Promise<{ url: string; id: string }>;
  get(id: string): Promise<TemporaryItem | null>;
  delete(id: string): Promise<void>;
}

/**
 * MOCK IMPLEMENTATION (Para desarrollo sin backend)
 * Simula latencia y almacenamiento en memoria/volátil
 */
class MockTemporaryRepository implements ITemporaryRepository {
  private store: Map<string, TemporaryItem> = new Map();

  async create(data: Pick<TemporaryItem, 'payload'>, ttlSeconds: number) {
    const id = Math.random().toString(36).substring(2, 8);
    const now = new Date();
    const expiry = new Date(now.getTime() + ttlSeconds * 1000);

    const item: TemporaryItem = {
      id,
      payload: data.payload,
      createdAt: now.toISOString(),
      expiresAt: expiry.toISOString(),
      views: 0
    };

    this.store.set(id, item);
    
    // Simular red
    await new Promise(r => setTimeout(r, 300)); 
    
    return { url: `${window.location.origin}/share/${id}`, id };
  }

  async get(id: string): Promise<TemporaryItem | null> {
    const item = this.store.get(id);
    if (!item) return null;

    // Chequeo de TTL (Crítico según Sección 9)
    if (new Date() > new Date(item.expiresAt)) {
      this.delete(id); // Limpieza lazy
      return null;
    }

    item.views++;
    return item;
  }

  async delete(id: string): Promise<void> {
    this.store.delete(id);
  }
}

// Exportar instancia singleton para usar en la App
export const tempRepo: ITemporaryRepository = new MockTemporaryRepository();
