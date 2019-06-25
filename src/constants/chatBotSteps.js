import React from 'react';
import _ from 'lodash';
import copy from 'copy-to-clipboard';
import moment from 'moment';
import ProjectsSlider from '../components/ProjectsSlider/ProjectsSlider';
import CustomOptions from '../components/CustomOptions/CustomOptions';
import Input from '../components/Inputs/Input';
import TextArea from '../components/Inputs/TextArea';
import Image from '../components/Steps/Image';
import { sendEmail } from '../api';
import stoyanBushcraftingImg from '../assets/img/stoyan-bushcrafting.png';
import {SnappProject} from '../constants/projects';

const CHATBOT_VISITED_SECTIONS = 'cb-vs';
const CHATBOT_RECURSIVE_TOPICS = [
  '89695e34-2a77-4f0e-ab39-8602906dde0b',
  'e4a09801-9647-47df-b195-bcd177554392',
  'aa555702-702b-4821-b8a0-0cc1e92c6b49',
  'bd61de4a-b8f3-41f1-ab3b-56341afc8112',
  '5328b6cd-7fbb-4690-96e7-ff36070d5318',
  'd42bac2b-67bd-4d15-bda2-316b99c3773c',
];

function hasVisitedSections() {
  const chatbotVisitedSections = localStorage.getItem(CHATBOT_VISITED_SECTIONS) || '{}';
  const sections = JSON.parse(chatbotVisitedSections);
  return !_.isEmpty(sections);
}

function areAllSectionsVisited() {
  const chatbotVisitedSections = localStorage.getItem(CHATBOT_VISITED_SECTIONS) || '{}';
  const sections = JSON.parse(chatbotVisitedSections);
  const topics = Object.keys(sections);

  if (topics.length === CHATBOT_RECURSIVE_TOPICS.length) {
    return true;
  }

  return false;
}

function isVisited(sectionId) {
  const chatbotVisitedSections = localStorage.getItem(CHATBOT_VISITED_SECTIONS) || '{}';
  const sections = JSON.parse(chatbotVisitedSections);
  return !!sections[sectionId];
}

function setVisited(sectionId) {
  const chatbotVisitedSections = localStorage.getItem(CHATBOT_VISITED_SECTIONS) || '{}';
  const sections = JSON.parse(chatbotVisitedSections);
  if (!sections[sectionId]) {
    sections[sectionId] = true;
    localStorage.setItem(CHATBOT_VISITED_SECTIONS, JSON.stringify(sections));
  }
}

function acknowledgementMessage() {
  const variations = ['Sure', 'Of course', 'Ready.2.1', 'Awesome', 'Amazing', 'Okay', 'No problem', 'Roger that', 'Coming right up!', 'Buckle up'];
  return variations[Math.floor(Math.random() * variations.length)];
}

function showProjectsMessage() {
  const variations = ['Can I see your work', 'Show me your projects', 'Can you show me your projects again'];
  return variations[Math.floor(Math.random() * variations.length)];
}

function changeTopicMessage() {
  const variations = ['Let’s discuss another topic', 'Let\'s talk about something else'];
  return variations[Math.floor(Math.random() * variations.length)];
}

function nonLexicalMessage() {
  const variations = ['Yeah', 'Okay', 'Uh', 'Oh', 'Aum', 'Mmm', 'Uhh', 'Uh-huh', 'Uu', 'You know', 'Ermmm', 'Mhmm'];
  return variations[Math.floor(Math.random() * variations.length)];
}

function showProjectMessage() {
  const variations = ['Show me this project', 'Want to understand more about it'];
  return variations[Math.floor(Math.random() * variations.length)];
}

function sameDaySecondTimeGreetings() {
  const variations = ['Where we were last time, hmmm?', 'What was the last thing that we\'ve discussed last time?'];
  return variations[Math.floor(Math.random() * variations.length)];
}
function secondTimeGreetings() {
  const variations = ['Привет! It means \'Greetings\' in Bulgarian', 'Здравей! This is \'Hi\' in Bulgarian'];
  return variations[Math.floor(Math.random() * variations.length)];
}

function mediatorMessage() {
  const variations = [
    `${acknowledgementMessage()}, what would like of me to show you?`,
    `${acknowledgementMessage()}, what you would like us to have a conversation on?`,
    `${acknowledgementMessage()}, which is the thing you want to talk about next?`,
  ];
  return variations[Math.floor(Math.random() * variations.length)];
}

function daytimeMessage(currentTime) {
  if (!currentTime || !currentTime.isValid()) {
    return null;
  }

  const splitAfternoon = 12; // 24hr time to split the afternoon
  const splitEvening = 17; // 24hr time to split the evening
  const currentHour = parseFloat(currentTime.format('HH'));

  if (currentHour >= splitAfternoon && currentHour <= splitEvening) {
    // Between 12 PM and 5PM
    return 'afternoon';
  }

  if (currentHour >= splitEvening) {
    // Between 5PM and Midnight
    return 'evening';
  }
  // Between dawn and noon
  return 'morning';
}

