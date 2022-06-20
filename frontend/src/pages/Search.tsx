import React, { useState } from 'react';
import styled from 'styled-components';

import { Input, LayoutNavigation } from '../components';
import SearchCardList from '../components/SearchCardList';
import PALETTE from '../constants/palette';
import useDebounce from '../hooks/useDebounce';
import useSubscription from '../hooks/useSubscription';
import LatestSearchSortButton from '../components/SearchSortButton';

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0.8rem 0;
`;

const MessageWrapper = styled.div`
  display: flex;
  justify-content: left;
  margin: 1rem 0;
  padding-left: 2em;
  font-size: 0.8em;
  color: ${PALETTE.DARK_020};
`;

const Search = () => {
  const [keyword, setKeyword] = useState<string>('');
  const searchkeyword = useDebounce(keyword, 150);
  const { subscriptions: subData } = useSubscription('region', searchkeyword);

  const onChangeData = (e: React.FormEvent<HTMLInputElement>) => {
    setKeyword(e.currentTarget.value);
  };

  const onKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      <div>
        <MessageWrapper>총 {subData.length}개의 공고가 있습니다</MessageWrapper>
        <LatestSearchSortButton/>
        <SearchCardList type="popular" subData={subData} />;
      </div>;
      if (keyword.length === 0) {
        alert('검색어를 입력해주세요');
      }
    }
  };

  return (
    <LayoutNavigation headerTitle="검색">
      <InputWrapper>
        <Input placeholder="지역명을 입력하세요" onChange={onChangeData} onKeyPress={onKeyPress} />
      </InputWrapper>
      <MessageWrapper>총 {subData.length}개의 공고가 있습니다</MessageWrapper>
      <LatestSearchSortButton/>
      <SearchCardList type="popular" subData={subData} />
    </LayoutNavigation>
  );
};
export default Search;
