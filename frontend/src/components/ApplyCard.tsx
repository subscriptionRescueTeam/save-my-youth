import { ReactComponent as BlueHeart } from '@assets/icons/blueHeart.svg';
import House1 from '@assets/images/house/image1.png';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import PALETTE from '@constants/palette';
import { CARD_BORDER_RADIUS } from '@constants/variables';

export type CardProps = {
  subscriptionId: number;
  image?: string;
  title: string;
  likeNum: number;
};

const ApplyCard = ({ subscriptionId, image = House1, title, likeNum }: CardProps) => {
  const navigate = useNavigate();

  return (
    <StyledCard
      onClick={() =>
        navigate('/detail', {
          state: { id: subscriptionId, imgLink: House1 },
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

export default ApplyCard;

const StyledCard = styled.article`
  width: 16.25rem;
  height: 12.125rem;
  border-radius: ${CARD_BORDER_RADIUS}px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const StyledImage = styled.img<{ image: string }>`
  height: 7.75rem;
  border-radius: ${CARD_BORDER_RADIUS}px ${CARD_BORDER_RADIUS}px 0 0;
  content: url(${(props) => props.image});
  object-fit: cover;
`;

const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: ${PALETTE.LIGHT_010};
  border-radius: 0 0 ${CARD_BORDER_RADIUS}px ${CARD_BORDER_RADIUS}px;
`;

const StyledTitle = styled.span`
  font-weight: bold;
  line-height: 1.5rem;
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
