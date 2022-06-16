import React from 'react';

export type User = {
  name: string; // nickname
  email: string;
  likeNum: number;
  likeList: SubscriptionFromBackend[];
};

export type SubscriptionFromBackend = {
  PBLANC_NO: number; //공고번호
  HOUSE_NM: string; //주택명
  HSSPLY_ADRES: string; //공급위치
  TOT_SUPLY_HSHLDCO: number; //공급규모
  RCRIT_PBLANC_DE: string; //모집공고일
  RCEPT_BGNDE: string; //청약접수시작일
  RCEPT_ENDDE: string; //청약접수종료일
  HMPG_ADRES: string; //홈페이지
  SPSPLY_RCEPT_BGNDE: string; //특별공급 접수시작일
  SPSPLY_RCEPT_ENDDE: string; //특별공급 접수 종료일
  GNRL_RNK1_CRSPAREA_RCEPT_PD: string; //1순위 접수일 해당지역
  GNRL_RNK1_ETC_GG_RCPTDE_PD: string; //1순위 접수일 경기지역
  GNRL_RNK1_ETC_AREA_RCPTDE_PD: string; //1순위 접수일 기타지역
  GNRL_RNK2_CRSPAREA_RCEPT_PD: string; //2순위 접수일 해당지역
  GNRL_RNK2_ETC_GG_RCPTDE_PD: string; //2순위 접수일 경기지역
  GNRL_RNK2_ETC_AREA_RCPTDE_PD: string; //2순위 접수일 기타지역
  PRZWNER_PRESNATN_DE: string; //당첨자발표일
  CNTRCT_CNCLS_BGNDE: string; //계약시작일
  CNTRCT_CNCLS_ENDDE: string; //계약종료일
};

export type SubscriptionUsedFront = {
  readonly id: number;
  readonly houseName: string;
  readonly recNotice: string;
  readonly houseLocation: string;
  readonly applyScale: string;
  readonly applyStartDate: string;
  readonly applyEndDate: string;
  readonly applyHomepage: string;
  readonly SPSPLY_RCEPT_BGNDE?: string;
  readonly SPSPLY_RCEPT_ENDDE?: string;
  readonly GNRL_RNK1_CRSPAREA_RCEPT_PD?: string;
  readonly GNRL_RNK1_ETC_GG_RCPTDE_PD?: string;
  readonly GNRL_RNK1_ETC_AREA_RCPTDE_PD?: string;
  readonly GNRL_RNK2_CRSPAREA_RCEPT_PD?: string;
  readonly GNRL_RNK2_ETC_GG_RCPTDE_PD?: string;
  readonly GNRL_RNK2_ETC_AREA_RCPTDE_PD?: string;
  readonly PRZWNER_PRESNATN_DE?: string;
  readonly CNTRCT_CNCLS_BGNDE?: string
  readonly CNTRCT_CNCLS_ENDDE?: string
  likeNum: number;
  imgLink?: string;
};

export type DetailState = {
  readonly id: number;
}

export type Writing = '최신' | '인기';
export type Children = React.ReactNode;

export type slidDirection = 'left' | 'right';

export type ArrowDirection = 'right' | 'down' | 'up';

export type OptionDecoration = {
  readonly fontSize?: string;
  readonly fontFamily?: string;
  readonly fontColor?: string;
  readonly underlineHeight?: string;
  readonly isUseBoldUnderline?: boolean;
  readonly direction?: ArrowDirection | null;
  readonly disabled?: boolean;
};

export type Option = {
  readonly userName?: string;
  readonly optionName: string;
  readonly link: string;
  readonly isShownAlways?: boolean;
  readonly onClick?: React.MouseEventHandler<HTMLButtonElement>;
} & OptionDecoration;

export type HelpType = { readonly name: string; readonly option: string };
export type HelpContents = Record<number, JSX.Element>;

export type AccordionType = { readonly head: Option; tails: Option[] };

// serchCardlist
export type SearchCardListProps = { subData: SubscriptionUsedFront[] };
export type SearchCardItemProps = { subscription: SubscriptionUsedFront };
export type SubscriptionList = { subData: SearchCardListProps };

export type FAQCategory = '청약' | '홈페이지';
export type FAQType = {
  question: string;
  answer: string;
  faq_category: {
    category_name: FAQCategory;
  };
};

export const CARD_WIDTH = 260;
export const CARD_HEIGHT = 194;
export const CARD_MARGIN = 6;
export const CARD_BORDER_RADIUS = 8;

export type IDetailOptions = {
  name: string;
  option: string;
};
