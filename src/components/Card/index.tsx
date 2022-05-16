import styled from 'styled-components';
import BlueHeart from '../../asset/BlueHeart';
import { COLOR } from '../../constants';

const BORDER_RADIUS = '8px';

const StyledCard = styled.article<{ backgroundImg: string }>`
  border-radius: ${BORDER_RADIUS};
  background-image: ${(props) => props.backgroundImg};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

const StyledTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  height: 36.26%;
  border-radius: 0 0 ${BORDER_RADIUS} ${BORDER_RADIUS};
  background-color: ${COLOR.LIGHT_010};
`;

const StyledTitle = styled.span`
  font-size: 1rem;
  font-weight: bold;
`;

const StyledLikeNumContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 12.74%;
`;

const StyledLikeNum = styled.span`
  font-size: 0.75rem;
  color: ${COLOR.DARK_020};
`;

export type CardProps = {
  backgroundImg?: string;
  title: string;
  likeNum: number;
};

const Card = ({ backgroundImg = '', title, likeNum }: CardProps) => {
  return (
    <StyledCard backgroundImg={backgroundImg}>
      <StyledTitleContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledLikeNumContainer>
          <BlueHeart />
          <StyledLikeNum>{likeNum}</StyledLikeNum>
        </StyledLikeNumContainer>
      </StyledTitleContainer>
    </StyledCard>
  );
};

export default Card;
