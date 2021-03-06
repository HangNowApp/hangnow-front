import { NextPage, NextPageContext } from 'next';
import React from 'react';
import { clientJson } from '~/client/client';
import { EventView } from '~/components/event/event-view';
import { AppEvent } from '~/types/event';

type Data = {
  event: AppEvent;
};

const Event: NextPage<Data> = (props) => (
  <div>
    <EventView event={props.event}></EventView>
  </div>
);

export async function getServerSideProps(
  context: NextPageContext
): Promise<{ props: Data }> {
  const { eventId } = context.query;
  const event = await clientJson<AppEvent>(`event/${eventId}`);
  return { props: { event } };
}

export default Event;
