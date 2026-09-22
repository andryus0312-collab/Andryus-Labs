import { ITemporaryRepository, TemporaryItem } from './temporary-share.interface';

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
    
    // Simulate network latency
    await new Promise(r => setTimeout(r, 300)); 
    
    return { 
      url: `${window.location.origin}/share/${id}`, 
      id 
    };
  }

  async get(id: string): Promise<TemporaryItem | null> {
    const item = this.store.get(id);
    if (!item) return null;

    // TTL Check (Critical per Spec Section 9)
    if (new Date() > new Date(item.expiresAt)) {
      this.delete(id); // Lazy cleanup
      return null;
    }

    item.views++;
    return item;
  }

  async delete(id: string): Promise<void> {
    this.store.delete(id);
  }
}

// Singleton export for easy swapping later
export const tempRepo: ITemporaryRepository = new MockTemporaryRepository();
