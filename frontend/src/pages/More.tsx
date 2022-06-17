import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { CommonHeader } from '../components';
import SearchCardList from '../components/SearchCardList';
import PALETTE from '../constants/palette';
import useSubscription from '../hooks/useSubscription';
import { ListType } from '../types';

const More = () => {
  const { type: typeParam } = useParams();
  const { loading: popularLoading, subscriptions: popularityList } = useSubscription('popular');
  const { loading: newLoading, subscriptions: latestList } = useSubscription('new');
  const type: ListType = typeParam as ListType;

  return (
    <>
      <CommonHeader title={type === 'popular' ? '인기 청약' : '최신 청약'} underline={true} />
      <StyledGap>
        <StyledDescriptionContainer>
          <StyledDescription type={type} underline={type === 'popular' ? false : true}>
            {type === 'popular'
              ? '최근 일주일 이내의 좋아요 수를 기준으로 합니다'
              : `전체(${latestList.length})`}
          </StyledDescription>
        </StyledDescriptionContainer>
        {(popularLoading || newLoading) && <div>불러오는 중이에요 잠시만 기다려주세요.</div>}
        {!popularLoading && !newLoading && (
          <SearchCardList
            type={type}
            subData={type === 'popular' ? popularityList.slice(0, 6) : latestList}
          />
        )}
      </StyledGap>
    </>
  );
};

export default More;

const StyledDescriptionContainer = styled.div`
  padding: 14px 0 16px 20px;
`;

const StyledDescription = styled.span<{ type?: string; underline: boolean }>`
  font-size: 0.875rem;
  color: ${(props) => (props.type === 'popular' ? PALETTE.DARK_020 : PALETTE.DARK_040)};
  border: ${(props) => (props.underline ? '1px solid PALETTE.LIGHT_010' : 'none')};
`;

const StyledGap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
`;
