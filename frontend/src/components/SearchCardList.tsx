import { SummarizedSubscription, SearchCardListProps } from '../types';
import SearchCardItem from './SearchCardItem';

const SearchCardList = ({ subData }: SearchCardListProps) => {
  return (
    <article>
      {subData &&
        subData.map((data) => {
          const summarizedSubscription: SummarizedSubscription = {
            id: data.id,
            houseName: data.houseName,
            houseLocation: data.houseLocation,
            applyStartDate: data.applyStartDate || '',
            applyEndDate: data.applyEndDate || '2022-05-23',
          };

          return (
            <SearchCardItem key={summarizedSubscription.id} subscription={summarizedSubscription} />
          );
        })}
    </article>
  );
};

export default SearchCardList;
