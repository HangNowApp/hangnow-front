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
        flexDirection: 'column',
        gap: 2,
        py: 2,
        mb: 16,
        '& > *': {
          minWidth: 260,
        },
      }}
    >
      {cards.map((card) => (
        <MeetEventCard key={card.id} event={card} />
      ))}
    </Box>
  );
}
