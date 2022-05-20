import styled from 'styled-components';
import { Input, CommonHeader } from '../../components';
import React, { useState, FormEvent } from 'react';
import useSubscription from '../../hooks/useSubscription';
import SearchCardItem,{SearchCardItemProps} from '../../components/SearchCardItem';
import SearchCardList, {SearchCardListProps} from '../../components/SearchCardList';
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
      <SearchCardList subData= {subData}/>
    }
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
      <SearchCardList subData= {subData}/>
      {/* {keyword} view props={subData} */}
    </>
  );
};
export default Search;