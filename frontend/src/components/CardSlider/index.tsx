import { useState } from 'react';
import styled from 'styled-components';
import Card from '../Card';
import { CARD_WIDTH, SubscriptionUsedMainPage } from '../../types';
import TodaySubscriptionNull from '../TodaySubscriptionNull';

// TODO: 스크롤 맨 오른쪽까지 되게 수정
const StyledCardConatiner = styled.div`
  position: relative;
  width: 100%;
  overflow-x: scroll; // PC
  //-webkit-overflow-scrolling: touch; // mobile */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

const StyledCardSlider = styled.div<{
  slideIndex: number;
  todaySubscriptionsLength: number;
  nullShow: boolean;
}>`
  position: relative;
  top: 0;
  left: ${(props) => (props.nullShow ? '0px' : '100px')};
  height: 100%;
  display: flex;
  transition: all 1s ease;
  /* transform: translateX(
    ${(props) =>
    props.slideIndex * -CARD_WIDTH + (CARD_WIDTH * (props.todaySubscriptionsLength - 2)) / 2}px
  ); */
`;

export type CardSliderProps = {
  todaySubscriptions: SubscriptionUsedMainPage[];
};

const CardSlider = ({ todaySubscriptions }: CardSliderProps) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const onDotClick = (index: number) => {
    setSlideIndex(index);
  };

  return (
    <section>
      <StyledCardConatiner>
        <StyledCardSlider
          slideIndex={slideIndex}
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
