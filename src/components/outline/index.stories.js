import {h} from 'preact';

import {Outline} from './';

export default {
  title: 'Outline'
};
const FIXTURE = {
  title: 'Breakdown',
  steps: [
    {text: 'Pathfinder', description: 'Internal project name for an internal web application that manage marketing budgets globally for Google.'},
    {text: 'Google Sheets', description: 'Before Pathfinder, Google somehow had managed their entire marketing budgets on a Google spreadsheets.'},
    {text: 'Unmanageable', description: 'In 2016,  Google was managing all of the marketing budgets over spreadsheets.'},
    {text: 'Teamwork', description: 'R/GA worked with various departments of the marketing and finance teams to design and develop a tool that would help Google get away from managing their marketing budgets with spreadsheets.'},
    {text: 'Result', description: 'An internal application used globally across Google to request, track, manage, and report, all marketing budgets.  2017 Marketing Pathfinder had processed over 2 billion dollars'},
  ]
};

export const Main = () => {
  return (
      <Outline {...FIXTURE} />
  )
};

