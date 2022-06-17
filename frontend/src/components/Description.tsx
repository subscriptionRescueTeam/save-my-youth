import React from 'react';
import styled from 'styled-components';
import PALETTE from '../constants/palette';
import { ListType } from '../types';

export type DescriptionProps = {
  type: ListType;
  subscriptionLength?: number;
  topBottomPadding?: boolean;
};

const Description = ({ type, subscriptionLength, topBottomPadding = true }: DescriptionProps) => (
  <StyledDescriptionContainer topBottomPadding={topBottomPadding}>
    <StyledDescription type={type} underline={type === 'popular' ? false : true}>
      {type === 'popular'
        ? '최근 일주일 이내의 좋아요 수를 기준으로 합니다'
        : `전체(${subscriptionLength})`}
    </StyledDescription>
  </StyledDescriptionContainer>
);

export default Description;

const StyledDescriptionContainer = styled.div<{ topBottomPadding?: boolean }>`
  padding: ${(props) => (props.topBottomPadding ? '14px 0 16px 20px' : '0 0 8px 20px')};
`;

const StyledDescription = styled.span<{ type?: string; underline: boolean }>`
  font-size: 0.875rem;
  color: ${(props) => (props.type === 'popular' ? PALETTE.DARK_020 : PALETTE.DARK_040)};
  border: ${(props) => (props.underline ? '1px solid PALETTE.LIGHT_010' : 'none')};
`;
