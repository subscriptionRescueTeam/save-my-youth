import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { CommonHeader } from '../components';
import PALETTE from '../constants/palette';

const StyledDescription = styled.span`
  font-size: 0.875rem;
  color: ${PALETTE.PRI_DARK_020};
`;

const More = () => {
  const { type } = useParams();
  console.log(type);

  return (
    <>
      <CommonHeader title="인기 청약" underline={true} />
    </>
  );
};

export default More;
