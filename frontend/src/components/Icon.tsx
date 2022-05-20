import styled from 'styled-components';

export const StyledIcon = styled.span<{ color: string; size?: number }>`
  display: flex;
  width: ${(props) => (props.size ? props.size : 28)}px;
  height: ${(props) => (props.size ? props.size : 28)}px;
  color: ${(props) => (props.color ? props.color : '#00000')};
`;

export type IconProps = {
  children: React.ReactNode;
  size?: number;
  color?: string;
};

export const Icon = ({ children, size, color = '' }: IconProps) => {
  return (
    <StyledIcon color={color} size={size} role="img">
      {children}
    </StyledIcon>
  );
};
