import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Close } from '../../../asset';
import { COLOR } from '../../../constants';

// ref: https://velog.io/@dev-tinkerbell/display-none%EC%9D%B4-transition%EC%9D%B4-%EC%95%88%EB%A8%B9%ED%9E%88%EB%8A%94-%EC%9D%B4%EC%9C%A0
const StyledOptionList = styled.aside<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  width: 80%;
  height: 100%;
  transition: all 1s ease;
  z-index: 1;
  background-color: ${COLOR.WHITE};
  transform: ${(props) => (props.isOpen ? 'translateX(0)' : 'translateX(100%)')};
  visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};
`;

export const StyledSidebarHeader = styled.div`
  font-size: 1.25rem;
  color: ${COLOR.PRI_DARK_010};
  font-weight: bold;
  padding: 1.125rem 1.25rem 0.75rem 1.25rem;
`;

export const StyledCloseContainer = styled.button`
  position: absolute;
  top: 2%;
  right: 16px;
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
      <StyledSidebarHeader>
        <StyledCloseContainer onClick={() => onSidebarOpen(false)}>
          <Close />
        </StyledCloseContainer>
        청년을 구해줘!
      </StyledSidebarHeader>
      {children}
    </StyledOptionList>
  );
};

export default OptionList;
