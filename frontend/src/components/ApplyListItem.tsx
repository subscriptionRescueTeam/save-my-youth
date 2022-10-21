import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { ReactComponent as BlueHeart } from '../assets/icons/blueHeart.svg';
import House1 from '../assets/images/house/image1.png';
import House2 from '../assets/images/house/image2.png';
import House3 from '../assets/images/house/image3.png';
import House4 from '../assets/images/house/image4.png';
import House5 from '../assets/images/house/image5.png';
import House6 from '../assets/images/house/image6.png';
import PALETTE from '../constants/palette';
import {
  CARD_BORDER_RADIUS,
  CARD_HEIGHT_COLUMN,
  CARD_HEIGHT_ROW,
  CARD_WIDTH_COLUMN,
  CARD_WIDTH_ROW,
} from '../constants/variables';

export type ApplyListItemProps = {
  subscriptionId: number;
  image?: string;
  title: string;
  likeNum: number;
};

const ApplyListItem = ({
  subscriptionId,
  image = `House` + String(Math.floor(Math.random() * 6 + 1)),
  title,
  likeNum,
}: ApplyListItemProps) => {
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
    <StyledCard
      onClick={() =>
        navigate('/detail', {
          state: { id: subscriptionId, imgLink: getImage(image) },
        })
      }
    >
      <StyledImage image={getImage(image)} />
      <StyledTextContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledLikeNumContainer>
          <BlueHeart />
          <StyledLikeNum>{likeNum}</StyledLikeNum>
        </StyledLikeNumContainer>
      </StyledTextContainer>
    </StyledCard>
  );
};

export default ApplyListItem;

const StyledCard = styled.article`
  width: 100%;
  height: 100%;
  border-radius: ${CARD_BORDER_RADIUS}px;
  display: flex;
  flex-direction: row;
  cursor: pointer;
`;

const StyledImage = styled.img<{ image: string }>`
  width: ${CARD_WIDTH_ROW}px;
  height: ${CARD_HEIGHT_ROW}px;
  border-radius: ${CARD_BORDER_RADIUS}px 0 0 ${CARD_BORDER_RADIUS}px;
  content: url(${(props) => props.image});
  object-fit: cover;
`;

const StyledTextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: ${PALETTE.LIGHT_010};
  border-radius: 0 ${CARD_BORDER_RADIUS}px ${CARD_BORDER_RADIUS}px 0;
`;

const StyledTitle = styled.span`
  width: 100%;
  height: 40px;
  font-size: 1rem;
  font-weight: bold;
  line-height: 1.5rem;
  padding: 8px 12px;
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
  gap: 4px;
`;

const StyledLikeNum = styled.span`
  font-size: 0.75rem;
  color: ${PALETTE.DARK_020};
`;
