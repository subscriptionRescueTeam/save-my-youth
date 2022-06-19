import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { AccordionType } from '../types';
import OptionItem from './Sidebar/OptionItem';

export type AccodionProps = {
  contents: AccordionType;
};

export const StyledAccordion = styled.div`
  width: 100%;
`;

const StyledFlex = styled.div`
  display: flex;
`;

const Accordion = ({ contents: { head, tails } }: AccodionProps) => {
  const [titleClicked, setTitleClicked] = useState(false);

  const toggleAccodion = () => {
    return setTitleClicked(!titleClicked);
  };

  return (
    <StyledAccordion>
      <StyledFlex onClick={toggleAccodion}>
        <OptionItem
          key={head.optionName}
          fontSize={head.fontSize}
          fontFamily={head.fontFamily}
          underlineHeight={head.isUseBoldUnderline && !titleClicked ? '8px' : head.underlineHeight}
          direction={titleClicked ? 'up' : 'down'}
          disabled={head.disabled}
          isShownAlways={head.isShownAlways}
        >
          {head.optionName}
        </OptionItem>
      </StyledFlex>

      {titleClicked && (
        <div>
          {tails.map((tail, index) => (
            <Link key={`${tail.optionName}-${tail.link}`} to={tail.link}>
              <OptionItem
                fontSize={tail.fontSize}
                fontFamily={tail.fontFamily}
                underlineHeight={index == tails.length - 1 ? '8px' : tail.underlineHeight}
                direction={tail.direction}
                disabled={tail.disabled}
                isShownAlways={tail.isShownAlways}
              >
                {tail.optionName}
              </OptionItem>
            </Link>
          ))}
        </div>
      )}
    </StyledAccordion>
  );
};

export default Accordion;
