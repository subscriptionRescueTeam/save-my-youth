import React from 'react';
export type User = {
  name: string; // nickname
  email: string;
  likeNum: number;
  likeList: Subscription[];
};

export type Subscription = {
  readonly id: number;
  readonly houseName: string;
  readonly houseLocation: string;
  readonly applyStartDate: string;
  readonly applyEndDate: string;
};

export type SummarizedSubscription = {
  id: number;
  houseName: string;
  houseLocation: string;
  applyStartDate: string;
  applyEndDate: string;
};
export type SubscriptionUsedMainPage = SubscriptionUsedMainPageByAPI & SubscriptionUsedMainPageByDB;

export type SubscriptionUsedMainPageByAPI = {
  readonly id: number;
  readonly houseName: string;
  readonly recNotice: string;
};

export type SubscriptionUsedMainPageByDB = {
  readonly likeNum: number;
  imgLink: string;
};

export type Writing = '최신' | '인기';
export type Children = React.ReactNode;

export type slidDirection = 'left' | 'right';

export type ArrowDirection = 'right' | 'down' | 'up';

export type OptionDecoration = {
  readonly fontSize?: string;
  readonly fontWeight?: string;
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
export type SearchCardListProps = { subData: Subscription[] };
export type SubscriptionList = { subData: SearchCardListProps };
export type SearchCardItemProps = { subscription: SummarizedSubscription };

export type FAQCategory = "청약" | "홈페이지";
export type FAQType = {
  "question": string;
  "answer": string;
  "faq_category": {
    "category_name": FAQCategory;
  }
}

export const CARD_WIDTH = 260;
export const CARD_HEIGHT = 194;
export const CARD_MARGIN = 6;
export const CARD_BORDER_RADIUS = 8;