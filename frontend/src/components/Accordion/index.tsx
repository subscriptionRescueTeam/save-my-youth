import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AccordionType } from '../../types';
import OptionItem from '../Sidebar/OptionItem';

export type AccodionProps = {
  contents: AccordionType;
};

const Accordion = ({ contents: { head, tails } }: AccodionProps) => {
  const [titleClicked, setTitleClicked] = useState(false);

  const toggleAccodion = () => {
    return setTitleClicked(!titleClicked);
  };

  return (
    <div>
      <div onClick={toggleAccodion}>
        <OptionItem
          key={head.name}
          fontSize={head.fontSize}
          fontWeight={head.fontWeight}
          underlineHeight={head.isUseBoldUnderline && !titleClicked ? '8px' : head.underlineHeight}
          direction={titleClicked ? 'up' : 'down'}
          disabled={head.disabled}
        >
          {head.name}
        </OptionItem>
      </div>

      {titleClicked && (
        <div>
          {tails.map((tail, index) => (
            <Link key={`${tail.name}-${tail.link}`} to={tail.link}>
              <OptionItem
                fontSize={tail.fontSize}
                fontWeight={tail.fontWeight}
                underlineHeight={index == tails.length - 1 ? '8px' : tail.underlineHeight}
                direction={tail.direction}
                disabled={tail.disabled}
              >
                {tail.name}
              </OptionItem>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Accordion;
