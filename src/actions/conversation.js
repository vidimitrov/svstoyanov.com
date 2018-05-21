import {
  SET_ACTIVE_CONTEXT,
  CONTINUE_CONVERSATION,
  STOP_CONVERSATION,
  STORE_USERNAME,
} from '../constants/actionTypes';

export const setActiveContext = (contextId) => ({
  type: SET_ACTIVE_CONTEXT,
  contextId,
});

export const continueConversation = () => ({
  type: CONTINUE_CONVERSATION,
});

export const stopConversation = () => ({
  type: STOP_CONVERSATION,
});

export const storeUsernameAction = (username) => ({
  type: STORE_USERNAME,
  username,
});

export const storeUsername = (username) => (dispatch, getState) => {
  window.sessionStorage.setItem('username', username);
  dispatch(storeUsernameAction(username));
};
