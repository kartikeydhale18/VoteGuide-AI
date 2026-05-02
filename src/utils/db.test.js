import { describe, it, expect, vi } from 'vitest';
import { loadUserProgress, saveTimelineProgress, saveDocumentProgress } from './db';
import { getDoc, setDoc } from 'firebase/firestore';

vi.mock('firebase/firestore', () => ({
  doc: vi.fn(),
  getDoc: vi.fn(),
  setDoc: vi.fn(),
  getFirestore: vi.fn()
}));
vi.mock('../firebase', () => ({ db: {} }));

describe('Database Utilities', () => {
  it('loadUserProgress returns initial data if doc does not exist', async () => {
    getDoc.mockResolvedValueOnce({ exists: () => false });
    const data = await loadUserProgress('test-user');
    expect(data.completedPhases).toEqual([]);
    expect(setDoc).toHaveBeenCalled();
  });

  it('saveTimelineProgress calls setDoc with merge true', async () => {
    await saveTimelineProgress('test-user', [1, 2]);
    expect(setDoc).toHaveBeenCalledWith(undefined, { completedPhases: [1, 2] }, { merge: true });
  });

  it('saveDocumentProgress calls setDoc with correct fields', async () => {
    await saveDocumentProgress('test-user', true, false, true, false);
    expect(setDoc).toHaveBeenCalledWith(undefined, {
      'documents.dob': true,
      'documents.address': false,
      'documents.photo': true,
      'documents.identity': false
    }, { merge: true });
  });
});
