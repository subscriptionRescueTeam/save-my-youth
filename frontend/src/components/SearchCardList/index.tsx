import { Subscription, SearchCardListProps } from '../../types';
import SearchCardItem from '../SearchCardItem';

const SearchCardList = ({ subData }: SearchCardListProps) => {
  return (
    <article>
      {subData &&
        subData.map((data) => {
          const Subscription: Subscription = {
            id: data.id,
            houseName: data.houseName,
            houseLocation: data.houseLocation,
            applyStartDate: data.applyStartDate,
            applyEndDate: data.applyEndDate,
          };

          return (
            <>
              <SearchCardItem
                key={Subscription.id}
                subscription={Subscription}
              />
            </>
          );
        })}
    </article>
  );
};

export default SearchCardList;
