import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ResultCard from '../components/ui/ResultCard';
import { Results } from 'shared/poll-types';

export default {
  title: 'ResultCard',
  component: ResultCard,
} as ComponentMeta<typeof ResultCard>;

const Template: ComponentStory<typeof ResultCard> = (args) => (
  <div className="max-w-sm m-auto h-screen">
    <ResultCard {...args} />
  </div>
);

const results: Results = [
  {
    nominationID: '1',
    score: 3,
    nominationText: 'Taco Bell',
  },
  {
    nominationID: '2',
    score: 2,
    nominationText: 'Del Taco',
  },
  {
    nominationID: '3',
    score: 1,
    nominationText: "Papa's Tacos",
  },
  {
    nominationID: '4',
    score: 1,
    nominationText: 'Los Taqueros Locos con Nomre Largo',
  },
];

export const ResultCardShort = Template.bind({});
ResultCardShort.args = {
  results,
};

const resultLong = [
  {
    nominationID: '1',
    score: 10,
    nominationText: 'Taco Bell',
  },
  {
    nominationID: '2',
    score: 8,
    nominationText: 'Del Taco',
  },
  {
    nominationID: '3',
    score: 5,
    nominationText: "Papa's Tacos",
  },
  {
    nominationID: '4',
    score: 4,
    nominationText: 'Los Taqueros Locos con Nomre Largo',
  },
  {
    nominationID: '5',
    score: 4,
    nominationText: 'Chicky-Chicken-Filet',
  },
  {
    nominationID: '6',
    score: 3,
    nominationText: 'Mad Clown Burger',
  },
  {
    nominationID: '7',
    score: 3,
    nominationText: 'Thai Basil #0005',
  },
  {
    nominationID: '8',
    score: 2,
    nominationText: 'Sichuan Spice',
  },
  {
    nominationID: '9',
    score: 0,
    nominationText: 'Not Good Curry',
  },
  {
    nominationID: '10',
    score: 0,
    nominationText: 'Not Good Soul Food',
  },
  {
    nominationID: '11',
    score: 0,
    nominationText: 'Not Good Sushi',
  },
  {
    nominationID: '12',
    score: 0,
    nominationText: 'Not Good Falafel',
  },
  {
    nominationID: '13',
    score: 0,
    nominationText: 'Not Good Steakhouse',
  },
  {
    nominationID: '14',
    score: 0,
    nominationText: 'Not Good Burgers',
  },
];

export const ResultCardLong = Template.bind({});
ResultCardLong.args = {
  results: resultLong,
};
