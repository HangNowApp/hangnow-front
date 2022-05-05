import {
  CalendarMonthOutlined,
  ChatBubbleOutlined,
  MapsHomeWorkOutlined,
} from '@mui/icons-material';
import { Box } from '@mui/material';
import FooterButton from './FooterButton';

export default function AppFooter() {
  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-around"
      width="100%"
      maxWidth="380px"
    >
      <FooterButton icon={<MapsHomeWorkOutlined />} text="Home" href="/home" />
      <FooterButton icon={<ChatBubbleOutlined />} text="Chat" href="/chat" />
      <FooterButton
        icon={<CalendarMonthOutlined />}
        text="Events"
        href="/events"
      />
    </Box>
  );
}
