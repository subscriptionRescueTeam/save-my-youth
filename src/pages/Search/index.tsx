import React from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Header } from '../../components/Header'
import { Searchicon } from '../../asset/searchicon';


const StyledContainer = styled.div`
  margin: 30px 30px 20px 10px;
  width: 400px;
  height: 45px;
  border: 3px solid #1569CB;
  border-radius:10px;
  display:flex;
  background-color: #FFFFFF;
  align: center;
`;


const StyledSearch = styled.input`
  border: 0;
  padding-left: 10px;
  border-radius:10px;
  width: 100%;
  height: 100%;
  outline: none;
`;
const StyledSearchIcon = styled.div`
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
        align-items:flex-center;
        display: none;
    }
`;

const StyledCard = styled.div`
  margin: 30px 30px 20px 10px;
  width: 400px;
  height: 102px;
  border: 2px solid #1569CB;
  border-radius:10px;
  display:flex;
  background-color: #FFFFFF;
  align: center;
  text-align:center;
  @media screen and (min-width: 500px) {
    flex-direction: column;
    align-items:flex-end;
    display: none;
}
`;

const StyledText = styled.div`
align: center;
text-align:center;
padding-left:20px;
padding-top:20px;
flex-direction: column;
align-items:flex-end;
`

const Search = () => {
    const [keyword, setKeyword] = useState<string>("");
    const onChangeData = (e: React.FormEvent<HTMLInputElement>) => {
        setKeyword(e.currentTarget.value);
    };
    return (
        <div>
            <StyledBox>
                <StyledContainer>
                    <StyledSearch value={keyword} onChange={onChangeData} />
                    <StyledSearchIcon>
                        <Searchicon />
                    </StyledSearchIcon>
                </StyledContainer>
            </StyledBox>
            <StyledCard>
                <StyledText>
                    제 1차 장기전세주택 입주자모집공고
                </StyledText>
            </StyledCard>
            <StyledCard>
                <StyledText>
                    행복주택서류심사
                </StyledText>
            </StyledCard>
            <StyledCard>
                <StyledText>
                    역세권 청년주택 보금자리 마련
                </StyledText>
            </StyledCard>
        </div>
    );
}
export default Search;

