import styled from 'styled-components';
import { TabBar } from '../../components';
import CommonHeader from '../../components/CommonHeader';

const StyledTabWrap = styled.div`
  gap: 3;
`;

const menu = [
  { name: '공지사항', option: 'announcement' },
  { name: 'FAQ', option: 'faq' },
  { name: '1:1 문의', option: 'inquiry' },
];
const checkList: any = {
  0: <>공지사항, 자주묻는 질문을 확인할 수 있어요.</>,
  1: <>자주묻는 질문을 확인할 수 있어요.</>,
  2: <>1:1 문의로 궁금하신 내용을 직접 문의하실 수 있어요.</>,
};

const ServiceCenter = () => {
  return (
    <>
      <CommonHeader title="고객 센터" />
      <TabBar menu={menu} checkList={checkList} />
    </>
  );
};

export default ServiceCenter;
