import { ReactComponent as Warning } from '@assets/icons/warning.svg';
import styled from 'styled-components';
import Accordion from '@components/Accordion';
import PALETTE from '@constants/palette';
import useFAQ from '@hooks/useFAQ';
import { AccordionType, FAQType, HelpContents, HelpType } from '../types';
import { LayoutNavigation, TabBar } from '@components';

const menu: HelpType[] = [
  { name: '공지사항', option: 'announcement' },
  { name: 'FAQ', option: 'faq' },
  { name: '1:1 문의', option: 'inquiry' },
];

const StyledContent = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledWarning = styled.span`
  height: 96px;
  font-size: 1rem;
  color: ${PALETTE.DARK_030};
  margin-top: 22%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const serviceContent = (
  <StyledContent>
    <StyledWarning>
      <Warning />
      등록된 공지사항이 없습니다
    </StyledWarning>
  </StyledContent>
);

export type FAQContentProps = {
  FAQList: FAQType[];
};

const FAQContent = ({ FAQList }: FAQContentProps) => {
  return (
    <StyledContent>
      {FAQList.map((FAQ) => {
        const newFAQ: AccordionType = {
          head: {
            optionName: `Q. ${FAQ.question}`,
            link: '#',
            fontSize: '1rem',
            fontFamily: 'Pretendard-Medium',
            underlineHeight: '2px',
            isShownAlways: true,
          },
          tails: [
            {
              optionName: `A. ${FAQ.answer}`,
              link: '#',
              fontSize: '0.875rem',
              underlineHeight: '2px',
              isShownAlways: true,
            },
          ],
        };

        return <Accordion key={FAQ.question} contents={newFAQ} />;
      })}
    </StyledContent>
  );
};

const requestContent = (
  <StyledContent>
    <StyledWarning>
      <Warning />
      등록된 공지사항이 없습니다
    </StyledWarning>
  </StyledContent>
);

const Help = () => {
  const { FAQList } = useFAQ();

  const dynamicFAQContent = (
    <>
      {FAQList && <FAQContent FAQList={FAQList} />}
      {!FAQList && <StyledWarning>등록된 게시물이 없습니다</StyledWarning>}
    </>
  );

  const helpContents: HelpContents = {
    0: serviceContent,
    1: dynamicFAQContent,
    2: requestContent,
  };

  return (
    <>
      <LayoutNavigation headerTitle="고객센터">
        <TabBar menu={menu} checkList={helpContents} />
      </LayoutNavigation>
    </>
  );
};

export default Help;
