import React, { useState, FormEvent } from 'react';
import styled from 'styled-components';
import { Subscription, SummarizedSubscription, SearchCardListProps } from '../../types';
import SearchCardItem from '../SearchCardItem';
import PALETTE from '../../constants/palette';

const MessageWrapper = styled.div`
  display: flex;
  justify-content: left;
  margin: 1rem 0;
  padding-left:1em;
  font-size:0.8em;
  color: ${PALETTE.DARK_020};
`;

const SearchCardList = ({ subData }: SearchCardListProps) => {
  return (
    <article>
      {subData &&
        subData.map((data) => {
          const summarizedSubscription: SummarizedSubscription = {
            id: data.id,
            houseName: data.houseName,
            houseLocation: data.houseLocation,
            applyStartDate: data.applyStartDate,
            applyEndDate: data.applyEndDate,
          };

          return (
            <>
              <SearchCardItem key={summarizedSubscription.id} subscription={summarizedSubscription} />
            </>
          );
        })}
    </article>
  );
};

export default SearchCardList;
