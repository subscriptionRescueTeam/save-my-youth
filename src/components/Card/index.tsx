import styled from 'styled-components';
import BlueHeart from '../../asset/BlueHeart';
import { COLOR } from '../../constants';
import tmpImg from '../../asset/picture.png';

const BORDER_RADIUS = '8px';

// TODO: 받아온 사진에 따라 이미지 다르게 보여주기
const StyledCard = styled.article<{ backgroundImg: string }>`
  width: 259px;
  height: 193px;
  border-radius: ${BORDER_RADIUS};
  background-image: url(${tmpImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: 0.375rem;
`;

const StyledTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  height: 36.26%;
  border-radius: 0 0 ${BORDER_RADIUS} ${BORDER_RADIUS};
  background-color: ${COLOR.LIGHT_010};
  padding: 8px 12px 8px 12px;
`;

const StyledTitle = styled.span`
  font-size: 1rem;
  font-weight: bold;
  line-height: 1.5rem;
`;

const StyledLikeNumContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 15.5%;
`;

const StyledLikeNum = styled.span`
  font-size: 0.75rem;
  color: ${COLOR.DARK_020};
`;

export type CardProps = {
  backgroundImg?: string;
  title: string;
  likeNum: number;
};

const Card = ({ backgroundImg = tmpImg, title, likeNum }: CardProps) => {
  return (
    <StyledCard backgroundImg={backgroundImg}>
      <StyledTitleContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledLikeNumContainer>
          <BlueHeart />
          <StyledLikeNum>{likeNum}</StyledLikeNum>
        </StyledLikeNumContainer>
      </StyledTitleContainer>
    </StyledCard>
  );
};

export default Card;
