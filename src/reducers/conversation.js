import {
  SET_ACTIVE_CONTEXT,
  CONTINUE_CONVERSATION,
  STOP_CONVERSATION,
  STORE_USERNAME,
} from '../constants/actionTypes';

import { stepsInitialState } from './initialState';

const initialState = {
  steps: stepsInitialState,
  activeContextId: 1,
  ongoing: true,
  username: null,
};

export default function conversation(state = initialState, action) {
  switch (action.type) {
    case SET_ACTIVE_CONTEXT:
      return {
        ...state,
        activeContextId: action.contextId,
      };
    case CONTINUE_CONVERSATION:
      return {
        ...state,
        ongoing: true,
      };
    case STOP_CONVERSATION:
      return {
        ...state,
        ongoing: false,
      };
    case STORE_USERNAME:
      return {
        ...state,
        username: action.username,
      };
    default:
      return state;
  }
}
