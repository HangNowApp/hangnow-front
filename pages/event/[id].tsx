import { NextPage, NextPageContext } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { clientJson } from '~/client/client';
import { EventView } from '~/components/event/event-view';
import { AppEvent } from '~/types/event';

type Data = {
  event: AppEvent;
};

const Event: NextPage<Data> = (props) => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);

  return (
    <div>
      <EventView event={props.event}></EventView>
    </div>
  );
};

export async function getServerSideProps(
  context: NextPageContext
): Promise<{ props: Data }> {
  const { id } = context.query;
  const event = (await clientJson(`event/${id}`)) as AppEvent;

  return { props: { event } };
}

export default Event;
