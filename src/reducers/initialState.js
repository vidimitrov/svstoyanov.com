import React from 'react';
import ProjectsSlider from '../components/ProjectsSlider/ProjectsSlider';

export const userInitialState = {
  name: null,
};

export const projectsInitialState = [{
  id: '1',
  name: 'Snapp Builder',
  headline: 'Its all about building apps',
  shortDescription: 'Snapp Builder is first of its kind app for building apps',
  description: 'Snapp Builder is first of its kind app for building apps',
  duration: '1_YEAR',
  review: {
    companyName: 'Ch Ch Tecnologies',
    avatar: '',
    content: 'Ch Ch Technologies description',
    representative: 'GEORGI_DETELINOV',
    representativeRole: 'FINANCE_CONSULTANT',
  },
  landingImage: null,
  peopleInterest: 0.24,
  trustFactor: 0.14,
  realtimeboardLink: 'https://realtimeboard.com/b/12345',
}, {
  id: '2',
  name: 'Seemba',
  headline: 'Its all about online presence',
  shortDescription: 'Seemba helps SMEs to build their online presence',
  description: 'Seemba helps SMEs to build their online presence',
  duration: '3_YEARS',
  review: {
    companyName: 'Ch Ch Tecnologies',
    avatar: '',
    content: 'Ch Ch Technologies description',
    representative: 'GEORGI_DETELINOV',
    representativeRole: 'FINANCE_CONSULTANT',
  },
  landingImage: null,
  peopleInterest: 0.24,
  trustFactor: 0.14,
  realtimeboardLink: 'https://realtimeboard.com/b/12345',
}, {
  id: '3',
  name: 'History Park',
  headline: 'Its all about history',
  shortDescription: 'History Park is a park of history',
  description: 'Characters that have had created the big part of the European History. Well guess what Bulgaria takes role here in on Balkans with it nation which is several thousand years old. This is History park, it brings Bulgarian and partial Roman history by presenting it in a interactive way and taking you centuries and decades ago. People in the park will be able to experience this time travel, ride horses and shoot with a bow while riding, eat ancient kitchen, leave like the old days, even fight on the arena.',
  duration: '1_MONTH',
  review: {
    companyName: 'Together Bulgaria',
    avatar: '',
    content: 'Working with Stoyan was just an awesome experience. He invested time to learn about out wants and need , he also took time to learn everything needed fo the project Historical Park so he could make the best website for it He was honest and transparent about the process and kept us involved all the time. It was up to Stoyan to really translate everything we talked about in to the website design and to find the best one for this big project.. The end result was just awesome, he did what we had as an idea and done it at the best way. Looking forward to work with Stoyan again.',
    representative: 'GEORGI_DETELINOV',
    representativeRole: 'FINANCE_CONSULTANT',
  },
  landingImage: null,
  metadata: [{
    displayName: '',
    value: null,
  }],
  peopleInterest: 0.24,
  trustFactor: 0.14,
  realtimeboardLink: 'https://realtimeboard.com/b/12345',
  problem: {
    type: 'bullet-points',
    description: 'Imagine Disney Land but instead of the cartoon characters real ones. Characters that have had created the big part of the European History.',
    bulletPoints: [
      'Imagine Disney Land but instead of the cartoon characters real ones. Characters that have had created the big part of the European History.',
      'ad Imagine Disney Land but instead of the cartoon characters real ones. Characters that have had created the big part of the European History.',
    ],
  },
  images: ['image_1_uri', 'image_1_uri', 'image_1_uri'],
}];

export const stepsInitialState = [{
  id: 'intro',
  message: 'Hello. My name is Stoyan. What\'s your name?',
  trigger: 'name-input',
}, {
  id: 'name-input',
  user: true,
  trigger: 'has-name-what-to-do',
}, {
  id: 'has-name-what-to-do',
  message: 'Nice to meet you {previousValue}. What can I do for you?',
  trigger: 'what-to-do-options',
}, {
  id: 'what-to-do-options',
  options: [
    {value: 'tell-me-about-you', label: 'Tell me about yourself', trigger: 'about-me'},
    {value: 'show-me-your-work', label: 'Show me your work', trigger: 'my-work'},
  ],
}, {
  id: 'about-me',
  message: `I am a product designer, researcher and product
            architect who started his career in the start-up world and
            fell in love with the hard work that you need to put in order
            to succeed in this environment. I also like to experiment with
            new technologies as you can see in my blog.
            For me every problem can be solved with the right design process.
            My favourite movie is HER and now I am working on a voice project
            that you can see in my blog infinite crave, where I am documenting it on the go.
            Sharing with you some of my social presence.`,
  trigger: 'learn-more-about-me',
}, {
  id: 'learn-more-about-me',
  options: [
    {
      value: 'http://infinitecrave.com',
      label: 'infinitecrave.com',
      trigger: 'my-work-after-about-me',
      redirect: 'http://infinitecrave.com',
    },
    {
      value: 'https://linkedin.com/in/svstoyanov',
      label: 'LinkedIn',
      trigger: 'my-work-after-about-me',
      redirect: 'https://linkedin.com/in/svstoyanov',
    },
    {
      value: 'https://drive.google.com/svstoyanov.cv.pdf',
      label: 'Download CV',
      trigger: 'my-work-after-about-me',
      redirect: 'https://drive.google.com/svstoyanov.cv.pdf',
    },
  ],
}, {
  id: 'my-work-after-about-me',
  message: 'Now as you know who am I, would you like me to show you my work?',
  trigger: 'my-work-options',
}, {
  id: 'my-work-options',
  options: [
    {value: true, label: 'Yes', trigger: 'projects-slider'},
    {value: false, label: 'No', trigger: 'here-if-needed'},
  ],
}, {
  id: 'my-work',
  message: 'This is my portfolio. Some projects that i have created in the past years.',
  trigger: 'projects-slider',
}, {
  id: 'projects-slider',
  component: (<ProjectsSlider />),
}, {
  id: 'here-if-needed',
  message: 'Okay, if you need me I am here',
}];

export default {
  user: userInitialState,
  projects: projectsInitialState,
  steps: stepsInitialState,
};
