import styled from 'styled-components';
import { ReactComponent as BlueHeart } from '../../assets/icons/blueHeart.svg';
import PALETTE from '../../constants/palette';
import tmpImg from '../../assets/images/picture2.png';
import { useNavigate } from 'react-router-dom';
import { CARD_HEIGHT, CARD_WIDTH, CARD_MARGIN, CARD_BORDER_RADIUS } from '../../types';

// TODO: background -> image 변경
const StyledCard = styled.article`
  width: ${CARD_WIDTH}px;
  height: ${CARD_HEIGHT}px;
  border-radius: ${CARD_BORDER_RADIUS}px;
  display: flex;
  flex-direction: column;
  margin: ${CARD_MARGIN}px;
  cursor: pointer;
`;

const StyledImage = styled.div<{ image: string }>`
  width: 100%;
  height: 124px;
  border-radius: ${CARD_BORDER_RADIUS}px ${CARD_BORDER_RADIUS}px 0 0;
  content: url(${tmpImg});
  object-fit: cover;
`;

const StyledTitle = styled.span`
  width: 100%;
  height: 40px;
  font-size: 1rem;
  font-weight: bold;
  line-height: 1.5rem;
  padding: 8px 12px;
  text-align: center;
  background: ${PALETTE.LIGHT_010};
`;

const StyledLikeNumContainer = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: ${PALETTE.LIGHT_010};
  border-radius: 0 0 ${CARD_BORDER_RADIUS}px ${CARD_BORDER_RADIUS}px;
  padding: 6px 8px;
`;

const StyledLikeNum = styled.span`
  font-size: 0.75rem;
  color: ${PALETTE.DARK_020};
  margin-left: 4px;
`;

export type CardProps = {
  image?: string;
  title: string;
  likeNum: number;
};

const Card = ({ image = tmpImg, title, likeNum }: CardProps) => {
  let navigate = useNavigate();
  return (
    <StyledCard onClick={() => navigate('/detail')}>
      <StyledImage image={image} />
      <StyledTitle>{title}</StyledTitle>
      <StyledLikeNumContainer>
        <BlueHeart />
        <StyledLikeNum>{likeNum}</StyledLikeNum>
      </StyledLikeNumContainer>
    </StyledCard>
  );
};

export default Card;
