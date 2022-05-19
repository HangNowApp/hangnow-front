import { UserAccount } from '~/components/user';
import { useAuthContext } from '~/hooks/context/AuthContext';

export default function account() {
  const authContext = useAuthContext();

  if (authContext.isLoading) {
    return null;
  }

  return (
    <div>
      <UserAccount></UserAccount>
    </div>
  );
}
