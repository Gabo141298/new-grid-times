import React from 'react';
import styled from 'styled-components/macro';

import { MARKET_DATA, SPORTS_STORIES } from '../../data';

import { QUERIES } from '../../constants';

import MarketCard from '../MarketCard';
import SectionTitle from '../SectionTitle';
import MiniStory from '../MiniStory';

const SpecialtyStoryGrid = () => {
  return (
    <Wrapper>
      <MarketsSection>
        <SectionTitle
          cornerLink={{
            href: '/markets',
            content: 'Visit Markets data »',
          }}
        >
          Markets
        </SectionTitle>
        <MarketCards>
          {MARKET_DATA.map((data) => (
            <MarketCard key={data.tickerSymbol} {...data} />
          ))}
        </MarketCards>
      </MarketsSection>
      <SportsSection>
        <SectionTitle
          cornerLink={{
            href: '/sports',
            content: 'Visit Sports page »',
          }}
        >
          Sports
        </SectionTitle>
        <SportsStoriesWrapper>
          <SportsStories>
            {SPORTS_STORIES.map((data) => (
              <SportsMiniStory>
                <MiniStory key={data.id} {...data} />
              </SportsMiniStory>
            ))}
          </SportsStories>
        </SportsStoriesWrapper>
      </SportsSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: 48px;

  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: 1fr 1fr;
    gap: 1px;

    background-color: var(--color-gray-300);
  }
`;

const MarketsSection = styled.section`
  @media ${QUERIES.laptopAndUp} {
    background-color: var(--color-gray-100);
    padding-right: 16px;
  }
`;

const MarketCards = styled.div`
  display: grid;
  grid-template-columns:
    repeat(auto-fill, minmax(150px, 1fr));
  gap: 16px;
`;

const SportsSection = styled.section`
  display: grid;
  @media ${QUERIES.laptopAndUp} {
    background-color: var(--color-gray-100);
    padding-left: 16px;
  }
`;

const SportsStoriesWrapper = styled.div`
  overflow: auto;
  margin-left: 6px;
`;

const SportsStories = styled.div`
  display: grid;
  grid-template-columns:
    repeat(auto-fill, minmax(150px, 1fr));
  gap: 16px;

  @media ${QUERIES.tabletAndUp} {
    display: flex;
  }
`;

const SportsMiniStory = styled.div`
  @media ${QUERIES.tabletAndUp} {
    min-width: 220px;
  }
`;

export default SpecialtyStoryGrid;
