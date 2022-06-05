import {
  AccountCircleOutlined,
  CalendarMonthOutlined,
  MapsHomeWorkOutlined,
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
      <FooterButton
        sx={{ flex: 1 }}
        icon={<MapsHomeWorkOutlined />}
        text="Home"
        href="/"
      />
      {authContext.isLoggedIn && (
        <FooterButton
          sx={{ flex: 1 }}
          icon={<CalendarMonthOutlined />}
          text="New Event"
          href="/event/create"
        />
      )}
      {authContext.isLoggedIn && (
        <FooterButton
          sx={{ flex: 1 }}
          icon={<AccountCircleOutlined />}
          text="Account"
          href="/user"
        />
      )}
    </Box>
  );
}
