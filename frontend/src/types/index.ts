export type User = {
  name: string; // nickname
  email: string;
  likeNum: number;
  likeList: Array<Subscription>;
};

export type Subscription = {
  id: number;
  houseName: string;
  houseLocation: string;
  applyScale: number;
  recNotice: string;
  applyStartDate: string;
  applyEndDate: string;
  applyHomepage: string;
};

export type Writing = '최신' | '인기';
export type Children = React.ReactNode;

export const CARD_WIDTH = 69.06;
export const CARD_HEIGHT = CARD_WIDTH * 0.7451;

export type slidDirection = 'left' | 'right';
