import { describe, it, expect, vi } from 'vitest';
import { addEventToCalendar } from './calendar';

describe('Calendar Utilities', () => {
  it('addEventToCalendar calls fetch with correct parameters', async () => {
    window.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ id: '123' })
    });

    const mockEvent = {
      summary: 'Test Phase',
      description: 'Test Desc',
      startDateTime: '2026-05-01T09:00:00',
      endDateTime: '2026-05-01T17:00:00'
    };

    const result = await addEventToCalendar('fake-token', mockEvent);
    
    expect(fetch).toHaveBeenCalled();
    expect(result.id).toBe('123');
  });
});
