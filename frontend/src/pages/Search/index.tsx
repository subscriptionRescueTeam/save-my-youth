import styled from 'styled-components';
import { Input, CommonHeader } from '../../components';
import React, { useState, FormEvent } from 'react';
import useSubscription from '../../hooks/useSubscription';
import SearchCardList from '../../components/SearchCardList';

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

  const onKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      <SearchCardList subData={subData} />;
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
      <SearchCardList subData={subData} />
    </>
  );
};
export default Search;
