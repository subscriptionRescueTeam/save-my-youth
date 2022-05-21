import PALETTE from '../../constants/palette';
import styled from 'styled-components';;
import { SummarizedSubscription } from '../../types';
import { ReactComponent as BlueHeart } from '../../assets/icons/blueHeart.svg';

const StyledBox = styled.div`
    display: flex;
    flex-container:space-between;
    align-items:center;
    @media screen and (min-width: 500px) {
        flex-direction: column;
        display: none;
    }
`;

const StyledCard = styled.div`
    margin: 30px 30px 10px 10px;
    width: 90%;
    height: 102px;
    border: 2px solid ${PALETTE.PRI_LIGHT_010};
    border-radius:10px;
    display: flex;
    flex-direction:column;
    background-color: #FFFFFF;
    `;

    // @media screen and (min-width: 500px) {
    //     flex-direction: column;
    //     flex-container:space-between;
    // }    
const StyledText = styled.div`
    text-align:left;
    padding-left:10px;
    padding-top:10px;
    flex-direction: column;
    align-items:flex-end;
    `;

const StyledTitle = styled.div`
    font-size:14px;
    font-weight:bold;
    padding-left:20px;
    padding-top:10px;
`

const StyledLocal = styled.div`
    padding-left:20px;
    padding-top:5px;
    font-size:12px;
    color:${PALETTE.PRI_DARK_010};
    align-items:left;
`

const StyledDate = styled.div`
    padding-left:20px;
    padding-top:5px;
    font-size:12px;
    color:${PALETTE.DARK_020};
    align-items:left;

`
const StyledLike = styled.div`
  font-size: 12px;
  color: ${PALETTE.DARK_020};
  align-items:right;
  padding-right:10px;
  padding-bottom:10px;
  margin: auto 0 0 auto;
`

export type SearchCardItemProps = {
    subscription: SummarizedSubscription,
}

const SearchCardItem = ({subscription}: SearchCardItemProps) => {
    return (
        <StyledBox>
            <StyledCard>
            <StyledTitle>{subscription.houseName}</StyledTitle>
                <StyledLocal>{subscription.houseLocation}</StyledLocal>
                <StyledDate>{subscription.applyStartDate}~{subscription.applyEndDate}</StyledDate>
                <StyledLike>
                    <BlueHeart/>
                    126
                </StyledLike>
            </StyledCard>
        </StyledBox>
    );
};

export default SearchCardItem;
