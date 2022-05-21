import styled from 'styled-components';
import { Input, CommonHeader } from '../../components';
import React, { useState, FormEvent } from 'react';
import useSubscription from '../../hooks/useSubscription';
import SearchCardItem from '../../components/SearchCardItem';
import SearchCardList from '../../components/SearchCardList';
import { Subscription, SummarizedSubscription } from '../../types';


const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0;
`;

const Search = () => {
  const [keyword, setKeyword] = useState<string>();
  const { subData } = useSubscription(keyword);

  const onChangeData = (e: React.FormEvent<HTMLInputElement>) => {
    setKeyword(e.currentTarget.value);
  };

  const onKeyPress = (e: any) => {
    // if (e.key === 'Enter') console.log(subData);
    if (e.key === 'Enter') {
      console.log(subData);
      <SearchCardList subData= {subData}/>
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
      <SearchCardList subData= {subData}/>
    </>
  );
};
export default Search;