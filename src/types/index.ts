export type User = {
    name: string; // nickname
    email: string;
    likeNum: number;
    likeList: Array<청약>;
}

export type 청약 = {
    id: number;
    name: string;
    like: boolean;
    location: string; // API 백엔드따라서 우리가 바뀐다!
}

export type Writing = "최신" | "인기";

export type Search = {
    keyword: string
    //  searchData :string //리스트 안에 들어있는 결과값 -> 청약 하나 -> 청약
    searchList: Array<청약>; //리스트 결과값
    filter: Writing; //디폴트로 최신을 보여주고 필터로 인기순을 누르면 보여줌
}