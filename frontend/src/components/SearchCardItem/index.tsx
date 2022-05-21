import PALETTE from '../../constants/palette';
import styled from 'styled-components';;
import { SummarizedSubscription } from '../../types';

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
    font-size:16px;
    font-weight:bold;
    padding-left:20px;
    padding-top:10px;
`

const StyledLocal = styled.div`
    padding-left:20px;
    padding-top:10px;
    font-size:14px;
    color:${PALETTE.PRI_DARK_010};
    align-items:left;
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
                {/* <StyledText>{subscription.applyStartDate}</StyledText>
                <StyledText>{subscription.applyEndDate}</StyledText>  */}
            </StyledCard>
        </StyledBox>
    );
};

export default SearchCardItem;
