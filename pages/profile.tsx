import { UserProfile } from '~/components/user';
import { useAuthContext } from '~/context/AuthContext';

export default function profile() {
  const authContext = useAuthContext();

  if (authContext.isLoading) {
    return null;
  }

  return (
    <div>
      <UserProfile></UserProfile>
    </div>
  );
}
