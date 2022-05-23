import styled from 'styled-components';
import PALETTE from '../../constants/palette';
<<<<<<< HEAD
// import { Subscription, SummarizedSubscription } from '../../types';

const StyledButton = styled.button`
  padding:0.375rem 0.75rem;
  margin-left:1em;
  border-radius:0.45rem;
  font-size:0.8em;
  line-height:1.5;
  font-weight:700;
  color:${PALETTE.BLACK};
  background-color:${PALETTE.LIGHT_010};
  }
`;

const onClicked = (e: React.MouseEventHandler<HTMLButtonElement>) => {

};


const PopularButtons = () => {

  return (
    <StyledButton>인기순</StyledButton>
  );
};

export default PopularButtons;
=======

const StyledButton = styled.button`
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  line-height: 1.5;
  color: ${PALETTE.BLACK};
  background-color: ${PALETTE.LIGHT_010};
`;

const PopularButtons = () => {
  return <StyledButton>최신순</StyledButton>;
};

export default PopularButtons;
>>>>>>> b6f6cd4864129c4452b79eb8e1738fbb23a0b9ef
