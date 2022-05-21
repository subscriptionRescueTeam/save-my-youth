import React, { useState } from 'react';
import styled from 'styled-components';
import PALETTE from '../../constants/palette';
import { Subscription, SummarizedSubscription } from '../../types';
import { Children } from '../../types';

const StyledButton = styled.button`
  padding:0.375rem 0.75rem;
  border-radius:0.25rem;
  font-size:1rem;
  line-height:1.5;
  font-color:${PALETTE.BLACK};
  background-color:${PALETTE.LIGHT_010};
  }
`;


export const PopularButtons = () => {

    return (
        <StyledButton>
            최신순
        </StyledButton>
    );
};