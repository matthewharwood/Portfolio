import {h} from 'preact';

import {Outline} from './';

export default {
  title: 'Outline'
};


export const WithDescription = () => {
  const FIXTURE = {
    title: 'Breakdown',
    hasDescriptions: true,
    steps: [
      {name: 'Pathfinder', description: 'Internal project name for an internal web application that manage marketing budgets globally for Google.'},
      {name: 'Google Sheets', description: 'Before Pathfinder, Google somehow had managed their entire marketing budgets on a Google spreadsheets.'},
      {name: 'Unmanageable', description: 'In 2016,  Google was managing all of the marketing budgets over spreadsheets.'},
      {name: 'Teamwork', description: 'R/GA worked with various departments of the marketing and finance teams to design and develop a tool that would help Google get away from managing their marketing budgets with spreadsheets.'},
      {name: 'Result', description: 'An internal application used globally across Google to request, track, manage, and report, all marketing budgets.  2017 Marketing Pathfinder had processed over 2 billion dollars'},
    ]
  };
  return (
      <Outline {...FIXTURE} />
  )
};

export const NoDescriptions = () => {
  const FIXTURE = {
    title: 'Breakdown',
    hasDescriptions: false,
    steps: [
      {name: 'Pathfinder', },
      {name: 'Google Sheets', },
      {name: 'Unmanageable', },
      {name: 'Teamwork', },
      {name: 'Result', },
    ]
  };
  return (
    <Outline {...FIXTURE} />
  )
};

