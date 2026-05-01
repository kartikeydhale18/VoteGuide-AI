// Utility for Google Calendar API integration
// Note: Requires configuring OAuth credentials in Google Cloud Console

export const addEventToCalendar = async (accessToken, eventDetails) => {
  const event = {
    summary: eventDetails.summary,
    description: eventDetails.description,
    start: {
      dateTime: eventDetails.startDateTime,
      timeZone: 'Asia/Kolkata',
    },
    end: {
      dateTime: eventDetails.endDateTime,
      timeZone: 'Asia/Kolkata',
    },
  };

  try {
    const response = await fetch('https://www.googleapis.com/calendar/v3/calendars/primary/events', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(event),
    });

    if (response.ok) {
      const data = await response.json();
      console.log('Event created: ', data.htmlLink);
      return data;
    } else {
      console.error('Failed to create event', await response.text());
      return null;
    }
  } catch (error) {
    console.error('Error adding event to calendar:', error);
    return null;
  }
};
