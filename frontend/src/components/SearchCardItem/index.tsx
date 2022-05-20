import PALETTE from '../../constants/palette';
import styled from 'styled-components';;
import { SummarizedSubscription } from '../../types';

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
    border: 2px solid $#F8F8F8;
    border-radius:10px;
    display:flex;
    background-color: #FFFFFF;
    align: center;
    text-align:center;
    @media screen and (min-width: 500px) {
        flex-direction: column;
        align-items:flex-end;
    }
    `;
const StyledText = styled.span`
    align: center;
    text-align:center;
    padding-left:20px;
    padding-top:20px;
    flex-direction: column;
    align-items:flex-end;
    `;

export type SearchCardItemProps = {
    subscription: SummarizedSubscription,
}

const SearchCardItem = ({subscription}: SearchCardItemProps) => {
    return (
        <StyledBox>
            <StyledCard>
                <StyledText>{subscription.id}</StyledText>
                <StyledText>{subscription.houseName}</StyledText>
            </StyledCard>
        </StyledBox>
    );
};

export default SearchCardItem;
