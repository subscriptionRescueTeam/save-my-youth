import { LayoutNavigation, ServiceMenu } from '@components';

const Mypage = () => {
  return (
    <LayoutNavigation headerTitle="My Page" haederUnderline={true}>
      <ServiceMenu />
    </LayoutNavigation>
  );
};

export default Mypage;
