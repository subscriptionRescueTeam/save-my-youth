import styled from 'styled-components';

import { SubscriptionUsedFront } from '../types';
import ApplyCard from './ApplyCard';
import TodaySubscriptionNull from './TodaySubscriptionNull';

export type CardSliderProps = {
  subscriptions: SubscriptionUsedFront[];
};

const CardSlider = ({ subscriptions }: CardSliderProps) => {
  return (
    <StyledCardConatiner>
      <StyledCardSlider
        subscriptionsLength={subscriptions.length}
        nullShow={subscriptions.length < 2}
      >
        {subscriptions.map((subscription) => (
          <ApplyCard
            subscriptionId={subscription.id}
            key={subscription.id}
            title={subscription.houseName}
            likeNum={subscription.likeNum || 0}
          />
        ))}
        {subscriptions.length < 1 && <TodaySubscriptionNull />}
      </StyledCardSlider>
    </StyledCardConatiner>
  );
};

export default CardSlider;

const StyledCardConatiner = styled.section`
  overflow-x: scroll; // PC
  -webkit-overflow-scrolling: touch; // mobile */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledCardSlider = styled.div<{
  subscriptionsLength: number;
  nullShow: boolean;
}>`
  padding-left: 16px;
  height: 100%;
  display: flex;
  gap: 16px;
`;
