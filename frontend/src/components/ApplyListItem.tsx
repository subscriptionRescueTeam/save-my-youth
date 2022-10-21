import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { ReactComponent as BlueHeart } from '../assets/icons/blueHeart.svg';
import House1 from '../assets/images/house/image1.png';
import PALETTE from '../constants/palette';
import { CARD_BORDER_RADIUS } from '../constants/variables';

export type ApplyListItemProps = {
  subscriptionId: number;
  image?: string;
  title: string;
  likeNum: number;
};

const ApplyListItem = ({ subscriptionId, image = House1, title, likeNum }: ApplyListItemProps) => {
  const navigate = useNavigate();

  return (
    <StyledCard
      onClick={() =>
        navigate('/detail', {
          state: { id: subscriptionId, imgLink: image },
        })
      }
    >
      <StyledImage image={image} />
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
  border-radius: ${CARD_BORDER_RADIUS}px;
  display: flex;
  flex-direction: row;
  cursor: pointer;
`;

const StyledImage = styled.img<{ image: string }>`
  width: 5.875rem;
  height: 6.375rem;
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
  font-weight: bold;
  padding: 0.5rem 0.75rem;
  background: ${PALETTE.LIGHT_010};
`;

const StyledLikeNumContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: ${PALETTE.LIGHT_010};
  border-radius: 0 0 ${CARD_BORDER_RADIUS}px ${CARD_BORDER_RADIUS}px;
  padding: 0.375rem 0.5rem;
  gap: 0.25rem;
`;

const StyledLikeNum = styled.span`
  font-size: 0.75rem;
  color: ${PALETTE.DARK_020};
`;
