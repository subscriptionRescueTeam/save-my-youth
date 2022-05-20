import styled from 'styled-components';
import { TabBar } from '../../components';
import CommonHeader from '../../components/CommonHeader';
import PALETTE from '../../constants/palette';
import { HelpType, HelpContents } from '../../types';
import { ReactComponent as Warning } from '../../assets/icons/warning.svg';

const menu: HelpType[] = [
  { name: '공지사항', option: 'announcement' },
  { name: 'FAQ', option: 'faq' },
  { name: '1:1 문의', option: 'inquiry' },
];

const tempFAQ = [
  {
    question: '청약 구조대에는 누가 있나요?',
    answer: '퉁이리, 다츠, 플로라, 헬렌, 매직타로가 있습니다.',
  },
  {
    question: '청약 구조대를 좋아하나요??',
    answer: '네~',
  },
  {
    question: '청약 구조대의 깃허브 주소는 무엇인가요?',
    answer: 'https://github.com/subscriptionRescueTeam/save-my-youth',
  },
];

const StyledContent = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 12.97vh;
`;

const StyledWarning = styled.span`
  font-size: 1rem;
  color: ${PALETTE.DARK_030};
  margin-top: 1.5rem;
`;

const serviceContent = (
  <StyledContent>
    <Warning />
    <StyledWarning>등록된 공지사항이 없습니다</StyledWarning>
  </StyledContent>
);

const FAQContent = (
  <StyledContent>
    {tempFAQ && (
      <div>
        {tempFAQ.map((question, answer) => (
          <div>hi</div>
        ))}
      </div>
    )}
    {!tempFAQ && <StyledWarning>등록된 게시물이 없습니다</StyledWarning>}
  </StyledContent>
);

const requestContent = (
  <StyledContent>
    <Warning />
    <StyledWarning>등록된 게시물이 없습니다</StyledWarning>
  </StyledContent>
);

const helpContents: HelpContents = {
  0: serviceContent,
  1: FAQContent,
  2: requestContent,
};

const Help = () => {
  return (
    <>
      <CommonHeader title="고객 센터" />
      <TabBar menu={menu} checkList={helpContents} />
    </>
  );
};

export default Help;
