import { Box } from '@mui/material';
import { AppEvent } from '~/types/event';
import { MeetEventCard } from './MeetEventCard';

type MeetEventCardListProps = {
  cards: AppEvent[];
};

export default function MeetEventCardList({ cards }: MeetEventCardListProps) {
  return (
    <Box
      sx={{
        width: 1,
        display: 'flex',
        overflow: 'auto',
        gap: 2,
        py: 2,
        px: 1,
        '& > *': {
          minWidth: 260,
        },
      }}
    >
      {cards.map((card) => {
        return <MeetEventCard {...card} key={card.id} />;
      })}
    </Box>
  );
}
