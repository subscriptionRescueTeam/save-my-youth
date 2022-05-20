import styled from 'styled-components';
import { ReactComponent as BlueHeart } from '../assets/icons/blueHeart.svg';
import PALETTE from '../constants/palette';
import tmpImg from '../assets/images/picture2.png';
import { useNavigate } from 'react-router-dom';
import { CARD_HEIGHT, CARD_WIDTH } from '../../types';

const BORDER_RADIUS = '8px';

// TODO: background -> image 변경
const StyledCard = styled.article<{ backgroundImg: string }>`
  width: ${CARD_WIDTH}vw;
  height: ${CARD_HEIGHT}vw;
  border-radius: ${BORDER_RADIUS};
  background-image: url(${tmpImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: 0.375rem;
  cursor: pointer;
`;

const StyledTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  height: 36.26%;
  border-radius: 0 0 ${BORDER_RADIUS} ${BORDER_RADIUS};
  background-color: ${PALETTE.LIGHT_010};
  padding: 8px 12px 8px 12px;
`;

const StyledTitle = styled.span`
  font-size: 1rem;
  font-weight: bold;
  line-height: 1.5rem;
`;

const StyledLikeNumContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 15.5%;
`;

const StyledLikeNum = styled.span`
  font-size: 0.75rem;
  color: ${PALETTE.DARK_020};
`;

export type CardProps = {
  backgroundImg?: string;
  title: string;
  likeNum: number;
};

const Card = ({ backgroundImg = tmpImg, title, likeNum }: CardProps) => {
  let navigate = useNavigate();
  return (
    <StyledCard onClick={() => navigate('/detail')} backgroundImg={backgroundImg}>
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
