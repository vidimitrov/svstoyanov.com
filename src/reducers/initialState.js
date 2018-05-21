export const userInitialState = {
  name: null,
};

export const projectsInitialState = [{
  id: 'P1',
  name: 'Snapp Builder',
  headline: 'Its all about building apps',
  description: 'Snapp Builder is first of its kind app for building apps',
  duration: '1 year',
  client: {
    name: 'Ch Ch Tecnologies',
    description: 'Ch Ch Technologies description',
  },
  landingImage: null,
  peopleInterest: 0.24,
  trustFactor: 0.14,
  realtimeboardLink: 'https://realtimeboard.com/b/12345',
}, {
  id: 'P2',
  name: 'Seemba',
  headline: 'Its all about online presence',
  description: 'Seemba helps SMEs to build their online presence',
  duration: '3 year',
  client: {
    name: 'Ch Ch Tecnologies',
    description: 'Ch Ch Technologies description',
  },
  landingImage: null,
  peopleInterest: 0.24,
  trustFactor: 0.14,
  realtimeboardLink: 'https://realtimeboard.com/b/12345',
}, {
  id: 'P3',
  name: 'History Park',
  headline: 'Its all about history',
  description: 'History Park is a park of history',
  duration: '1 month',
  client: {
    name: 'Together Bulgaria',
    description: 'Together Bulgaria description',
    representative: 'Georgi Detelinov',
    representativeRole: 'Finance Consultant',
  },
  landingImage: null,
  peopleInterest: 0.24,
  trustFactor: 0.14,
  realtimeboardLink: 'https://realtimeboard.com/b/12345',
  problem: {
    type: 'bullet-points',
    description: 'Imagine Disney Land but instead of the cartoon characters real ones. Characters that have had created the big part of the European History.',
    bulletPoints: [
      'Imagine Disney Land but instead of the cartoon characters real ones. Characters that have had created the big part of the European History.',
      'Imagine Disney Land but instead of the cartoon characters real ones. Characters that have had created the big part of the European History.',
    ],
  },
  images: ['image_1_uri', 'image_1_uri', 'image_1_uri'],
}];

export const contextsInitialState = [{
  // "Whats your name?" context
  id: 1,
  messages: [{
    content: 'Hello. My name is Stoyan. What\'s your name?',
    contentType: 'text-input-action',
    // TODO: Define what else you need during implementation
  }],
}, {
  id: 2,
  messages: [{
    content: 'Nice to meet you {{name}}! What can I do for you?',
    params: ['name'],
    contentType: 'multiple-choice-action',
    buttons: [{
      text: 'Tell me about yourself',
      type: 'nested-context',
      params: {
        // TODO: Decide if to have internal anonymous contexts or to relate them with id
        context: {
          messages: [{
            content: `I am a product designer, researcher and product 
            architect who started his career in the start-up world and 
            fell in love with the hard work that you need to put in order 
            to succeed in this environment. I also like to experiment with 
            new technologies as you can see in my blog. 
            For me every problem can be solved with the right design process. 
            My favourite movie is HER and now I am working on a voice project 
            that you can see in my blog infinite crave, where I am documenting it on the go. 
            Sharing with you some of my social presence.`,
            contentType: 'multiple-choice-action',
            buttons: [{
              text: 'infinitecrave.com',
              type: 'external-redirect',
              params: {
                url: 'http://infinitecrave.com',
              },
            }, {
              text: 'LinkedIn',
              type: 'external-redirect',
              params: {
                url: 'https://linkedin.com/in/svstoyanov',
              },
            }, {
              text: 'Download CV',
              type: 'external-redirect',
              params: {
                url: 'https://drive.google.com/svstoyanov.cv.pdf',
              },
            }],
          }, {
            content: 'Now as you know who am I, would you like me to show you my work?',
            contentType: 'multiple-choice-action',
            buttons: [{
              text: 'Yes',
              // TODO: Show the projects slider component
              type: 'back-to-root-conversation',
            }, {
              text: 'No',
              type: 'continue-conversation',
            }],
          }, {
            content: 'Okay, if you need me I am here',
            contentType: 'simple-message',
          }],
        },
      },
    }, {
      text: 'Show me your work',
      type: 'internal-redirect',
      params: {
        state: '',
      },
    }],
  }],
}, {
  id: 3,
  messages: [{
    content: '',
    contentType: 'projects-slider',
  }],
}];

export default {
  user: userInitialState,
  projects: projectsInitialState,
  contexts: contextsInitialState,
};
