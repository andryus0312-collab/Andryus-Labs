/**
 * ANDRYUS LAB - DATA ABSTRACTION
 * Rule: Tools never import SDKs directly. They talk to interfaces.
 */

export interface TemporaryItem {
  id: string;
  payload: string;
  createdAt: string; // ISO Date
  expiresAt: string; // ISO Date
  views: number;
  maxViews?: number;
  ownerId?: string;
}

export interface ITemporaryRepository {
  create(data: Pick<TemporaryItem, 'payload'>, ttlSeconds: number): Promise<{ url: string; id: string }>;
  get(id: string): Promise<TemporaryItem | null>;
  delete(id: string): Promise<void>;
}
