import styled from 'styled-components';
import { SubscriptionUsedFront } from '../types';
import Card from './Card';
import TodaySubscriptionNull from './TodaySubscriptionNull';

export type CardSliderProps = {
  subscriptions: SubscriptionUsedFront[];
};

const CardSlider = ({ subscriptions }: CardSliderProps) => {
  return (
    <section>
      <StyledCardConatiner>
        <StyledCardSlider
          subscriptionsLength={subscriptions.length}
          nullShow={subscriptions.length < 2}
        >
          {subscriptions.map((subscription) => (
            <Card
              subscriptionId={subscription.id}
              key={subscription.id}
              title={subscription.houseName}
              likeNum={subscription.likeNum || 0}
            />
          ))}
          {subscriptions.length < 2 && <TodaySubscriptionNull />}
        </StyledCardSlider>
      </StyledCardConatiner>
    </section>
  );
};

export default CardSlider;

const StyledCardConatiner = styled.div`
  position: relative;
  width: 100%;
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
  position: relative;
  top: 0;
  left: ${(props) => (props.nullShow ? '0px' : '1200px')};
  height: 100%;
  display: flex;
  transition: all 1s ease;
  gap: 16px;
`;
