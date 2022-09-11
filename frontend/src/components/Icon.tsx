import { ReactSVG } from 'react-svg';
import styled from 'styled-components';

import { IconName } from '../types';

export type IconProps = {
  name: IconName;
  color?: string;
  width?: number;
  height?: number;
};

export const Icon = ({ color, width = 24, height = 24, name }: IconProps) => {
  return (
    <StyledIcon color={color}>
      <ReactSVG
        css={{ display: 'inline-block' }}
        src={`/src/assets/icons/${name}.svg`}
        beforeInjection={(svg) => {
          svg.setAttribute('style', `width: ${width}px; height: ${height}px;`);
        }}
        width={width}
        height={height}
      />
    </StyledIcon>
  );
};

export const StyledIcon = styled.span<{ color?: string }>`
  color: ${(props) => props.color};
  font-size: 0;
`;
