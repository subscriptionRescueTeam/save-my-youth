import styled from 'styled-components';
import { Input, CommonHeader } from '../../components';

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0;
`;

const Search = () => {
  // const [keyword, setKeyword] = useState<string>('');
  // const onChangeData = (e: React.FormEvent<HTMLInputElement>) => {
  //   setKeyword(e.currentTarget.value);
  // };
  return (
    <>
      <CommonHeader title="검색" />
      <InputWrapper>
        <Input placeholder="검색어를 입력하세요 (ex. 월세, 전세 등)" />
      </InputWrapper>
    </>
  );
};
export default Search;
