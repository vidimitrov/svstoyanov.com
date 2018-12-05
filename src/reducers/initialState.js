import mainChatbotState from '../constants/chatBotSteps';
import projects from '../constants/projects';

export const userInitialState = {
  name: null,
};

export const projectsInitialState = projects;
export const stepsInitialState = mainChatbotState;

export default {
  user: userInitialState,
  projects: projectsInitialState,
  steps: stepsInitialState,
};
