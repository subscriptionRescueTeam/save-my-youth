import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { COLOR } from '../../../constants';

// ref: https://velog.io/@dev-tinkerbell/display-none%EC%9D%B4-transition%EC%9D%B4-%EC%95%88%EB%A8%B9%ED%9E%88%EB%8A%94-%EC%9D%B4%EC%9C%A0
const StyledOptionList = styled.aside<{ isOpen: boolean }>`
  position: absolute;
  top: 0;
  right: 0;
  width: 80vw;
  height: 100%;
  transition: all 1s ease;
  z-index: 1;
  background-color: ${COLOR.WHITE};
  transform: ${(props) => (props.isOpen ? 'translateX(0)' : 'translateX(100%)')};
  visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};
`;

export type OptionListProps = {
  children: React.ReactNode;
  onSidebarOpen: (isOpen: boolean) => void;
  isOpen: boolean;
};

const OptionList = ({ children, onSidebarOpen, isOpen }: OptionListProps) => {
  const sidebarRef = useRef(null);

  // ref: https://codesandbox.io/s/outside-click-hook-uc8bo?file=/src/outsideClick.js
  const onClickOutside = (event: any) => {
    if (sidebarRef.current && !(sidebarRef.current as any).contains(event.target)) {
      // TODO: change any type
      return onSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', onClickOutside, true);
    return () => {
      document.removeEventListener('click', onClickOutside, true);
    };
  });

  return (
    <StyledOptionList ref={sidebarRef} isOpen={isOpen}>
      {children}
    </StyledOptionList>
  );
};

export default OptionList;
