import UserInfo from '@components/UserInfo';
import { LayoutNavigation } from '@components';

const UserModify = () => {
  return (
    <LayoutNavigation headerTitle="개인정보">
      <UserInfo />
    </LayoutNavigation>
  );
};

export default UserModify;
