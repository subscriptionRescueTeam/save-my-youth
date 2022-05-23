import React, { useState, FormEvent } from 'react';
import styled from 'styled-components';
import { Input, CommonHeader } from '../../components';
import PALETTE from '../../constants/palette';
import useSubscription from '../../hooks/useSubscription';
import SearchCardList from '../../components/SearchCardList';
import PopularButtons from '../../components/PopularSearchButton';
import LatestButtons from '../../components/LatestSearchSortButton';


const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0.8em 0;
`;

const MessageWrapper = styled.div`
  display: flex;
  justify-content: left;
  margin: 0.8rem 0;
  padding-left:1em;
  font-size:0.8em;
  color: ${PALETTE.DARK_020};
`;

const Search = () => {
  const [keyword, setKeyword] = useState<string>();
  const { subData } = useSubscription(keyword);

  const onChangeData = (e: React.FormEvent<HTMLInputElement>) => {
    setKeyword(e.currentTarget.value);
  };

  const onKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      <div>
        <MessageWrapper>총 {subData.length}개의 공고가 있습니다</MessageWrapper>
        <SearchCardList subData={subData} />;
      </div>
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
      <PopularButtons /><LatestButtons />
      <SearchCardList subData={subData} />
    </>
  );
};
export default Search;
