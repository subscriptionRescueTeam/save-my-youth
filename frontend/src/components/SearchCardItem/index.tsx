import React from 'react';
import PALETTE from '../../constants/palette';
import styled from 'styled-components';;
import { SummarizedSubscription } from '../../types';
import { ReactComponent as BlueHeart } from '../../assets/icons/blueHeart.svg';
import { useNavigate } from 'react-router-dom';

const StyledBox = styled.div`
    display: flex;
    flex-container:space-between;
    align-items:center;
    flex-direction: column;
    width:100%
`;

const StyledCard = styled.div`
    margin: 1em 1em 0.333em 0.333em;
    width: 90%;
    height: 30%;
    border: 0.1em solid ${PALETTE.PRI_LIGHT_010};
    border-radius:1em;
    display: flex;
    flex-direction:column;
    background-color: #FFFFFF;
    `;

const StyledText = styled.div`
    text-align:left;
    padding-left:1em;
    padding-top:1em;
    flex-direction: column;
    align-items:flex-end;
    `;

const StyledTitle = styled.div`
    font-size:0.8em;
    font-weight:bold;
    padding-left:1.5em;
    padding-top:1em;
`

const StyledLocal = styled.div`
    padding-left:1.5em;
    padding-top:0.5em;
    font-size:0.7em;
    color:${PALETTE.PRI_DARK_010};
    align-items:left;
`

const StyledDate = styled.div`
    padding-left:1.5em;
    padding-top:0.5em;
    font-size:0.7em;
    color:${PALETTE.DARK_020};
    align-items:left;

`
const StyledLike = styled.div`
  font-size: 0.7em;
  color: ${PALETTE.DARK_020};
  align-items:right;
  padding-right:0.5em;
  padding-bottom:0.5em;
  margin: auto 0 0 auto;
`

export type SearchCardItemProps = {
    subscription: SummarizedSubscription,
}

const SearchCardItem = ({ subscription }: SearchCardItemProps) => {
    const navigate = useNavigate();
    return (
        <StyledBox>
            <StyledCard key={subscription.id} onClick={() => navigate('/detail')}>
                <StyledTitle>{subscription.houseName}</StyledTitle>
                <StyledLocal>{subscription.houseLocation}</StyledLocal>
                <StyledDate>{subscription.applyStartDate}~{subscription.applyEndDate}</StyledDate>
                <StyledLike>
                    <BlueHeart />
                    126
                </StyledLike>
            </StyledCard>
        </StyledBox>
    );
};

export default SearchCardItem;
