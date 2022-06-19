import styled from 'styled-components';

import { LayoutNavigation } from '../components';
import SearchCardList from '../components/SearchCardList';
import useLike from '../hooks/useLike';

const Like = () => {
  const { likeList } = useLike();

  return (
    <LayoutNavigation headerTitle="좋아요">
      <StyledAnnounce>총 {likeList?.length} 개의 공고가 있습니다.</StyledAnnounce>
      {likeList && <SearchCardList type="popular" subData={likeList} />}
    </LayoutNavigation>
  );
};

export default Like;

const StyledAnnounce = styled.div`
  display: flex;
  margin-top: 1rem;
  margin-left: 1.2rem;
  font-weight: 400;
  font-size: 0.7em;
  letter-spacing: -0.5px;
`;
