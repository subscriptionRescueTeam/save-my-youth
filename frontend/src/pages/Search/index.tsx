import styled from 'styled-components';
import { Input, CommonHeader } from '../../components';
import React, { useState, FormEvent } from 'react';
import useSubscription from '../../hooks/useSubscription';

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0;
`;

const Search = () => {
   
  const [keyword, setKeyword] = useState<string>('서울');
  const {subData} = useSubscription(keyword);
  console.log(subData);
  const onChangeData = (e: React.FormEvent<HTMLInputElement>) => {
    setKeyword(e.currentTarget.value);
  };
  
  

const submitHandler: React.FormEventHandler<HTMLButtonElement>= e => {
  e.preventDefault();
  setKeyword('');
};

  return (
    <>
      <CommonHeader title="검색" />
      <InputWrapper>
        <Input placeholder="검색어를 입력하세요 (ex. 월세, 전세 등)" />
        <button onSubmit={ submitHandler }/>
      </InputWrapper>
    </>
  );
};
export default Search;
