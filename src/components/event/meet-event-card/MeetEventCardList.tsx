import { Box } from '@mui/material';
import { MeetEventCard, MeetEventCardProps } from './MeetEventCard';

type MeetEventCardListProps = {
  cards: MeetEventCardProps[];
};

export default function MeetEventCardList({ cards }: MeetEventCardListProps) {
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      overflow="scroll"
      gap={2}
      sx={{
        '&::-webkit-scrollbar': {
          width: 0,
        },
      }}
      width="100%"
    >
      {cards.map((card) => {
        return <MeetEventCard {...card} />;
      })}
    </Box>
  );
}