export default [
  /**
   * INTRO STEPS
   */

  {
    id: 'c57a7186-8a45-4980-9fb0-69752959a661',
    message: '👋 Hi there, I am Stoyan, a product designer, researcher & strategist located in Bulgaria. 🇧🇬',
    trigger: '09352513-9901-4844-9a15-b4a08f30d18d',
    delay: 4000,
  }, {
    id: '09352513-9901-4844-9a15-b4a08f30d18d',
    message: 'What\'s your name?',
    trigger: '05014868-72e1-4468-a688-6d0ec1b61455',
  }, {
    id: '05014868-72e1-4468-a688-6d0ec1b61455',
    component: (
      <Input
        trigger="994885e8-5e24-4034-9a79-92a27fb2962f"
        placeholder="Type in your name..."
        callback={(value) => {
          localStorage.setItem('user-name', value);
        }}
      />
    ),
  }, {
    id: '994885e8-5e24-4034-9a79-92a27fb2962f',
    message: 'Nice to meet you {previousValue}',
    trigger: 'bb4d0d9c-7019-4c36-bd5d-e1071d9a87c5',
  }, {
    id: 'bb4d0d9c-7019-4c36-bd5d-e1071d9a87c5',
    message: 'I hope you don’t mind that I’m using cookies? 🍪',
    trigger: 'cd5ad46c-daf5-46c2-9b96-5f212fabc6cc',
  }, {
    id: 'cd5ad46c-daf5-46c2-9b96-5f212fabc6cc',
    component: (
      <CustomOptions options={[
        {
          value: 0,
          label: 'Why do you need them',
          trigger: '7d538274-a6af-41af-bd3d-371edc1bb0ab',
        },
        {
          value: 1,
          label: 'I don’t mind',
          trigger: 'cdeea2f9-3978-416a-bae4-88fa08978217',
        },
      ]}
      />
    ),
  }, {
    id: '7d538274-a6af-41af-bd3d-371edc1bb0ab',
    message: 'Well they make me smarter',
    trigger: 'c0c44de7-8c36-43d7-8130-346cf336755d',
  }, {
    id: 'c0c44de7-8c36-43d7-8130-346cf336755d',
    message: 'It’s not polite to forget the name of the person you are talking to 🙂',
    trigger: '9fa71636-9458-41b4-9760-e952ea4fd8d0',
  }, {
    id: '9fa71636-9458-41b4-9760-e952ea4fd8d0',
    message: 'Don’t worry, my memory is not that long. In 30 days I’ll not remember a single thing.',
    trigger: 'b8460185-2c66-4de5-bc1b-4a83a9b206fa',
  }, {
    id: 'b8460185-2c66-4de5-bc1b-4a83a9b206fa',
    component: (
      <CustomOptions options={[
        {
          value: 0,
          label: 'Got it',
          trigger: 'cf8ea5df-1283-4219-b545-27443fa3b381',
        },
      ]}
      />
    ),
  },{
    id: 'cdeea2f9-3978-416a-bae4-88fa08978217',
    message: '💦 I am glad to hear this. Now, I’ll eat your cookies and become smarter haha 😊',
    trigger: '11cb7fc9-f438-443d-bf63-7b024bf0bb73',
  }, {
    id: 'cf8ea5df-1283-4219-b545-27443fa3b381',
    message: 'Nice!',
    trigger: '11cb7fc9-f438-443d-bf63-7b024bf0bb73',
  },{
    id: '11cb7fc9-f438-443d-bf63-7b024bf0bb73',
    message: 'By the way, what would you like to do?',
    trigger: '2140d3cd-21d3-4a9e-a05a-3c4bbe84c7a0',
  },{
    id: '2140d3cd-21d3-4a9e-a05a-3c4bbe84c7a0',
    component: (
      <CustomOptions options={[
        {
          value: 0,
          label: 'Tell me more about you',
          trigger: 'bc45efbf-270f-4ff0-810b-d26b9ce598ca',
        },
        {
          value: 1,
          label: 'Contact you',
          trigger: 'eed7338a-dacc-48af-a87b-7085b0736ee8',
        },
      ]}
      />
    ),
  },

  /**
   *  ABOUT ME STEPS
   */

  {
    id: 'bc45efbf-270f-4ff0-810b-d26b9ce598ca',
    message: 'Well I’m an UX designer and a strategist, who loves creating value for companies with people-centric solutions',
    trigger: '818027c8-982d-46ae-85b5-1762fe3e980c',
  }, {
    id: '818027c8-982d-46ae-85b5-1762fe3e980c',
    message: 'My experience is based on helping startups build their products from the ground up and scale or pivot them by creating a solid strategy and understanding for their customers.',
    trigger: '42d6f01d-3c44-43da-bea8-b1fa301af378',
  }, {
    id: '42d6f01d-3c44-43da-bea8-b1fa301af378',
    message: 'Scaled several ideas and concepts to live products and helped raised +$1M',
    trigger: 'e29b9ed5-f83d-48ba-bd6d-b9891ec8ad23',
  }, {
    id: 'e29b9ed5-f83d-48ba-bd6d-b9891ec8ad23',
    message: 'And last but not least I’m a nature freak who loves to practice bushcraft 🏕️ and started to work on some side projects in my spare time',
    trigger: '7c478cfc-2415-45be-a953-422002116874',
  }, {
    id: '7c478cfc-2415-45be-a953-422002116874',
    message: 'Pfuf that was long. Btw have you got a topic in mind you want to discuss upon?',
    trigger: '3e7b3a0a-ae39-42eb-a9c0-12c84b7515a4',
  }, {
    id: '3e7b3a0a-ae39-42eb-a9c0-12c84b7515a4',
    component: (
      <CustomOptions options={[
        {
          value: 0,
          label: 'Show me your projects',
          trigger: '89695e34-2a77-4f0e-ab39-8602906dde0b',
        },
        {
          value: 1,
          label: 'Show me your process', 
          trigger: 'e4a09801-9647-47df-b195-bcd177554392',
        },
        {
          value: 2,
          label: 'Tell me about this bushcraft', 
          trigger: '4ac1dc7b-7a7d-4225-86fc-7b7ce8a83e61', // bushcraft GUID
        },
        {
          value: 3,
          label: 'Show me your side activities', 
          trigger: 'aa555702-702b-4821-b8a0-0cc1e92c6b49', // side project/ activities GUID
        },
      ]}
      />
    ),
  },

 /**
     *  SHOW ME YOUR PROCESS - e4a09801-9647-47df-b195-bcd177554392
   */

  {
    id: 'e4a09801-9647-47df-b195-bcd177554392',
    message: 'Great!',
    trigger: '506465fa-8821-47d8-9d01-0fe42626e612',
  },{
    id: '506465fa-8821-47d8-9d01-0fe42626e612',
    message: 'My process varies depending on the needs of the project.',
    trigger: 'e3263e3d-47c1-4799-a051-c9e3a359f732',
  },{
    id: 'e3263e3d-47c1-4799-a051-c9e3a359f732',
    message: 'Some of the methods I used are',
    trigger: '2f957ec5-08f0-4e0b-a164-be89776aa68d',
  },{
    id: '2f957ec5-08f0-4e0b-a164-be89776aa68d',
    component: (
      <Image src={stoyanBushcraftingImg} /> // change process picture
    ),
    trigger: '38a495b2-e8af-4c6a-a9ee-2724e8e79f1f',
    delay: 3000,
  },{
    id: '38a495b2-e8af-4c6a-a9ee-2724e8e79f1f',
    message: 'Well if you have an idea, or project you are working on and you are wondering how to bring it forward, I might be the right person for you.',
    trigger: '5ba80eea-52b0-407b-8ef1-b800b4089151',
    delay: 6000,
  },{
    id: '5ba80eea-52b0-407b-8ef1-b800b4089151',
    message: 'We can discuss and see how I can support you in driving your idea forward.',
    trigger: '8ec5d39b-3793-48b8-8b8e-b84d5a304f47',
  },{
    id: '8ec5d39b-3793-48b8-8b8e-b84d5a304f47',
    component: (
      <CustomOptions options={[
        {
          value: 0,
          label: 'I want to contact you',
          trigger: 'eed7338a-dacc-48af-a87b-7085b0736ee8',
        },
        {
          value: 1,
          label: 'Show me your projects',
          trigger: '89695e34-2a77-4f0e-ab39-8602906dde0b',
        },
        {
          value: 2,
          label: 'Let’s discuss another topic',
          trigger: '95c2fc33-6b10-44a8-b03e-a9d963c50bb5',
        },
      ]}
      />
    ),
  },

  /**
     *  TELL ME ABOUT THIS BUSHCRAFT - 4ac1dc7b-7a7d-4225-86fc-7b7ce8a83e61
   */

  {
    id: '4ac1dc7b-7a7d-4225-86fc-7b7ce8a83e61',
    message: 'Nice, glad to see that you are curious to understand what it is!',
    trigger: 'c7985e08-26ef-4ed0-a4ee-170b75804b1c',
  },{
    id: 'c7985e08-26ef-4ed0-a4ee-170b75804b1c',
    message: 'Basically by bushcrafting I am learning how to live in the woods, build shelter find water.',
    trigger: '43aa9427-fcc9-40c5-b686-c493a655eaf6',
  },{
    id: '43aa9427-fcc9-40c5-b686-c493a655eaf6',
    message: 'It is bringing me back to nature and challenges me to take care of my self with the resources available there.',
    trigger: '855ada3c-c9d2-42d3-b419-003ad376c4e6',
  },{
    id: '855ada3c-c9d2-42d3-b419-003ad376c4e6',
    message: 'How it sounds?',
    trigger: '03046698-6539-4c20-bfca-d795b42a9e1c',
  },{
    id: '03046698-6539-4c20-bfca-d795b42a9e1c',
    component: (
      <CustomOptions options={[
        {
          value: 0,
          label: 'Why do you like it',
          trigger: '2e94c0d0-6277-4878-b1b2-c3f18d89edd4',
        },
        {
          value: 1,
          label: 'Nah, not my type',
          trigger: 'ba9a4cd6-e58d-4e75-bffa-51d3a3bcaa19',
        },
      ]}
      />
    ),
  },
  // Why do you like it
  {
    id: '2e94c0d0-6277-4878-b1b2-c3f18d89edd4',
    message: 'Well, what can I say 😀',
    trigger: '9dd5cb2c-9ab0-4f89-a0e1-6c74b9258761',
  },{
    id: '9dd5cb2c-9ab0-4f89-a0e1-6c74b9258761',
    message: 'I like because by practicing it, I keep my spirit up.',
    trigger: '9c426cec-cdd0-4a74-95a2-681e20aaaf1b',
  },{
    id: '9c426cec-cdd0-4a74-95a2-681e20aaaf1b',
    message: 'I am building up resilience, discipline and self reliancе. Practicing and unfolding my creativity when I need to build MVP of a shelter with the limited resources available.',
    trigger: '69a64f05-53d7-4dce-8740-f0fb7af0b3fb',
  },{
    id: '69a64f05-53d7-4dce-8740-f0fb7af0b3fb',
    message: 'I’ll show you something!',
    trigger: 'a7aca69f-bef2-469f-93d8-a4cc72f02468',
  },{
    id: 'a7aca69f-bef2-469f-93d8-a4cc72f02468',
    component: (
      <Image src={stoyanBushcraftingImg} /> 
    ),
    trigger: 'd413f3a2-89d8-45a3-a102-6359d0ba4a66',
  },{
    id: 'd413f3a2-89d8-45a3-a102-6359d0ba4a66',
    message: 'This is me in the wild.',
    trigger: 'e3a31200-fefb-46a4-acf9-82eaa9235473',
  },{
    id: 'e3a31200-fefb-46a4-acf9-82eaa9235473',
    component: (
      <CustomOptions options={[
        {
          value: 0,
          label: 'Wow, nice pic',
          trigger: '56782958-2dd5-4f53-80e4-14aaf108a005',
        },
        {
          value: 1,
          label: 'I think it\'s not for me',
          trigger: 'e47c0e73-c75c-408d-a40a-17b9e421a836',
        },
      ]}
      />
    ),
  },
  //// Wow, nice pic
  {
    id: '56782958-2dd5-4f53-80e4-14aaf108a005',
    message: 'Thx! I appreciate it.',
    trigger: 'd4c40588-68b4-43db-a5fc-dd8d673c04c4',
  },{
    id: 'd4c40588-68b4-43db-a5fc-dd8d673c04c4',
    message: 'When you are in Bulgaria just ping me and we can do one bushcraft session 😀',
    trigger: '5defc8ae-b258-48de-93f2-abaca7fed4f9',
  },{
    id: '5defc8ae-b258-48de-93f2-abaca7fed4f9',
    message: 'Don\'t worry It won\'t be that hard,',
    trigger: '95c2fc33-6b10-44a8-b03e-a9d963c50bb5', // Go to Mediator
  },
  
  //// I think it's not for me
  {
    id: 'e47c0e73-c75c-408d-a40a-17b9e421a836',
    message: 'Eh I think it is not for everyone. But I’m sure you have a very nice hobby',
    trigger: '95c2fc33-6b10-44a8-b03e-a9d963c50bb5', // Go to Mediator
  },


  // Wow, not my type
  {
    id: 'ba9a4cd6-e58d-4e75-bffa-51d3a3bcaa19',
    message: 'Eh, in Bulgaria we have a saying: Every person with his crazy acts 😀',
    trigger: '41937668-3233-494f-b6ba-3f3d371005c4',
  },{
    id: '41937668-3233-494f-b6ba-3f3d371005c4',
    message: 'But no worries. It is not a passion of yours and it doesn’t need to. We might have another common topic.',
    trigger: '95c2fc33-6b10-44a8-b03e-a9d963c50bb5', // Go to Mediator
  },

   /**
     *  SHOW ME YOUR SIDE ACTIVITIES - aa555702-702b-4821-b8a0-0cc1e92c6b49
   */
  {
    id: 'aa555702-702b-4821-b8a0-0cc1e92c6b49',
    message: '😊',
    trigger: '6ffa2758-3b0b-4711-bb79-954988b25aee',
  }, {
    id: '6ffa2758-3b0b-4711-bb79-954988b25aee',
    message: 'With my girlfriend we’ve started our family business called barbarondesign.',
    trigger: 'a1618ef2-27b8-4bfa-9fe2-69396728bea7',
  },{
    id: 'a1618ef2-27b8-4bfa-9fe2-69396728bea7',
    message: 'We make hand crafted beanbags, so that everyone’s home has the most place that accepts you in every mood.',
    trigger: 'dabbbac2-3a69-4bbf-bf06-9a8f8d05d28c',
  },{
    id: 'dabbbac2-3a69-4bbf-bf06-9a8f8d05d28c',
    message: 'The other project is the personal financial assistant Ale.',
    trigger: '436b4d06-6b0b-4969-9b59-fa16c003029e',
  },{
    id: '436b4d06-6b0b-4969-9b59-fa16c003029e',
    message: 'Thanks to my passion to support people in financial matters I have come to point to see real need for personal financial assistant.',
    trigger: 'd8b2c8c0-072c-4a1e-8781-f0c3fbc52a9c',
  },{
    id: 'd8b2c8c0-072c-4a1e-8781-f0c3fbc52a9c',
    message: 'There are many apps out there, but they do not address the real people need to help them in reaching their financial goals and set proper financial habits.',
    trigger: '728b3e21-d514-42fe-bdf6-cb6224353e5a',
  },{
    id: '728b3e21-d514-42fe-bdf6-cb6224353e5a',
    message: 'And last I’m doing seminars and workshops on various topics like Voice UI, design workflows, design practices and more here in Sofia in a university called SoftUni.',
    trigger: 'e202247f-42e7-4a4e-96c1-98003b0e498a',
  },{
    id: 'e202247f-42e7-4a4e-96c1-98003b0e498a',
    message: 'Eh, what you think?',
    trigger: '57350783-6e31-487b-9025-b6b1bdb7d512',
  },{
    id: '57350783-6e31-487b-9025-b6b1bdb7d512',
    component: (
      <CustomOptions options={[
        {
          value: 0,
          label: 'Show me your family business',
          trigger: '5328b6cd-7fbb-4690-96e7-ff36070d5318',
        },
        {
          value: 1,
          label: 'Show me your financial project',
          trigger: 'bd61de4a-b8f3-41f1-ab3b-56341afc8112',
        },
        {
          value: 2,
          label: 'Tell me about your workshops',
          trigger: 'd42bac2b-67bd-4d15-bda2-316b99c3773c',
        },
      ]}
      />
    ),
  },

  // Show me your family business
  {
    id: '5328b6cd-7fbb-4690-96e7-ff36070d5318',
    message: 'Glad to see that you are interested in hearing out more details.',
    trigger: '2bbe6113-e431-4834-90ca-33cc2d4576dc',
  },{
    id: '2bbe6113-e431-4834-90ca-33cc2d4576dc',
    message: 'You know what?....',
    trigger: '4edc41a0-94ca-4260-a6a8-f36df09e1134',
  },{
    id: '4edc41a0-94ca-4260-a6a8-f36df09e1134',
    message: 'Drop me a line so we can chit chat about it.',
    trigger: 'ac6f8d4c-6364-404c-ba90-32e6a34197f5',
  }, {
    id: 'ac6f8d4c-6364-404c-ba90-32e6a34197f5',
    message: 'In any case I’m leaving the link to the site. (barbarondesign.shop)',
    trigger: '89e2dccb-b071-4e0e-9e82-a0b683b16b14',
  }, {
    id: '89e2dccb-b071-4e0e-9e82-a0b683b16b14',
    component: (
      <CustomOptions
        options={[
          {
            value: 0,
            label: 'Sure',
            trigger: 'eed7338a-dacc-48af-a87b-7085b0736ee8',
          },
          {
            value: 1,
            label: changeTopicMessage(),
            trigger: '95c2fc33-6b10-44a8-b03e-a9d963c50bb5',
          },
        ]}
        dynamicOptions={[
          {
            value: 0,
            label: 'Show me your financial project',
            trigger: 'bd61de4a-b8f3-41f1-ab3b-56341afc8112',
            isVisible: () => !isVisited('bd61de4a-b8f3-41f1-ab3b-56341afc8112'),
          },
          {
            value: 0,
            label: 'Tell me about your workshops',
            trigger: 'd42bac2b-67bd-4d15-bda2-316b99c3773c',
            isVisible: () => !isVisited('d42bac2b-67bd-4d15-bda2-316b99c3773c'),
          },
        ]}
      />
    ),
  },
 
 
 
  // Show me your financial project
  {
    id: 'bd61de4a-b8f3-41f1-ab3b-56341afc8112',
    message: 'Amazing!',
    trigger: 'af13c11e-20c1-410e-a374-b6779f6c0da1',
  },{
    id: 'af13c11e-20c1-410e-a374-b6779f6c0da1',
    message: 'It all started in 2017 when for the first time while working together in snapp we experienced the same financial problem: low on budget.',
    trigger: '306d366a-e913-4fb6-9576-36436ee8c955',
  },{
    id: '306d366a-e913-4fb6-9576-36436ee8c955',
    message: 'In 2019 we started researching deeply on the problem with people having the same issue and this gave the direction of the product.',
    trigger: 'aa7e9343-d6dd-4516-9aa7-7c9ba21e61fd',
  },{
    id: 'aa7e9343-d6dd-4516-9aa7-7c9ba21e61fd',
    message: 'A personal financial assistant right in your pocket that helps you with your budget, savings, investments, and guides you.',
    trigger: '547f403c-ab41-40dd-8bec-34456538b7b5',
  },{
    id: '547f403c-ab41-40dd-8bec-34456538b7b5',
    message: 'Long story short this is a passion project.',
    trigger: '3d733109-1ed8-49c9-ba56-4f2218ceaaaa',
  },{
    id: '3d733109-1ed8-49c9-ba56-4f2218ceaaaa',
    message: 'If you are curious about it or you want to share your experience we can have a chit chat.',
    trigger: '45dc60b8-946e-42c0-87e4-558d1988489b',
  },{
    id: '45dc60b8-946e-42c0-87e4-558d1988489b',
    component: (
      <CustomOptions
        options={[
          {
            value: 0,
            label: 'Okay',
            trigger: 'eed7338a-dacc-48af-a87b-7085b0736ee8',
          },
          {
            value: 1,
            label: changeTopicMessage(),
            trigger: '95c2fc33-6b10-44a8-b03e-a9d963c50bb5',
          },
        ]}
        dynamicOptions={[
          {
            value: 0,
            label: 'Show me your family business',
            trigger: '5328b6cd-7fbb-4690-96e7-ff36070d5318',
            isVisible: () => !isVisited('5328b6cd-7fbb-4690-96e7-ff36070d5318'),
          },
          {
            value: 0,
            label: 'Tell me about your workshops',
            trigger: 'd42bac2b-67bd-4d15-bda2-316b99c3773c',
            isVisible: () => !isVisited('d42bac2b-67bd-4d15-bda2-316b99c3773c'),
          },
        ]}
      />
    ),
  },

  // Tell me about your workshops
  {
    id: 'd42bac2b-67bd-4d15-bda2-316b99c3773c',
    message: 'I recently led a workshop on Adobe XD teaching people to do better workflows.',
    trigger: '729397f0-f78a-4f32-9392-a4ae96db5ba0',
  },{
    id: '729397f0-f78a-4f32-9392-a4ae96db5ba0',
    message: 'I have a few more workshops planned for Voice Interface and two design thinking workshops focused on solving human problems for real businesses.',
    trigger: '86d1124a-b296-4c15-885e-86cb7c56ed57',
  },{
    id: '86d1124a-b296-4c15-885e-86cb7c56ed57',
    message: 'In 2018 I also led a workshop on how to create voice UI from scratch on UXiFY Bulgaria.',
    trigger: 'f3dc0581-8f83-42cc-99cf-732566c53a2d',
  },{
    id: 'f3dc0581-8f83-42cc-99cf-732566c53a2d',
    message: 'I love to share with my community what I know so we can enhance ourselves together.',
    trigger: '6d033415-e4cb-4f5a-a42c-8a28da4ef50e',
  },{
    id: '6d033415-e4cb-4f5a-a42c-8a28da4ef50e',
    message: 'If you are looking for someone curious for learning new things, and passionate to share knowledge. You are in the right place.',
    trigger: 'feae1a1a-5ece-4d88-8c16-e6e1f2ef8378',
  },{
    id: 'feae1a1a-5ece-4d88-8c16-e6e1f2ef8378',
    message: 'Just drop me a line.',
    trigger: 'c24cc74a-0ba7-4ade-ac39-0a50867ee197',
  },{
    id: 'c24cc74a-0ba7-4ade-ac39-0a50867ee197',
    component: (
      <CustomOptions
        options={[
          {
            value: 0,
            label: 'Okay',
            trigger: 'eed7338a-dacc-48af-a87b-7085b0736ee8',
          },
          {
            value: 1,
            label: changeTopicMessage(),
            trigger: '95c2fc33-6b10-44a8-b03e-a9d963c50bb5',
          },
        ]}
        dynamicOptions={[
          {
            value: 0,
            label: 'Show me your family business',
            trigger: '5328b6cd-7fbb-4690-96e7-ff36070d5318',
            isVisible: () => !isVisited('5328b6cd-7fbb-4690-96e7-ff36070d5318'),
          },
          {
            value: 0,
            label: 'Show me your financial project',
            trigger: 'bd61de4a-b8f3-41f1-ab3b-56341afc8112',
            isVisible: () => !isVisited('bd61de4a-b8f3-41f1-ab3b-56341afc8112'),
          },
        ]}
      />
    ),
  },
  


/**
    *  PROJECTS STEPS
   */

  {
    id: '89695e34-2a77-4f0e-ab39-8602906dde0b',
    message: acknowledgementMessage(),
    trigger: '0b4909a6-b354-4295-83d8-6a4b9fe2daff',
    callback: () => {
      setVisited('89695e34-2a77-4f0e-ab39-8602906dde0b');
    },
  }, {
    id: '0b4909a6-b354-4295-83d8-6a4b9fe2daff',
    component: (
      <ProjectsSlider
        primaryButtonLabel={showProjectMessage()}
        secondaryButtons={
            [{
              label: 'Will see your projects later',
              trigger: '95c2fc33-6b10-44a8-b03e-a9d963c50bb5',
            }]}
      />
    ),
    style: {
      width: '100%',
      backgroundColor: 'transparent',
      padding: 0,
    },
  },


  /**
   * SPECIFIC PROJECT STEPS - slider primary step
   */

  {
    id: 'project-info-step-0',
    message: 'Glad that you chose Snapp. So let’s start….',
    trigger: '9d2d1738-2672-40d8-b2ea-b497fc7aef8d',
  }, {
    id: 'project-info-step-1',
    message: 'Glad that you chose Seemba. So let’s start….',
    trigger: '0b2e19b6-373a-495e-aaf0-85f747947b02',
  }, {
    id: 'project-info-step-2',
    message: 'Glad that you chose History Park. So let’s start….',
    trigger: '1b2e19b6-373a-495e-aaf0-85f747946602',
  },
  // ...

  /**
   * SNAPP PROJECT TOPIC - project intro & summary
   */
  {
    id: '9d2d1738-2672-40d8-b2ea-b497fc7aef8d',
    message: 'So the Snapp project is...',
    // trigger: '997ced25-ee98-4611-b51a-6ca14b3f9b2f',
  },

  /**
   * SEEMBA PROJECT TOPIC
   */
  {
    id: '0b2e19b6-373a-495e-aaf0-85f747947b02',
    message: 'So the Seemba project is...',
    // trigger: 'f7f6dffc-b5a8-4a7d-971e-a36c8208329b',
  },

  /**
   * SEEMBA PROJECT TOPIC
   */
  {
    id: '1b2e19b6-373a-495e-aaf0-85f747946602',
    message: 'So the Histry Park project is...',
    // trigger: '17f6dffc-b5a8-4a7d-971e-a36c82083293',
  },


  /**
    * MEDIATOR STEP
    */
  {
    id: '95c2fc33-6b10-44a8-b03e-a9d963c50bb5',
    message: mediatorMessage(),
    trigger: '16b17727-e325-4285-8555-b1fe0a171faf',
  }, {
    id: '16b17727-e325-4285-8555-b1fe0a171faf',
    component: (
      <CustomOptions
        options={[
          {
            value: 0,
            label: 'Can I see your projects',
            trigger: '89695e34-2a77-4f0e-ab39-8602906dde0b',
          },
        ]}
        dynamicOptions={[
          {
            value: 0,
            label: 'How can I contact you',
            trigger: 'eed7338a-dacc-48af-a87b-7085b0736ee8',
            isVisible: () => !isVisited('eed7338a-dacc-48af-a87b-7085b0736ee8'),
          },
          {
            value: 1,
            label: 'Tell me more about your process',
            trigger: 'e4a09801-9647-47df-b195-bcd177554392',
            isVisible: () => !isVisited('e4a09801-9647-47df-b195-bcd177554392'),
          },
          {
            value: 2,
            label: 'What side activities you have',
            trigger: 'aa555702-702b-4821-b8a0-0cc1e92c6b49',
            isVisible: () => !isVisited('aa555702-702b-4821-b8a0-0cc1e92c6b49'),
            topics: [
              {
                value: 3,
                label: 'Tell me about your workshops',
                trigger: 'd42bac2b-67bd-4d15-bda2-316b99c3773c',
                isVisible: () => !isVisited('d42bac2b-67bd-4d15-bda2-316b99c3773c'),
              }, {
                value: 4,
                label: 'Tell me more about your financial project',
                trigger: 'bd61de4a-b8f3-41f1-ab3b-56341afc8112',
                isVisible: () => !isVisited('bd61de4a-b8f3-41f1-ab3b-56341afc8112'),
              }, {
                value: 5,
                label: 'Tell me more about your family business',
                trigger: '5328b6cd-7fbb-4690-96e7-ff36070d5318',
                isVisible: () => !isVisited('5328b6cd-7fbb-4690-96e7-ff36070d5318'),
              }, {
                value: 6,
                label: 'Tell me more about your bushcraft hobby',
                trigger: '4ac1dc7b-7a7d-4225-86fc-7b7ce8a83e61',
                isVisible: () => !isVisited('4ac1dc7b-7a7d-4225-86fc-7b7ce8a83e61'),
              },
            ],
          },
        ]}
      />
    ),
  },


  /**
   * CONTACT ME STEPS
   */

  {
    id: 'eed7338a-dacc-48af-a87b-7085b0736ee8',
    message: acknowledgementMessage(),
    trigger: '1d895783-da23-4713-8354-d939001f7614',
  }, {
    id: '1d895783-da23-4713-8354-d939001f7614',
    message: 'What will be your ✉️ to me?',
    trigger: '5106d26e-0975-4fe3-ae31-0b87630201ea',
  }, {
    id: '5106d26e-0975-4fe3-ae31-0b87630201ea',
    component: (
      <TextArea
        trigger="8f854714-69f0-4a81-972c-e4bc18c47d0e"
        placeholder="Type in your message..."
        callback={(value) => {
          localStorage.setItem('cf-message', value);
        }}
      />
    ),
  }, {
    id: '8f854714-69f0-4a81-972c-e4bc18c47d0e',
    message: 'Nice',
    trigger: '3055ede5-e6b5-48b7-855a-e891ed9adaa2',
  }, {
    id: '3055ede5-e6b5-48b7-855a-e891ed9adaa2',
    message: 'I can\'t wait to read it!',
    trigger: localStorage.getItem('user-email') ? '6aad7f2f-295e-4406-ab3e-bfe54efb56b3' : 'e8d4ce93-bcee-42c8-986a-e93cefecc448',
  }, {
    id: '6aad7f2f-295e-4406-ab3e-bfe54efb56b3',
    message: `I'll send the message with the email ${localStorage.getItem('user-email')} you gave me.`,
    trigger: 'ef8d2487-80e9-4403-939b-57704a47596c',
    callback: () => {
      const recipient = localStorage.getItem('user-email');
      const message = localStorage.getItem('cf-message');
      sendEmail(recipient, message);
    },
  }, {
    id: 'e8d4ce93-bcee-42c8-986a-e93cefecc448',
    message: 'And your email?',
    trigger: 'c5932de6-7185-496f-bd88-efd489bc09c3',
  }, {
    id: 'c5932de6-7185-496f-bd88-efd489bc09c3',
    component: (
      <Input
        trigger="ef8d2487-80e9-4403-939b-57704a47596c"
        type="email"
        placeholder="Type in your email..."
        callback={(value) => {
          localStorage.setItem('user-email', value);
          const message = localStorage.getItem('cf-message');
          sendEmail(value, message);
        }}
      />
    ),
  }, {
    id: 'ef8d2487-80e9-4403-939b-57704a47596c',
    message: 'Sent it! Will check it ASAP!',
    trigger: '7fbe2eb2-af3d-44cf-93d3-184dd1780595',
  }, {
    id: '7fbe2eb2-af3d-44cf-93d3-184dd1780595',
    message: 'By the way, I am leaving my contacts if you would like to reach me out on my phone number +359 897 92 38 39 and email svs7oyanov@gmail.com.',
    trigger: areAllSectionsVisited() ? '977a727c-ae64-4c60-9487-66c429fb3cfc' : '09c4294f-cead-4955-9c79-6f4f148c29cd',
  }, {
    id: '977a727c-ae64-4c60-9487-66c429fb3cfc',
    message: `It was a pleasure meeting and chatting with you ${localStorage.getItem('user-name')}. 🤗!`,
    trigger: 'e867812a-834f-4699-9cca-49a553b781d7',
  }, {
    id: 'e867812a-834f-4699-9cca-49a553b781d7',
    message: 'If you know someone who might need product strategist, researcher and designer passionate for life. Feel free to share my contacts.',
    trigger: '4c9e96c6-4488-4d71-ab27-c2c2f780d5cf',
  }, {
    id: '4c9e96c6-4488-4d71-ab27-c2c2f780d5cf',
    message: () => {
      const now = moment();
      return `Have a nice ${daytimeMessage(now)} ${localStorage.getItem('user-name')} and till next time!`;
    },
    trigger: 'd032ef9e-6955-414d-9e0b-0cb7a65b60d5',
  }, {
    id: 'd032ef9e-6955-414d-9e0b-0cb7a65b60d5',
    component: (
      <CustomOptions options={[
        {
          value: 0,
          label: 'Will tell them, Thx',
          trigger: 'bd049c9e-345a-45e2-920f-98a1e8f9be55',
        }, {
          value: 1,
          label: 'Thx man, you too',
          trigger: 'd3f61129-15f0-49b8-a7f4-f7c7aa513415',
        },
      ]}
      />
    ),
  }, {
    id: 'bd049c9e-345a-45e2-920f-98a1e8f9be55',
    message: '🙂 Thx! Appreciate it',
    trigger: 'ac049c9e-345a-4532-920f-98a1e8f9be66',
  }, {
    id: 'ac049c9e-345a-4532-920f-98a1e8f9be66',
    component: (
      <CustomOptions options={[
        {
          value: 0,
          label: 'Facebook',
          redirect: 'https://www.facebook.com/sharer/sharer.php?u=http%3A//svstoyanov.com',
          trigger: 'd3f61129-15f0-49b8-a7f4-f7c7aa513415',
        }, {
          value: 1,
          label: 'Twitter',
          redirect: 'https://twitter.com/home?status=Stoyan\'s%20website%20is%20awesome!%20Visit%20http%3A//svstoyanov.com%20to%20check%20it%20out',
          trigger: 'd3f61129-15f0-49b8-a7f4-f7c7aa513415',
        }, {
          value: 2,
          label: 'LinkedIn',
          redirect: 'https://www.linkedin.com/shareArticle?mini=true&url=http%3A//svstoyanov.com&title=Stoyan%20Stoyanov%20-%20Product%20Designer&summary=Hi%20there,%20I%20am%20Stoyan,%20a%20UX%20designer%20%26%20researcher%20located%20in%20Bulgaria',
          trigger: 'd3f61129-15f0-49b8-a7f4-f7c7aa513415',
        }, {
          value: 3,
          label: 'Copy URL',
          callback: () => {
            copy('http://svstoyanov.com');
          },
          trigger: 'bcf61129-15f0-33b8-a7f4-a9c7aa513354',
        },
      ]}
      />
    ),
  }, {
    id: 'bcf61129-15f0-33b8-a7f4-a9c7aa513354',
    message: 'Copied!',
    trigger: 'd3f61129-15f0-49b8-a7f4-f7c7aa513415',
  }, {
    id: 'd3f61129-15f0-49b8-a7f4-f7c7aa513415',
    message: '🙂 Hope that I will see you soon!',
    end: true,
  }, {
    id: '09c4294f-cead-4955-9c79-6f4f148c29cd',
    message: 'In the meantime do you want to understand something else?',
    trigger: '7c2a69d7-2c99-4a69-9469-15dcf41daca2',
  }, {
    id: '7c2a69d7-2c99-4a69-9469-15dcf41daca2',
    component: (
      <CustomOptions options={[
        {
          value: 0,
          label: 'Show me your projects',
          trigger: '89695e34-2a77-4f0e-ab39-8602906dde0b',
        },
        {
          value: 1,
          label: 'Tell me more about you',
          trigger: '95c2fc33-6b10-44a8-b03e-a9d963c50bb5',
        },
        {
          value: 2,
          label: 'Gotta go, sorry',
          trigger: '618ce22b-e7b3-45d2-864d-e8de9f4d2e5e',
        },
      ]}
      />
    ),
  }, {
    id: '618ce22b-e7b3-45d2-864d-e8de9f4d2e5e',
    message: 'Of course.',
    trigger: '3abce3c9-7071-4ab9-95dd-460e0a8290d8',
  }, {
    id: '3abce3c9-7071-4ab9-95dd-460e0a8290d8',
    message: `It was a pleasure meeting and chatting with you ${localStorage.getItem('user-name')}. 🤗!`,
    trigger: 'e15ce7fc-775f-4c8b-b518-c1c7c3dacdd4',
  }, {
    id: 'e15ce7fc-775f-4c8b-b518-c1c7c3dacdd4',
    message: 'If you enjoyed it you can tell a word to your friends and colleagues about me!',
    trigger: '7a3bd063-07e6-423a-a6bc-3966f47174e9',
  }, {
    id: '7a3bd063-07e6-423a-a6bc-3966f47174e9',
    message: `Have a nice day ${localStorage.getItem('user-name')} and till next time!`,
  },


  /**
   * USER COMES IN THE SAME DAY
   */


  {
    id: '676a522c-fd7b-4923-a40e-1fef304c3611',
    message: `Welcome back ${localStorage.getItem('user-name')}. 🤗`,
    trigger: '0969a3d0-e364-44bd-ba55-874b7d1dff22',
    delay: 4000,
  }, {
    id: '0969a3d0-e364-44bd-ba55-874b7d1dff22',
    message: sameDaySecondTimeGreetings(),
    trigger: 'e55ad60e-130e-4b98-8149-31ed516efd2f',
  }, {
    id: 'e55ad60e-130e-4b98-8149-31ed516efd2f',
    message: 'Aha, remembered!',
    trigger: '95c2fc33-6b10-44a8-b03e-a9d963c50bb5', // Go to section 3 mediator
  },


  /**
   * USER COMES AFTER 24HOURS+
   */

  {
    id: 'a2bf3b98-78a9-4a76-ad02-4a3f4982baf4',
    message: secondTimeGreetings(),
    trigger: '1114f7e3-9a19-4974-84af-668f3301adc1',
    delay: 4000,
  }, {
    id: '1114f7e3-9a19-4974-84af-668f3301adc1',
    message: `How are you today ${localStorage.getItem('user-name')} ?`,
    trigger: 'a8638245-4c63-4019-89de-86cd0cbebe25',
  }, {
    id: 'a8638245-4c63-4019-89de-86cd0cbebe25',
    component: (
      <CustomOptions options={[
        {
          value: 0,
          label: 'Had been better',
          trigger: '8c626a9b-63f6-4bf1-bc6a-6def272c830e',
        }, {
          value: 1,
          label: 'Feel wonderful',
          trigger: '82360ad1-075d-45a7-b316-687d35d0445f',
        },
      ]}
      />
    ),
  }, {
    id: '8c626a9b-63f6-4bf1-bc6a-6def272c830e',
    message: 'Hey, it happens even to the best.',
    trigger: 'fd8fe851-7ca6-4746-ae45-ba4923f65cd5',
  }, {
    id: 'fd8fe851-7ca6-4746-ae45-ba4923f65cd5',
    message: 'Sometimes even I have bad days.',
    trigger: 'f28fbbe0-207e-46c9-9e15-1b935359761e',
  }, {
    id: 'f28fbbe0-207e-46c9-9e15-1b935359761e',
    message: 'Can you imagine? Me a robot, having a bad day, hah.',
    trigger: '3b5414f3-a678-40e3-816b-1563d450feec',
  }, {
    id: '3b5414f3-a678-40e3-816b-1563d450feec',
    message: 'Come on, have a digital beer with me 🍺 It will help you to feel better!',
    trigger: '678e7904-89df-4eee-984d-73dc9e0c93d8',
  }, {
    id: '678e7904-89df-4eee-984d-73dc9e0c93d8',
    message: 'Bottoms up! Cheers!',
    trigger: '7263c08e-3067-4245-ae6b-e971fbbee847',
  }, {
    id: '7263c08e-3067-4245-ae6b-e971fbbee847',
    component: (
      <CustomOptions options={[
        {
          value: 0,
          label: 'Cheers man',
          trigger: '035da6df-7e22-42f7-8a1b-283db87aa856',
        },
      ]}
      />
    ),
  }, {
    id: '035da6df-7e22-42f7-8a1b-283db87aa856',
    message: 'Okay, where were we at last time?',
    trigger: '7fd4ed2e-bcb9-4464-94bb-b56cd35e6c5d',
  }, {
    id: '7fd4ed2e-bcb9-4464-94bb-b56cd35e6c5d',
    message: 'Ahh remembered!',
    trigger: '95c2fc33-6b10-44a8-b03e-a9d963c50bb5', // Go to section 3 mediator
  }, {
    id: '82360ad1-075d-45a7-b316-687d35d0445f',
    message: 'Amazing! Glad to hear it.',
    trigger: '039026c9-e9a9-4997-98f3-432aef4fc221',
  }, {
    id: '039026c9-e9a9-4997-98f3-432aef4fc221',
    message: 'One smile fixes the whole day.',
    trigger: '8df51079-79a7-4873-b2d8-1b5111ac4cde',
  }, {
    id: '8df51079-79a7-4873-b2d8-1b5111ac4cde',
    message: 'Okay, where were we at last time?',
    trigger: 'c5832308-80d5-4247-b9c8-37b4ea18c6c9',
  }, {
    id: 'c5832308-80d5-4247-b9c8-37b4ea18c6c9',
    message: 'Ahh remembered! ',
    trigger: '95c2fc33-6b10-44a8-b03e-a9d963c50bb5', // Go to section 3 mediator
  },
];
