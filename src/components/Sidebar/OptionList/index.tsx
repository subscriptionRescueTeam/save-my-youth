import { useEffect, useRef } from 'react';
import styled from 'styled-components';

const StyledOptionList = styled.aside<{ isOpen: boolean }>`
  position: absolute;
  top: 0;
  right: 0;
  width: 80vw;
  height: 100%;
  transition: all 1s ease;
  transform: ${(props) => (props.isOpen ? 'translateX(0)' : 'translateX(100%)')};
`;

export type OptionListProps = {
  children: React.ReactNode;
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
      {children}
    </StyledOptionList>
  );
};

export default OptionList;
