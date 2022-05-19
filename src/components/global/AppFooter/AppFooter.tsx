import {
  CalendarMonthOutlined,
  ChatBubbleOutline,
  MapsHomeWorkOutlined,
  AccountCircleOutlined,
} from '@mui/icons-material';
import { Box } from '@mui/material';
import { useAuthContext } from '~/hooks/context/AuthContext';
import FooterButton from './FooterButton';

export default function AppFooter() {
  const authContext = useAuthContext();

  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-around"
      width="100%"
      maxWidth="380px"
    >
      <FooterButton icon={<MapsHomeWorkOutlined />} text="Home" href="/" />
      <FooterButton icon={<ChatBubbleOutline />} text="Chat" href="/chat" />
      <FooterButton
        icon={<CalendarMonthOutlined />}
        text="New Event"
        href="/event/create"
      />
      {authContext.isLoggedIn && (
        <FooterButton
          icon={<AccountCircleOutlined />}
          text="Account"
          href="/account"
        />
      )}
    </Box>
  );
}
