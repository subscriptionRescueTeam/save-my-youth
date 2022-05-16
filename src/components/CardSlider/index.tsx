import { useState } from 'react';
import styled from 'styled-components';

const StyledContainer = styled.section``;

const StyledDots = styled.div``;

const 임시청약리스트 = [
  {
    id: 1,
    title: '나는 청약',
    likeNum: 26,
  },
  {
    id: 2,
    title: '나는 청약',
    likeNum: 26,
  },
  {
    id: 3,
    title: '나는 청약',
    likeNum: 26,
  },
  {
    id: 4,
    title: '나는 청약',
    likeNum: 26,
  },
  {
    id: 5,
    title: '나는 청약',
    likeNum: 26,
  },
  {
    id: 6,
    title: '나는 청약',
    likeNum: 26,
  },
];

const CardSlider = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const moveDot = (index: number) => {
    setSlideIndex(index);
  };

  return (
    <StyledContainer>
      {임시청약리스트.map((청약, index) => {
        return <div></div>;
      })}

      <div>
        {Array.from({ length: 5 }).map((item, index) => (
          <div
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? 'dot active' : 'dot'}
          ></div>
        ))}
      </div>
    </StyledContainer>
  );
};

export default CardSlider;
