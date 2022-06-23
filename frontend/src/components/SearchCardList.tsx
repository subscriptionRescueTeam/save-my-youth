import styled from 'styled-components';

import { ListType, SubscriptionUsedFront } from '../types';
import Indexing from './Indexing';
import SearchCardItem from './SearchCardItem';

export type SearchCardListProps = { type: ListType; subData: SubscriptionUsedFront[] };

const SearchCardList = ({ type, subData }: SearchCardListProps) => {
  return (
    <StyledSection type={type}>
      {subData &&
        subData.map((data, index) => {
          return (
            <Indexing key={data.id} activate={type === 'popular' ? true : false} index={index + 1}>
              <SearchCardItem subscription={data} />
            </Indexing>
          );
        })}
    </StyledSection>
  );
};

export default SearchCardList;

const StyledSection = styled.section<{ type: ListType }>`
  display: flex;
  flex-direction: column;
  padding: ${(props) => (props.type === 'popular' ? '0 12px 0 24px' : '0 12px')};
  gap: 12px;
  padding-bottom: 179px;
`;
