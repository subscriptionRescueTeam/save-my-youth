import styled from 'styled-components';

const StyledTitleContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StyledTitle = styled.h1<{ content: string }>`
  content: ${(props) => props.content};
  white-space: pre;
  font-size: 3rem;
`;

const StyledSubTitle = styled.h3<{ content: string }>`
  content: ${(props) => props.content};
  font-size: 1rem;
`;

export type TitleProps = {
  title: string;
  subTitle: string;
};

const Title = ({ title, subTitle }: TitleProps) => {
  return (
    <StyledTitleContainer>
      <StyledTitle content={title} />
      <StyledSubTitle content={subTitle} />
    </StyledTitleContainer>
  );
};

export default Title;
