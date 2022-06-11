import styled from 'styled-components';
import { ReactComponent as BlueHeart } from '../assets/icons/blueHeart.svg';
import PALETTE from '../constants/palette';
import House1 from '../assets/images/house/image1.png';
import House2 from '../assets/images/house/image2.png';
import House3 from '../assets/images/house/image3.png';
import House4 from '../assets/images/house/image4.png';
import House5 from '../assets/images/house/image5.png';
import House6 from '../assets/images/house/image6.png';
import { useNavigate } from 'react-router-dom';
import { CARD_HEIGHT, CARD_WIDTH, CARD_MARGIN, CARD_BORDER_RADIUS } from '../types';

const StyledCard = styled.article`
  width: ${CARD_WIDTH}px;
  height: ${CARD_HEIGHT}px;
  border-radius: ${CARD_BORDER_RADIUS}px;
  display: flex;
  flex-direction: column;
  margin: ${CARD_MARGIN}px;
  cursor: pointer;
`;

const StyledImage = styled.img<{ image: string }>`
  width: 100%;
  height: 124px;
  border-radius: ${CARD_BORDER_RADIUS}px ${CARD_BORDER_RADIUS}px 0 0;
  content: url(${(props) => props.image});
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

const Card = ({
  image = `House` + String(Math.floor(Math.random() * 6 + 1)),
  title,
  likeNum,
}: CardProps) => {
  const navigate = useNavigate();

  const getImage = (image: string) => {
    switch (image) {
      case 'House1':
        return House1;
      case 'House2':
        return House2;
      case 'House3':
        return House3;
      case 'House4':
        return House4;
      case 'House5':
        return House5;
      case 'House6':
        return House6;
    }
  };

  return (
    <StyledCard onClick={() => navigate('/detail')}>
      <StyledImage image={getImage(image)} />
      <StyledTitle>{title}</StyledTitle>
      <StyledLikeNumContainer>
        <BlueHeart />
        <StyledLikeNum>{likeNum}</StyledLikeNum>
      </StyledLikeNumContainer>
    </StyledCard>
  );
};

export default Card;
