import PALETTE from '../constants/palette';
import styled from 'styled-components';
import { ReactComponent as BlueHeart } from '../assets/icons/blueHeart.svg';
import { useNavigate } from 'react-router-dom';
import { SubscriptionUsedFront } from '../types';

export type SearchCardItemProps = {
  subscription: SubscriptionUsedFront;
  indexing?: boolean;
  index?: number;
};

const SearchCardItem = ({ subscription, indexing = true, index = 1 }: SearchCardItemProps) => {
  const navigate = useNavigate();

  return (
    <StyledBox>
      {indexing && <StyledIndex index={index}>{index}</StyledIndex>}
      <StyledCard key={subscription.id} onClick={() => navigate('/detail')}>
        <StyledText>
          <StyledTitle>{subscription.houseName}</StyledTitle>
          <StyledLocal>{subscription.houseLocation}</StyledLocal>
          <StyledDate>
            {subscription.applyStartDate}~{subscription.applyEndDate}
          </StyledDate>
        </StyledText>
        <StyledLike>
          <BlueHeart />
          {subscription.likeNum}
        </StyledLike>
      </StyledCard>
    </StyledBox>
  );
};

export default SearchCardItem;

const StyledBox = styled.article`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: center;
  gap: 24px;
`;

const StyledIndex = styled.span<{ index: number }>`
  font-family: 'Noto Sans';
  font-weight: ${(props) => (props.index > 3 ? 'normal' : 'bold')};
  font-size: '1.25rem';
  line-height: 190%;
  letter-spacing: -0.5px;
  color: ${(props) => (props.index > 3 ? PALETTE.DARK_030 : PALETTE.PRI_DARK_020)};
`;

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0.7rem;
  border: 0.1rem solid ${PALETTE.PRI_LIGHT_010};
  border-radius: 0.5rem;
  background-color: ${PALETTE.WHITE};
  color: ${PALETTE.BLACK};
`;

const StyledText = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const StyledTitle = styled.li`
  font-size: 0.8em;
  font-weight: bold;
  margin-bottom: 0.1rem;
`;

const StyledLocal = styled.li`
  font-size: 0.7em;
  color: ${PALETTE.PRI_DARK_010};
`;

const StyledDate = styled.li`
  font-size: 0.7em;
  color: ${PALETTE.DARK_020};
`;

const StyledLike = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 4px;
  font-size: 0.7em;
  color: ${PALETTE.DARK_020};
`;
