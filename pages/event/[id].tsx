import React from 'react';
import { EventView } from '~/components/event/event-view';
import { AppEvent } from '~/types/event';

export default function ({ id, name }: AppEvent) {
  return (
    <div>
      <EventView id={id} name={name}></EventView>
    </div>
  );
}
