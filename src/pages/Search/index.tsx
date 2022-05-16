import React from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import {material, octicons} from 'styled-icons'
import {SearchOutline} from '@styled-icons/evaicons-outline/SearchOutline'
import axios from'axios';


<<<<<<< HEAD
const StyledContainer = styled.div`
=======
export const StyledContainer = styled.div`
>>>>>>> 1672155464a98f3e564221f04c3830d22b342b06
  margin: 30px 30px 20px 10px;
  width: 400px;
  height: 45px;
  border: 3px solid #1569CB;
  border-radius:10px;
  display:flex;
  background-color: #FFFFFF;
  align: center;
`;

// background-color: #eaeaea;
const StyledSearch = styled.input`
  border: 0;
  padding-left: 10px;
  border-radius:10px;
  width: 100%;
  height: 100%;
  outline: none;
`;

const StyledSearchIcon = styled(SearchOutline)`
margin: 10px 10px 10px 10px;
padding-bottom:10px;
display:flex;
width:30px;
height:30px;
font-size: 40px;
`;

const StyledBox = styled.div`
    display: flex;
    align-items:center;
    @media screen and (min-width: 500px) {
        flex-direction: column;
        align-items:flex-end;
        display: none;
    }
`;

const Search = () => {
	const [keyword, setKeyword] = useState<string>("");
  const onChangeData = (e:React.FormEvent<HTMLInputElement>) => {
    setKeyword(e.currentTarget.value);
  };
  return (
    <StyledBox>
    <StyledContainer>
     <StyledSearch value={keyword} onChange={onChangeData} />
     <StyledSearchIcon onClick={() => console.log("")}></StyledSearchIcon>
    </StyledContainer>
    </StyledBox>
     );
}
<<<<<<< HEAD
export default Search;
=======
export default Search;
>>>>>>> 1672155464a98f3e564221f04c3830d22b342b06
