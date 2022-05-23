import React, { useState, FormEvent } from 'react';
import styled from 'styled-components';
import { Subscription, SummarizedSubscription, SearchCardListProps } from '../../types';
import SearchCardItem from '../SearchCardItem';
import PALETTE from '../../constants/palette';


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
