import {
  SET_MESSAGE_SUBJECT,
  SET_MESSAGE_CONTENT,
  CLEAR_MESSAGE_DATA,
} from '../constants/actionTypes';

const initialState = {
  subject: null,
  content: null,
};

export default function contactForm(state = initialState, action) {
  switch (action.type) {
    case SET_MESSAGE_SUBJECT:
      return {
        ...state,
        subject: action.subject,
      };
    case SET_MESSAGE_CONTENT:
      return {
        ...state,
        content: action.content,
      };
    case CLEAR_MESSAGE_DATA:
      return {
        ...state,
        subject: null,
        content: null,
      };
    default:
      return state;
  }
}
