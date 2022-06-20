import styled from 'styled-components';
import React,{useState} from 'react';
import PALETTE from '../constants/palette';

const StyledButton = styled.button<{ isTarget:boolean }>`
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  line-height: 1.5;
  color: ${PALETTE.BLACK};
  background-color: ${PALETTE.LIGHT_010};
  margin-right:10px;
  .btn.active {
  background-color:${(props) => (props.isTarget ? 'PALETTE.LIGHT_010' : 'PALETTE.PRI_MAIN')};       
  color: ${(props) => (props.isTarget ? 'PALETTE.BLACK' : 'PALETTE.LIGHT_010')};
}
`;

interface props {
  isTarget: boolean;
}


const StyledWrapper = styled.div`
  padding-rignt:10px;
  padding-left:20px;
  display:flex;
`


const LatestSearchSortButton = (props:any) => {

  return (
      <StyledWrapper>
        <StyledButton isTarget={true}>인기순</StyledButton>
        <StyledButton isTarget={true}>최신순</StyledButton>
      </StyledWrapper>
  )
};

export default LatestSearchSortButton;
