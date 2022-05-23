import { TabBar, LayoutNavigation } from '../../components';
import ServiceInfo from '../../components/ServiceInfo';
import TeamInfo from '../../components/TeamInfo';

const menu = [
  { name: '서비스 소개', option: 'service' },
  { name: '팀 소개', option: 'team' },
];
const checkList = {
  0: <ServiceInfo />,
  1: <TeamInfo />,
};

const Info = () => {
  return (
    <LayoutNavigation>
      <TabBar menu={menu} checkList={checkList} />
    </LayoutNavigation>
  );
};

export default Info;
