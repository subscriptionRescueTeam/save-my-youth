import React, { useState } from 'react';
import styled from 'styled-components';
import PALETTE from '../../constants/palette';

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


const PopularButtons = () => {
  const [isShow, setIsShow] = useState<boolean>(false);

  const onClicked = (e: React.MouseEventHandler<HTMLButtonElement>) => {

  };
  return (
    <StyledButton>최신순</StyledButton>
  );
};

export default PopularButtons;
