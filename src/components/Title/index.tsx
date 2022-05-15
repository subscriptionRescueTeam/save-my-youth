import styled from 'styled-components';

const StyledTitleContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const StyledTitle = styled.h1`
  white-space: pre;
  font-size: 3rem;
`;

const StyledSubTitle = styled.h3`
  font-size: 1rem;
`;

export type TitleProps = {
  title: string;
  subTitle: string;
};

const Title = ({ title, subTitle }: TitleProps) => {
  const splitedTitle = title.split(' ');

  return (
    <StyledTitleContainer>
      <StyledTitle>{splitedTitle[0]}</StyledTitle>
      <StyledTitle>{splitedTitle[1]}</StyledTitle>
      <StyledSubTitle>{subTitle}</StyledSubTitle>
    </StyledTitleContainer>
  );
};

export default Title;
