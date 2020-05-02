import Highway from '@dogstudio/highway';
import {Fade} from './fade';
import {listen} from 'quicklink';

const state = {
  router: null
}

const InitRouter = {
  createRouter: () => {
    state.router = new Highway.Core({
      transitions: {
        default: Fade
      }
    });
  },
  createQuicklinks: () => {
    window.addEventListener('load', () => {
      listen();
    }, { once:true });
  },
  getRouter: () => {
    return state.router
  }
}

Object.freeze(InitRouter);
export {InitRouter}