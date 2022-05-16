import React from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { material, octicons } from 'styled-icons';
import { SearchOutline } from '@styled-icons/evaicons-outline/SearchOutline';

export const StyledContainer = styled.div`
  margin: 30px 30px 20px 10px;
  width: 400px;
  height: 45px;
  border: 0;
  display: flex;
  background-color: #eaeaea;
  align: center;
`;

const StyledSearch = styled.input`
  border: 0;
  padding-left: 10px;
  background-color: #eaeaea;
  width: 100%;
  height: 100%;
  outline: none;
`;

const StyledSearchIcon = styled(SearchOutline)`
  margin: 10px 30px 10px 20px;
  width: 30px;
  height: 30px;
  font-size: 40px;
`;

const Search = () => {
  const [keyword, setKeyword] = useState<string>('');
  const onChangeData = (e: React.FormEvent<HTMLInputElement>) => {
    setKeyword(e.currentTarget.value);
  };
  return (
    <StyledContainer>
      <StyledSearch value={keyword} onChange={onChangeData} />
      <StyledSearchIcon />
    </StyledContainer>
  );
};

export default Search;
