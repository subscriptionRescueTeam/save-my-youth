import styled from 'styled-components';
import Card from './Card';
import { SubscriptionUsedMainPage } from '../types';
import TodaySubscriptionNull from './TodaySubscriptionNull';

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
  todaySubscriptionsLength: number;
  nullShow: boolean;
}>`
  position: relative;
  top: 0;
  left: ${(props) => (props.nullShow ? '0px' : '1200px')};
  height: 100%;
  display: flex;
  transition: all 1s ease;
`;

export type CardSliderProps = {
  todaySubscriptions: SubscriptionUsedMainPage[];
};

const CardSlider = ({ todaySubscriptions }: CardSliderProps) => {
  return (
    <section>
      <StyledCardConatiner>
        <StyledCardSlider
          todaySubscriptionsLength={todaySubscriptions.length}
          nullShow={todaySubscriptions.length < 2}
        >
          {todaySubscriptions.map((todaySubscription) => (
            <Card
              key={todaySubscription.id}
              title={todaySubscription.houseName}
              likeNum={todaySubscription.likeNum}
            />
          ))}
          {todaySubscriptions.length < 2 && <TodaySubscriptionNull />}
        </StyledCardSlider>
      </StyledCardConatiner>
    </section>
  );
};

export default CardSlider;
