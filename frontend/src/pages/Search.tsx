import React, { useState } from 'react';
import styled from 'styled-components';
import { Input, CommonHeader } from '../components';
import PALETTE from '../constants/palette';
import useSearch from '../hooks/useSearch';
import useDebounce from '../hooks/useDebounce';
import SearchCardList from '../components/SearchCardList';

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0.8rem 0;
`;

const MessageWrapper = styled.div`
  display: flex;
  justify-content: left;
  margin: 1rem 0;
  padding-left: 1em;
  font-size: 0.8em;
  color: ${PALETTE.DARK_020};
`;

const Search = () => {
  const [keyword, setKeyword] = useState<string>('');
  const searchkeyword = useDebounce(keyword, 150);
  const { subData } = useSearch(searchkeyword);

  const onChangeData = (e: React.FormEvent<HTMLInputElement>) => {
    setKeyword(e.currentTarget.value);
  };

  const onKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      <div>
        <MessageWrapper>총 {subData.length}개의 공고가 있습니다</MessageWrapper>
        <SearchCardList subData={subData} />;
      </div>;
    }
  };

  return (
    <>
      <CommonHeader title="검색" />
      <InputWrapper>
        <Input
          placeholder="검색어를 입력하세요 (ex.지역)"
          onChange={onChangeData}
          onKeyPress={onKeyPress}
        />
      </InputWrapper>
      <MessageWrapper>총 {subData.length}개의 공고가 있습니다</MessageWrapper>
      <SearchCardList subData={subData} />
    </>
  );
};
export default Search;
