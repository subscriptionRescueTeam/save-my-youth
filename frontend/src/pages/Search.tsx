import styled from 'styled-components';
import { Input, CommonHeader } from '../components';
import { useState, FormEvent } from 'react';
import useSubscription from '../hooks/useSubscription';

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0;
`;

const Search = () => {
  const [keyword, setKeyword] = useState<string>();
  const { subData } = useSubscription(keyword);

  const onChangeData = (e: FormEvent<HTMLInputElement>) => {
    setKeyword(e.currentTarget.value);
  };

  const onKeyPress = (e: any) => {
    if (e.key === 'Enter') console.log(subData);
  };

  return (
    <>
      <CommonHeader title="검색" />
      <InputWrapper>
        <Input
          placeholder="검색어를 입력하세요 (ex. 월세, 전세 등)"
          onChange={onChangeData}
          onKeyPress={onKeyPress}
        />
      </InputWrapper>
      {keyword}
    </>
  );
};
export default Search;
