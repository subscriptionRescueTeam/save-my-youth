import { Subscription, SummarizedSubscription, SearchCardListProps } from '../../types';
import SearchCardItem from '../SearchCardItem';


const SearchCardList = ({ subData }: SearchCardListProps) => {
  return (
    <article>
      {subData &&
        subData.map((data) => {
          const summarizedSubscription: SummarizedSubscription = {
            id: data.id,
            houseName: data.houseName,
            houseLocation: data.houseLocation,
            applyStartDate: data.applyStartDate,
            applyEndDate: data.applyEndDate,
          };

          return (
            <div>
              {/* 여기어 필터링 단추 */}
              {/* 여기에 검색결과 리스트 */}
              <SearchCardItem key={summarizedSubscription.id} subscription={summarizedSubscription} />
            </div>
          );
        })}
    </article>
  );
};

export default SearchCardList;
