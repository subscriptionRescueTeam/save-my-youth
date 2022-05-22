import { useEffect, useState } from 'react';
import styled from 'styled-components';
import CommonHeader from '../../components/CommonHeader';
import SearchCardList from '../../components/SearchCardList';
import useSubscription from '../../hooks/useSubscription';

const StyledAnnounce = styled.div`
  display: flex;
  margin-top: 1rem;
  margin-left: 1.2rem;
  font-weight: 400;
  font-size: 0.7em;
  letter-spacing: -0.5px;
`;

const Like = () => {
  const { subData } = useSubscription('서울');

  useEffect(() => {
    <SearchCardList subData={subData} />;
  }, []);

  return (
    <>
      <CommonHeader title="좋아요" />
      <StyledAnnounce>총 8 개의 공고가 있습니다.</StyledAnnounce>
      <SearchCardList subData={subData} />
    </>
  );
};

export default Like;
