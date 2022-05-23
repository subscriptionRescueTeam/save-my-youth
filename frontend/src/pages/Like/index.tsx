import styled from 'styled-components';
import CommonHeader from '../../components/CommonHeader';
import SearchCardList from '../../components/SearchCardList';
import useLike from '../../hooks/useLike';
import { Subscription } from '../../types';

const StyledAnnounce = styled.div`
  display: flex;
  margin-top: 1rem;
  margin-left: 1.2rem;
  font-weight: 400;
  font-size: 0.7em;
  letter-spacing: -0.5px;
`;

const Like = () => {
  const { likeList } = useLike();

  return (
    <>
      <CommonHeader title="좋아요" />
      <StyledAnnounce>총 {likeList?.length} 개의 공고가 있습니다.</StyledAnnounce>
      {
       likeList && 
       <SearchCardList subData={likeList} />
     }
    </>
  );
};

export default Like;