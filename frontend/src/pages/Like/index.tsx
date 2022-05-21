import { useState } from 'react';
import styled from 'styled-components';
import CommonHeader from '../../components/CommonHeader';
// import SearchCardItem from '../../components/SearchCardItem';
import SearchCardList from '../../components/SearchCardList';
import useSubscription from '../../hooks/useSubscription';

const StyledAnnounce = styled.div``;

const Like = () => {
  const [keyword, setKeyword] = useState<string>();
  const { subData } = useSubscription(keyword);
  return (
    <>
      <CommonHeader title="좋아요" />
      <StyledAnnounce>총 8 개의 공고가 있습니다.</StyledAnnounce>
      <SearchCardList subData={subData} />
    </>
  );
};

export default Like;
