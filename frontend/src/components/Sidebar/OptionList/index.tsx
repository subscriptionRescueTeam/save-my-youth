import styled from 'styled-components';
import { useEffect, useRef } from 'react';
import { ReactComponent as HeaderTitle } from '../../../assets/icons/headerTitle.svg';
import { ReactComponent as Close } from '../../../assets/icons/close.svg';
import PALETTE from '../../../constants/palette';
import { Children } from '../../../types';

const StyledOptionList = styled.aside<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  width: 80%;
  height: 100%;
  transition: all 1s ease;
  z-index: 1;
  background-color: ${PALETTE.WHITE};
  transform: ${(props) => (props.isOpen ? 'translateX(0)' : 'translateX(100%)')};
  visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};
`;

export const StyledSidebarHeader = styled.div`
  font-size: 1.25rem;
  color: ${PALETTE.PRI_DARK_010};
  font-weight: bold;
  padding: 1.125rem 1.25rem 0.75rem 1.25rem;
`;

export const StyledCloseContainer = styled.button`
  position: absolute;
  top: 2%;
  right: 16px;
`;

export type OptionListProps = {
  children: Children;
  onSidebarOpen: (isOpen: boolean) => void;
  isOpen: boolean;
};

const OptionList = ({ children, onSidebarOpen, isOpen }: OptionListProps) => {
  const sidebarRef = useRef(null);

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
        <HeaderTitle />
      </StyledSidebarHeader>
      {children}
    </StyledOptionList>
  );
};

export default OptionList;
