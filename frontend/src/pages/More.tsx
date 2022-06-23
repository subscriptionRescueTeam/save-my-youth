import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { LayoutNavigation } from '../components';
import Description from '../components/Description';
import SearchCardList from '../components/SearchCardList';
import useSubscription from '../hooks/useSubscription';
import { ListType } from '../types';

const More = () => {
  const { type: typeParam } = useParams();
  const { loading: popularLoading, subscriptions: popularityList } = useSubscription('popular');
  const { loading: newLoading, subscriptions: latestList } = useSubscription('new');
  const type: ListType = typeParam as ListType;

  return (
    <LayoutNavigation
      headerTitle={type === 'popular' ? '인기 청약' : '최신 청약'}
      haederUnderline={true}
    >
      <Description type={type} subscriptionLength={latestList.length} />
      <StyledGap>
        {(popularLoading || newLoading) && <div>불러오는 중이에요 잠시만 기다려주세요.</div>}
        {!popularLoading && !newLoading && (
          <SearchCardList
            type={type}
            subData={type === 'popular' ? popularityList.slice(0, 6) : latestList}
          />
        )}
      </StyledGap>
    </LayoutNavigation>
  );
};

export default More;

const StyledGap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
`;
