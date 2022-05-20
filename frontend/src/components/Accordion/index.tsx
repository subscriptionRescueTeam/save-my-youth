import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Option } from '../../types';
import OptionItem from '../Sidebar/OptionItem';

export type AccodionProps = {
  options: Record<string, Array<Option>>;
};

const Accordion = ({ options }: AccodionProps) => {
  const [titleClicked, setTitleClicked] = useState(false);

  const toggleAccodion = () => {
    return setTitleClicked(!titleClicked);
  };
  return (
    <div id="accordion">
      <div id="고객센터" onClick={toggleAccodion}>
        {options.title.map((option) => {
          const dynamicDirection = titleClicked ? 'up' : 'down';

          return (
            <OptionItem
              key={option.name}
              fontSize={option.fontSize}
              fontWeight={option.fontWeight}
              underlineHeight={option.underlineHeight}
              direction={dynamicDirection}
              disabled={option.disabled}
              isGetReady={option.isGetReady}
            >
              {option.name}
            </OptionItem>
          );
        })}
      </div>

      {titleClicked && (
        <div id="옵션">
          {options.option.map((option) => (
            <Link key={`${option.name}-${option.link}`} to={option.link}>
              <OptionItem
                fontSize={option.fontSize}
                fontWeight={option.fontWeight}
                underlineHeight={option.underlineHeight}
                direction={option.direction}
                disabled={option.disabled}
                isGetReady={option.isGetReady}
              >
                {option.name}
              </OptionItem>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Accordion;
