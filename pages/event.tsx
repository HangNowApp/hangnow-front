import React from 'react';
import { EventCard } from '~/components/event/event-card';

export default function Event() {
  return (
    <div>
      <EventCard
        title="Title of event"
        description="Description of event"
        username="Username"
        avatarUrl="https://caricom.org/wp-content/uploads/Floyd-Morris-Remake-1024x879-1.jpg"
        time="3m ago"
        tag="Finances"
      ></EventCard>
    </div>
  );
}
