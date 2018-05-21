import {
  SET_MESSAGE_SUBJECT,
  SET_MESSAGE_CONTENT,
  CLEAR_MESSAGE_DATA,
} from '../constants/actionTypes';

export const setMessageSubject = (subject) => ({
  type: SET_MESSAGE_SUBJECT,
  subject,
});

export const setMessageContent = (content) => ({
  type: SET_MESSAGE_CONTENT,
  content,
});

export const clearMessageData = () => ({
  type: CLEAR_MESSAGE_DATA,
});
