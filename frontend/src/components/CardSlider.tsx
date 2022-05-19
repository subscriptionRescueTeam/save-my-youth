import { useState } from 'react';
import styled from 'styled-components';
import Card from './Card';
import tmpImg from '../assets/images/picture2.png';
import PALETTE from '../constants/palette';

const DOT_RADIUS = '6px';

const StyledCardsContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Slide = styled.div`
  width: 100%;
  height: 100%;
  transition: ease-in-out 0.4s;
`;

const StyledDotsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 1.5rem 0 1.5rem 0;
`;

const StyledDot = styled.button<{ active: boolean }>`
  width: 10px;
  height: 10px;
  min-width: ${DOT_RADIUS};
  min-height: ${DOT_RADIUS};
  border-radius: 50%;
  padding: 0;
  margin: 0 2px;
  background: ${(props) => (props.active ? PALETTE.PRI_MAIN : PALETTE.LIGHT_030)};
`;

const tempSubscription = [
  {
    id: 1,
    title: '제 1차 장기전세주택 입주자모집공고',
    likeNum: 26,
    imgLink: tmpImg,
  },
  {
    id: 2,
    title: '제 1차 장기전세주택 입주자모집공고',
    likeNum: 26,
    imgLink: tmpImg,
  },
  {
    id: 3,
    title: '제 1차 장기전세주택 입주자모집공고',
    likeNum: 26,
    imgLink: tmpImg,
  },
  {
    id: 4,
    title: '제 1차 장기전세주택 입주자모집공고',
    likeNum: 26,
    imgLink: tmpImg,
  },
  {
    id: 5,
    title: '제 1차 장기전세주택 입주자모집공고',
    likeNum: 26,
    imgLink: tmpImg,
  },
  {
    id: 6,
    title: '제 1차 장기전세주택 입주자모집공고',
    likeNum: 26,
    imgLink: tmpImg,
  },
];

// ref: https://github.com/Ziratsu/slider-react/tree/a44cc92f02b0e4995cc661e04c32724fc946ac59
const CardSlider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const moveDot = (index: number) => {
    setSlideIndex(index);
  };

  return (
    <section>
      <StyledCardsContainer>
        {tempSubscription.map((v, index) => {
          return (
            <Slide key={v.id}>
              <Card title={v.title} likeNum={v.likeNum} />
            </Slide>
          );
        })}
      </StyledCardsContainer>

      <StyledDotsContainer>
        {Array.from({ length: tempSubscription.length }).map((item, index) => (
          <StyledDot
            key={`${index}-${item}`}
            active={slideIndex === index}
            onClick={() => moveDot(index)}
          ></StyledDot>
        ))}
      </StyledDotsContainer>
    </section>
  );
};

export default CardSlider;
