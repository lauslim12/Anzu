/**
 * Domain entity of 'Source'.
 */
export type Source = {
  _id: string;
  sourceId: string;
  sourceType: 'group' | 'room' | 'user';
  dateAdded: number;
};

/**
 * Service implementation.
 */
export interface Service {
  createSource: (source: Omit<Source, '_id'>) => Promise<Source>;
}

/**
 * DAO implementation.
 */
export interface Repository {
  createSource: (source: Omit<Source, '_id'>) => Promise<Source>;
}
