import { useState } from 'react';
import styled from 'styled-components';
import Card from '../Card';
import tmpImg from '../../asset/picture.png';
import { COLOR } from '../../constants';

const DOT_RADIUS = '6px';

const StyledCardsContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Slide = styled.div`
  width: 100%;
  height: 100%;
  /* position: absolute; */
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
  background: ${(props) => (props.active ? COLOR.PRI_MAIN : COLOR.LIGHT_030)};
`;

const 임시청약리스트 = [
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
        {임시청약리스트.map((청약, index) => {
          return (
            <Slide key={청약.id}>
              <Card title={청약.title} likeNum={청약.likeNum} />
            </Slide>
          );
        })}
      </StyledCardsContainer>

      <StyledDotsContainer>
        {Array.from({ length: 임시청약리스트.length }).map((item, index) => (
          <StyledDot
            active={slideIndex === index + 1}
            onClick={() => moveDot(index + 1)}
          ></StyledDot>
        ))}
      </StyledDotsContainer>
    </section>
  );
};

export default CardSlider;
