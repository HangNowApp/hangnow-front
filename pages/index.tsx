import { Box, CircularProgress } from '@mui/material';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { clientJson } from '~/client/client';
import { Nullable } from '~/client/types/utility';
import MeetEventCardList from '~/components/event/meet-event-card/MeetEventCardList';
import TagFilter from '~/components/TagFilter/TagFilter';
import { AppEvent } from '~/types/event';
import { Tag } from '~/types/tag';

const Home: NextPage<Data> = (props) => {
  const [selectedTagId, setSelectedTagId] = useState<Nullable<number>>();
  const [events, setEvents] = useState<AppEvent[]>(props.events);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (selectedTagId == null) {
      return;
    }

    setIsLoading(true);
    getEvents(selectedTagId)
      .then((events) => {
        setEvents(events);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [selectedTagId]);

  return (
    <Box>
      <TagFilter
        tags={props.tags}
        selectedTagId={selectedTagId}
        onTagClick={(tag) => {
          setSelectedTagId(tag);
        }}
      />
      {isLoading ? (
        <CircularProgress />
      ) : events.length === 0 ? (
        <p>No events</p>
      ) : (
        <MeetEventCardList cards={events} />
      )}
    </Box>
  );
};

type Data = {
  tags: Tag[];
  events: AppEvent[];
};

const getEvents = (tagId?: number) => {
  let url = 'event';

  if (tagId) {
    url = `event?tagId=${tagId}`;
  }

  return clientJson<AppEvent[]>(url, { token: '' });
};

// This gets called on every request
export async function getServerSideProps(): Promise<{ props: Data }> {
  // Fetch data from external API
  const events = await getEvents();
  const tags = await clientJson<Tag[]>('tag');

  // Pass data to the page via props
  return { props: { events, tags } };
}

export default Home;
