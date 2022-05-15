import { Input, Title, MainCardList, LayoutNavigation } from '../../components';
import { 청약 } from '../../types';

const Home = () => {
  const 청약리스트: Array<청약> = [
    {
      id: 0,
      name: '레미안',
      location: '서울시 영등포구',
      like: false,
    },
    {
      id: 1,
      name: '자이',
      location: '서울시 구로구',
      like: false,
    },
    {
      id: 2,
      name: '나는브랜드다',
      location: '경기도 하남시',
      like: false,
    },
  ];

  return (
    <LayoutNavigation>
      <Title title="청약을 부탁해" subTitle="오늘의 올라온 청약 9건" />
      <Input placeholder="청약 검색하기"></Input>
      <MainCardList popularityList={청약리스트} likeList={청약리스트}></MainCardList>
    </LayoutNavigation>
  );
};

export default Home;
