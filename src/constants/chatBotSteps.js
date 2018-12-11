import React from 'react';
import ProjectsSlider from '../components/ProjectsSlider/ProjectsSlider';
import CustomOptions from '../components/CustomOptions/CustomOptions';
import Input from '../components/Inputs/Input';
import TextArea from '../components/Inputs/TextArea';
import ImageStep from '../components/steps/Image';
import stoyanBushcraftingImg from '../assets/img/stoyan-bushcrafting.jpg';

const CHATBOT_VISITED_SECTIONS = 'cb-vs';

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

export default [
  /**
   * INTRO STEPS 
   */

  {
    id: 'c57a7186-8a45-4980-9fb0-69752959a661',
    message: '👋 Hi there, I am Stoyan, a UX designer & researcher located in Bulgaria 🇧🇬',
    trigger: '09352513-9901-4844-9a15-b4a08f30d18d',
    delay: 4000
  }, {
    id: '09352513-9901-4844-9a15-b4a08f30d18d',
    message: `What's your name?`,
    trigger: '05014868-72e1-4468-a688-6d0ec1b61455',
  }, {
    id: '05014868-72e1-4468-a688-6d0ec1b61455',
    component: (
      <Input
        trigger='994885e8-5e24-4034-9a79-92a27fb2962f'
        placeholder='Type your name...'
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
          label: 'Why you need them',
          trigger: '7d538274-a6af-41af-bd3d-371edc1bb0ab',
        },
        {
          value: 1,
          label: 'What’s this',
          trigger: '391f50d4-a33e-4aca-a6f6-fe3302cc123b',
        },
        {
          value: 2,
          label: 'Nah',
          trigger: 'cdeea2f9-3978-416a-bae4-88fa08978217',
        }
      ]}
      />
    )
  }, {
    id: '7d538274-a6af-41af-bd3d-371edc1bb0ab',
    message: 'Well they are making me smarter',
    trigger: 'c0c44de7-8c36-43d7-8130-346cf336755d',
  }, {
    id: 'c0c44de7-8c36-43d7-8130-346cf336755d',
    message: 'I need to remember the name of the person I am talking to: 🙂',
    trigger: '9fa71636-9458-41b4-9760-e952ea4fd8d0',
  }, {
    id: '9fa71636-9458-41b4-9760-e952ea4fd8d0',
    message: `That's why I’m using them, but don’t worry, my memory is not that long so in 30 days I’ll not remember a thing.`,
    trigger: 'b8460185-2c66-4de5-bc1b-4a83a9b206fa',
  }, {
    id: 'b8460185-2c66-4de5-bc1b-4a83a9b206fa',
    component: (
      <CustomOptions options={[
        {
          value: 0,
          label: 'Got it',
          trigger: 'cf8ea5df-1283-4219-b545-27443fa3b381',
        }
      ]}
      />
    ),
  }, {
    id: '391f50d4-a33e-4aca-a6f6-fe3302cc123b',
    message: 'My breakfast.',
    trigger: '1df69e15-2e9a-4b01-b51b-c129159395bc',
  }, {
    id: '1df69e15-2e9a-4b01-b51b-c129159395bc',
    message: `Haha kidding, they are like a memory, allowing me to remember what we’ve talked about.`,
    trigger: 'a2a3096c-1e7f-4419-b435-5a6a2fafa241',
  }, {
    id: 'a2a3096c-1e7f-4419-b435-5a6a2fafa241',
    message: `After all I need to inform you because of the GDPR.`,
    trigger: 'a9ed115b-a723-4395-9afd-f676e5255b55',
  }, {
    id: 'a9ed115b-a723-4395-9afd-f676e5255b55',
    component: (
      <CustomOptions options={[
        {
          value: 0,
          label: 'Of course',
          trigger: 'cf8ea5df-1283-4219-b545-27443fa3b381',
        }
      ]}
      />
    ),
  }, {
    id: 'cdeea2f9-3978-416a-bae4-88fa08978217',
    message: 'I am glad to hear this. Now I can become smarter:-)',
    trigger: 'cf8ea5df-1283-4219-b545-27443fa3b381',
  }, {
    id: 'cf8ea5df-1283-4219-b545-27443fa3b381',
    message: 'Nice!',
    trigger: '30fb0642-5386-4be5-80ca-95669f02720d',
  }, {
    id: '30fb0642-5386-4be5-80ca-95669f02720d',
    message: 'By the way, what would you like to do? Learn more about me or you prefer to contact me?',
    trigger: '2140d3cd-21d3-4a9e-a05a-3c4bbe84c7a0',
  }, {
    id: '2140d3cd-21d3-4a9e-a05a-3c4bbe84c7a0',
    component: (
      <CustomOptions options={[
        {
          value: 0,
          label: 'Learn more about you',
          trigger: 'bc45efbf-270f-4ff0-810b-d26b9ce598ca',
        },
        {
          value: 1,
          label: 'I want to contact you',
          trigger: 'eed7338a-dacc-48af-a87b-7085b0736ee8',
        }
      ]}
      />
    ),
  },

  /**
   *  ABOUT ME STEPS
   */

  {
    id: 'bc45efbf-270f-4ff0-810b-d26b9ce598ca',
    message: 'I am grateful!',
    trigger: '818027c8-982d-46ae-85b5-1762fe3e980c'
  }, {
    id: '818027c8-982d-46ae-85b5-1762fe3e980c',
    message: 'I’m a UX designer and a strategist, who loves creating value for companies with people-centric solutions. My goal is to deliver products that people use. I’ve worked with different startups and companies on exciting projects across different industries and countries from simple prototypes, MVP’s to final products.',
    trigger: '42d6f01d-3c44-43da-bea8-b1fa301af378'
  }, {
    id: '42d6f01d-3c44-43da-bea8-b1fa301af378',
    message: `I’m a curious guy, who is constantly 
    learning and experimenting with different technologies! That’s why I’ve created my digital twin to represent me. Haha!`,
    trigger: 'e29b9ed5-f83d-48ba-bd6d-b9891ec8ad23'
  }, {
    id: 'e29b9ed5-f83d-48ba-bd6d-b9891ec8ad23',
    message: 'Recently I started my personal blog called infinitecrave.com',
    trigger: '7c478cfc-2415-45be-a953-422002116874'
  }, {
    id: '7c478cfc-2415-45be-a953-422002116874',
    message: `And last but not least I’m a nature freak who loves to practice bushcraft 🏕️ in his spare time.`,
    trigger: '3e7b3a0a-ae39-42eb-a9c0-12c84b7515a4'
  }, {
    id: '3e7b3a0a-ae39-42eb-a9c0-12c84b7515a4',
    component: (
      <CustomOptions options={[
        {
          value: 0,
          label: 'Amazing. Can I see your work',
          trigger: '89695e34-2a77-4f0e-ab39-8602906dde0b',
        },
        {
          value: 1,
          label: `What drives you`,
          trigger: '30ac9e09-0053-48dd-beb5-08207c6a4da5',
        },
        {
          value: 2,
          label: `Curious to know about your hobbies`,
          trigger: 'aa555702-702b-4821-b8a0-0cc1e92c6b49',
        }
      ]}
      />
    ),
  },

  /**
   *  PROJECTS STEPS
   */

  {
    id: '89695e34-2a77-4f0e-ab39-8602906dde0b',
    message: 'No problem!',
    trigger: '165cbbdb-a0cc-40be-b294-f1757ff23d64',
    callback: () => {
      setVisited('89695e34-2a77-4f0e-ab39-8602906dde0b');
    }
  }, {
    id: '165cbbdb-a0cc-40be-b294-f1757ff23d64',
    message: 'Taking them out from my magic 🎩 (Fresh, evenly baked on both sides/Take a look at them)',
    trigger: '1a6c0ea0-c902-4762-836c-536b75b6d542',
  }, {
    id: '1a6c0ea0-c902-4762-836c-536b75b6d542',
    message: 'Bzmmm',
    trigger: '0b4909a6-b354-4295-83d8-6a4b9fe2daff',
  }, {
    id: '0b4909a6-b354-4295-83d8-6a4b9fe2daff',
    component: (<ProjectsSlider />),
    style: {
      width: '100%',
      backgroundColor: 'transparent',
      padding: 0,
    },
  },

  /**
   *  WHAT DRIVES YOU STEPS
   */

  {
    id: '30ac9e09-0053-48dd-beb5-08207c6a4da5',
    message: 'Actually it is inventing creative solutions and questioning what already is out there in order to improve it. My belly turns upside down when I see a opportunity to improve an already done solution or create an innovative one.',
    trigger: 'f6cf0d43-2d27-490a-96f4-a2d6bad760e8',
    callback: () => {
      setVisited('30ac9e09-0053-48dd-beb5-08207c6a4da5');
    }
  }, {
    id: 'f6cf0d43-2d27-490a-96f4-a2d6bad760e8',
    message: `Because for me design isn't just some fancy term, drawing or research. For me it is creating a proper products for the people out there in the proper way.`,
    trigger: '1e9ff7c4-bbf4-41b2-9741-de6363090ac8',
  }, {
    id: '1e9ff7c4-bbf4-41b2-9741-de6363090ac8',
    message: 'This was one of the many reasons, why I’ve started working in Snapp and later Seemba.',
    trigger: '2f758d46-e72e-4653-b47b-daa6940e67ea',
  }, {
    id: '2f758d46-e72e-4653-b47b-daa6940e67ea',
    component: (
      <CustomOptions options={[
        {
          value: 0,
          label: 'Show me what you’ve worked in Seemba',
          trigger: '58302e93-08aa-43fb-9d4e-ed0b925ebfc6',
        },
        {
          value: 1,
          label: 'Amazing, tell me more about your drive',
          trigger: '555d3b51-1647-45d4-a2e0-cb3119b87efa',
        },
      ]}
      />
    )
  }, {
    id: '58302e93-08aa-43fb-9d4e-ed0b925ebfc6',
    message: 'Sure, here it is!',
    trigger: 'f5273870-f3d6-40ca-9329-98af52ea0b58',
  }, {
    id: 'f5273870-f3d6-40ca-9329-98af52ea0b58',
    component: (
      <ProjectsSlider activeSlideId={1} />
    ),
    style: {
      width: '100%',
      backgroundColor: 'transparent',
      padding: 0,
    },
  }, {
    id: '555d3b51-1647-45d4-a2e0-cb3119b87efa',
    message: `Aha nice that you have the interest of knowing more.`,
    trigger: '00de876c-632d-4d12-8b33-4334f35278bb',
  }, {
    id: '00de876c-632d-4d12-8b33-4334f35278bb',
    message: 'I think that this question can be issued in a quick call or email. I will be glad to form a discussion with you 🙂',
    trigger: 'b93a0bf0-ecc4-41d7-a9ae-e8946168a034',
  }, {
    id: 'b93a0bf0-ecc4-41d7-a9ae-e8946168a034',
    component: (
      <CustomOptions options={[
        {
          value: 0,
          label: 'Okay, I want to contact you', // Priority buttons
          trigger: 'baf603af-c5b3-4357-8973-eda635bd1d76',
        },
      ]}
      />
    )
  }, {
    id: 'baf603af-c5b3-4357-8973-eda635bd1d76',
    message: 'Sure. One moment please',
    trigger: '1d895783-da23-4713-8354-d939001f7614',
  }, {
    id: 'aa555702-702b-4821-b8a0-0cc1e92c6b49',
    message: 'Of course, would be a pleasure for me!',
    trigger: 'f5273870-f3d6-40ca-9329-98af52ea0b58'
  }, {
    id: 'f5273870-f3d6-40ca-9329-98af52ea0b58',
    message: `You are very curious, ${localStorage.getItem('user-name')}!`,
    trigger: 'e9aa5209-4126-4601-9108-20d3818c188e',
  }, {
    id: 'e9aa5209-4126-4601-9108-20d3818c188e',
    message: 'Just to mention that I also consider my side projects as a hobby, since I love what I do.',
    trigger: 'fff3317f-c601-4c7f-b9dc-d3672eb20458',
  }, {
    id: 'fff3317f-c601-4c7f-b9dc-d3672eb20458',
    message: 'What would you like me to tell you more about?',
    trigger: 'a3306941-2feb-48ec-baed-615750d57425',
  }, {
    id: 'a3306941-2feb-48ec-baed-615750d57425',
    component: (
      <CustomOptions options={[
        {
          value: 0,
          label: 'What’s bushcraft',
          trigger: '36acf53a-d579-4c5d-8e6c-d6726e51737f',
        },
        {
          value: 1,
          label: 'Do you write',
          trigger: 'ade03d57-a390-46ed-ae5b-16df08760972',
        },
        {
          value: 2,
          label: 'Do you have any side projects',
          trigger: '5eb2a29c-3f7e-4ca5-a691-84e4f73836b5',
        },
      ]}
      />
    )
  },

  /**
   * BUSHCRAFT STEP
   */

  {
    id: '36acf53a-d579-4c5d-8e6c-d6726e51737f',
    message: `Okay I think that you’ll like it!`,
    trigger: 'fcb7566d-e735-4a96-9c35-cb2231b6924f',
  }, {
    id: 'fcb7566d-e735-4a96-9c35-cb2231b6924f',
    message: 'Basically, it is a skill that teaches you to live in the woods, build shelter, find water and food and take care of yourself.',
    trigger: '6fe7f3d4-ad5c-4cb4-b763-b7ac836e8d77',
  }, {
    id: '6fe7f3d4-ad5c-4cb4-b763-b7ac836e8d77',
    message: 'How it sounds to you?',
    trigger: '8d7f9350-60ed-4fc6-8e2e-408bda3bcc89',
  }, {
    id: '8d7f9350-60ed-4fc6-8e2e-408bda3bcc89',
    component: (
      <CustomOptions options={[
        {
          value: 0,
          label: 'Hmm, not my type',
          trigger: 'aab29c25-b0d4-4050-8bb3-8065cfd0b18f',
        },
        {
          value: 1,
          label: 'And why you like it',
          trigger: '4fc415ef-ed03-43d3-b432-9304cbda4233',
        },
      ]}
      />
    )
  }, {
    id: 'aab29c25-b0d4-4050-8bb3-8065cfd0b18f',
    message: 'Well, what can I say 😀',
    trigger: '2066f091-0eb2-4039-96ce-9dbc749b3460',
  }, {
    id: '2066f091-0eb2-4039-96ce-9dbc749b3460',
    message: `I like it because it teaches me a lot on keeping my spirit up, it creates discipline, teaches you on self-reliance and lastly, you need to be creative to build something like let's say a shelter or an MVP of a shelter 😀`,
    trigger: 'a5564d31-ffc8-4bff-b3da-06927c38bf84',
  }, {
    id: 'a5564d31-ffc8-4bff-b3da-06927c38bf84',
    message: `I'll show you something!`,
    trigger: '5de220b0-70fc-41b3-aee5-aefdd93126d6',
  }, {
    id: '5de220b0-70fc-41b3-aee5-aefdd93126d6',
    component: (
      <ImageStep src={stoyanBushcraftingImg} />
    ),
    trigger: '22d776eb-721d-4544-8e53-f8efaabc3648',
  }, {
    id: '22d776eb-721d-4544-8e53-f8efaabc3648',
    message: 'This is me in the wild',
    trigger: '7af00669-3b02-4a64-bc98-7c076629177e',
  }, {
    id: '7af00669-3b02-4a64-bc98-7c076629177e',
    component: (
      <CustomOptions options={[
        {
          value: 0,
          label: 'Nice picture, like it',
          trigger: '4cddfd44-1e6e-4289-b440-30c4422fd7fe',
        },
        {
          value: 1,
          label: `Think that it's not for me`,
          trigger: '41e28014-62ba-441b-aeab-44b2ee0fa2d8',
        },
      ]}
      />
    ),
  }, {
    id: '41e28014-62ba-441b-aeab-44b2ee0fa2d8',
    message: 'In Bulgaria we have a saying: Every crazy person with their act 😁.',
    trigger: '19cd57e3-ce44-4eb7-81f8-810add682e3e',
  }, {
    id: '19cd57e3-ce44-4eb7-81f8-810add682e3e',
    message: `Well ${localStorage.getItem('user-name')} what would you like to talk about next?`,
    trigger: '37b9a497-47ad-4be6-832c-7900d1167c02',
  }, {
    id: '37b9a497-47ad-4be6-832c-7900d1167c02',
    component: (
      <CustomOptions
        options={[
          {
            value: 0,
            label: 'Show me your projects',
            trigger: '89695e34-2a77-4f0e-ab39-8602906dde0b',
          },
        ]}
        dynamicOptions={[
          {
            value: 1,
            isVisible: () => !isVisited('30ac9e09-0053-48dd-beb5-08207c6a4da5'),
            label: 'What drives you',
            trigger: '30ac9e09-0053-48dd-beb5-08207c6a4da5',
          },
          {
            value: 2,
            isVisible: () => !isVisited('ade03d57-a390-46ed-ae5b-16df08760972'),
            label: 'Earlier you mentioned that you write',
            trigger: 'ade03d57-a390-46ed-ae5b-16df08760972',
          },
          {
            value: 3,
            isVisible: () => !isVisited('89695e34-2a77-4f0e-ab39-8602906dde0b'),
            label: 'I saw that you have side projects',
            trigger: '89695e34-2a77-4f0e-ab39-8602906dde0b',
          }
        ]}
      />
    ),
  }, {
    id: '4cddfd44-1e6e-4289-b440-30c4422fd7fe',
    message: '🙂',
    trigger: '5d35d65b-74de-4ded-bb86-9cba8e1d7ffd',
  }, {
    id: '5d35d65b-74de-4ded-bb86-9cba8e1d7ffd',
    message: `Hmm tell me ${localStorage.getItem('user-name')} I sense that you are a person that likes nature. Is this correct?`,
    trigger: '47084f7d-456c-428f-860e-6e10fa1b4cf9',
  }, {
    id: '4fc415ef-ed03-43d3-b432-9304cbda4233',
    message: '👍',
    trigger: '42178caf-ef08-437a-9f0c-281776458b02',
  }, {
    id: '42178caf-ef08-437a-9f0c-281776458b02',
    message: 'I wanna ask you something. Do you like nature?',
    trigger: 'a44f4aab-ec8c-4937-abe6-011395692146',
  }, {
    id: 'a44f4aab-ec8c-4937-abe6-011395692146',
    component: (
      <CustomOptions options={[
        {
          value: 0,
          label: 'Yeah',
          trigger: '3cd011b6-fcba-4c2a-b2cc-090b779a9004',
        },
        {
          value: 1,
          label: 'Nah, I am  more of a city person',
          trigger: '9eab3571-2eba-4a6b-9cb4-54634c5e835f',
        },
      ]}
      />
    ),
  }, {
    id: '3cd011b6-fcba-4c2a-b2cc-090b779a9004',
    message: 'Awesome!',
    trigger: '47084f7d-456c-428f-860e-6e10fa1b4cf9',
  }, {
    id: '47084f7d-456c-428f-860e-6e10fa1b4cf9',
    message: 'Someday we can go on a trip or hike together!',
    trigger: 'e2feba63-56fa-473d-b7f2-4b12ddced3fd',
  }, {
    id: 'e2feba63-56fa-473d-b7f2-4b12ddced3fd',
    message: 'But till that day we can do other activities like….your choice?',
    trigger: 'c7c867db-7ecf-4988-98dc-89d03d47e4ee',
  }, {
    id: 'c7c867db-7ecf-4988-98dc-89d03d47e4ee',
    component: (
      <CustomOptions options={[
        {
          value: 0,
          label: 'Nice, I want to contact you',
          trigger: 'eed7338a-dacc-48af-a87b-7085b0736ee8',
        },
        {
          value: 1,
          label: 'Can you show me your work',
          trigger: '89695e34-2a77-4f0e-ab39-8602906dde0b',
        },
      ]}
      />
    ),
  }, {
    id: '9eab3571-2eba-4a6b-9cb4-54634c5e835f',
    message: 'Ehh, everyone has their preferences!',
    trigger: '638e0fd9-b044-4467-bdff-14b4cbfdc182',
  }, {
    id: '638e0fd9-b044-4467-bdff-14b4cbfdc182',
    message: `Let's not keep secrets from one another and tell me what would you like to do next?`,
    trigger: '464868a3-de36-4e6f-8e0b-fc2be3372032',
  }, {
    id: '464868a3-de36-4e6f-8e0b-fc2be3372032',
    component: (
      <CustomOptions options={[
        {
          value: 0,
          label: 'I like to talk with you',
          trigger: 'eed7338a-dacc-48af-a87b-7085b0736ee8',
        },
        {
          value: 1,
          label: 'Show me your projects',
          trigger: '89695e34-2a77-4f0e-ab39-8602906dde0b',
        },
      ]}
      />
    ),
  },


  /**
   * WRITING STEPS
   */

  {
    id: 'ade03d57-a390-46ed-ae5b-16df08760972',
    message: 'Yeah! Actually I’ve started several months ago. Really like to do it by the way.',
    trigger: '42054d9c-1fe6-4956-8c36-96958456e3db',
    callback: () => {
      setVisited('ade03d57-a390-46ed-ae5b-16df08760972');
    }
  }, {
    id: '42054d9c-1fe6-4956-8c36-96958456e3db',
    message: 'What do you want to know about my writing career ✍️?',
    trigger: 'a7a40a9a-bd17-48e3-ad0f-30a7fc7c9881',
  }, {
    id: 'a7a40a9a-bd17-48e3-ad0f-30a7fc7c9881',
    component: (
      <CustomOptions options={[
        {
          value: 0,
          label: `Let’s discuss on a topic`,
          trigger: '47820655-90b7-4a62-8223-7601362c66b1',
        },
        {
          value: 1,
          label: 'On what topics you write',
          trigger: '572159ba-5f1f-4c5b-9813-cf67c5cd4441',
        },
      ]}
      />
    ),
  }, {
    id: '47820655-90b7-4a62-8223-7601362c66b1',
    message: 'Okay!',
    trigger: '6b795579-a172-40a2-bb37-164b0150559a',
  }, {
    id: '6b795579-a172-40a2-bb37-164b0150559a',
    message: 'I need to warn you, though, that so far my capabilities are limited but I am learning.',
    trigger: '7a395f80-0cf2-4d95-b834-4e504c8dd1f7',
  }, {
    id: '7a395f80-0cf2-4d95-b834-4e504c8dd1f7',
    message: `Check them out I've prepared something for you: Conversational UI (CI) or UX?`,
    trigger: '4984873c-010a-499b-a7bb-2c80cc94fe7d',
  }, {
    id: '4984873c-010a-499b-a7bb-2c80cc94fe7d',
    component: (
      <CustomOptions options={[
        {
          value: 0,
          label: `No prob, let's discuss on CI`,
          trigger: 'ee80840e-aaac-405d-be59-09dbae8a4ba2',
        },
        {
          value: 1,
          label: 'Interesting. What is UX for you',
          trigger: '1c9beb0b-7a8c-4ca5-b40a-10fc2eb7d8e8',
        },
      ]}
      />
    ),
  }, {
    id: 'ee80840e-aaac-405d-be59-09dbae8a4ba2',
    message: 'Amazed that you have this interest! 😎',
    trigger: '3416f306-a239-4554-ace5-a80d40b39602',
  }, {
    id: '3416f306-a239-4554-ace5-a80d40b39602',
    message: `Humans talk from millennials but machines, why can't machines do so? Now it's a bit hard because of the fact that speech is a complex thing and differs a lot based on culture and language. So there are conversational rules, which to say that I’m using, haha, needs to be implemented in order we to have a conversation now. For instance, I can say that my distant cousins Siri, Cortana, and Alexa can even talk. I hope I’ll also do that soon!`,
    trigger: 'e219c554-20f0-4b2b-a65c-bba31668b1ab',
  }, {
    id: 'e219c554-20f0-4b2b-a65c-bba31668b1ab',
    message: `I like a quote that I heard from National Geographic: “Building the Babylon tower to the sky was possible because everyone was speaking the same language! Now God was scared so he had a solution to this, and thus created the languages and separated the people. Which stopped building the tower because they couldn’t communicate in the same language”.`,
    trigger: 'c1c997b8-43d8-45f5-9c73-6f5501759048',
  }, {
    id: 'c1c997b8-43d8-45f5-9c73-6f5501759048',
    component: (
      <CustomOptions options={[
        {
          value: 0,
          label: 'Nice. Wish to know more about this bot',
          trigger: '298d9a15-04c2-4e9a-882a-2ddc8750ef01',
        },
        {
          value: 1,
          label: 'Can you show me your work on CI',
          trigger: '649d08f0-7d48-43fd-8acb-0810396ea76d',
        },
      ]}
      />
    ),
  }, {
    id: '649d08f0-7d48-43fd-8acb-0810396ea76d',
    message: 'Sure. This is one of my CI projects.',
    trigger: '4d5776b5-5eae-495c-868c-eae02cc797d7',
  }, {
    id: '4d5776b5-5eae-495c-868c-eae02cc797d7',
    component: (
      <ProjectsSlider activeSlideId={4} />
    ),
    style: {
      width: '100%',
      backgroundColor: 'transparent',
      padding: 0,
    },
  }, {
    id: '298d9a15-04c2-4e9a-882a-2ddc8750ef01',
    message: 'No problem.',
    trigger: 'c70a8dfa-e78c-4d85-8159-8aa280449634',
  }, {
    id: 'c70a8dfa-e78c-4d85-8159-8aa280449634',
    message: 'Here you can find more information.',
    trigger: '2c3868eb-0a5b-4723-b64d-2762d7ca37d3',
  }, {
    id: '2c3868eb-0a5b-4723-b64d-2762d7ca37d3',
    component: (
      <ProjectsSlider
        activeSlideId={1}
        secondaryButton={{
          label: 'Show me this project',
          trigger: 'eed7338a-dacc-48af-a87b-7085b0736ee8',
        }} />
    ),
    component: (
      <CustomOptions options={[
        {
          value: 0,
          label: `Wish to contact you`,
          trigger: 'eed7338a-dacc-48af-a87b-7085b0736ee8',
        },
        {
          value: 1,
          label: `Let’s talk about something else`, // Leads to meadiator
          trigger: '95c2fc33-6b10-44a8-b03e-a9d963c50bb5',
        },
      ]}
      />
    ),
  }, {
    id: '1c9beb0b-7a8c-4ca5-b40a-10fc2eb7d8e8',
    message: 'Hmmm...',
    trigger: 'b2ac6908-434a-492e-9eca-e67327abe2e8',
  }, {
    id: 'b2ac6908-434a-492e-9eca-e67327abe2e8',
    message: `For me UX is all about people. It is the core in design since design is just a term for creating solutions that people love. Sometimes the fundamentals need to be challenged in order to create the optimal solution. Design can be found everywhere and in everything, no matter if it's a product or a service.`,
    trigger: '823ba471-8c15-410b-9636-6275bca7464a',
  }, {
    id: '823ba471-8c15-410b-9636-6275bca7464a',
    message: 'I believe that as a UX-er I need to be like an actor sometimes, going into the thoughts and lives of the people to understand their pains and needs. Empathise, empathise, emphatise.',
    trigger: '0a388fbc-1544-4690-b7bc-5405e46aa7af',
  }, {
    id: '0a388fbc-1544-4690-b7bc-5405e46aa7af',
    message: 'This is UX for me. And for you?',
    trigger: '7b15a1cc-a605-4ed9-bea1-95035da86379',
  }, {
    id: '7b15a1cc-a605-4ed9-bea1-95035da86379',
    component: (
      <CustomOptions options={[
        {
          value: 0,
          label: `Okay, I'll tell you`,
          trigger: 'c7737cd4-cf1f-4a1e-b1d6-e3ce363789f7',
        },
        {
          value: 1,
          label: `Wow, you've got me unprepared`,
          trigger: 'dea627fc-240a-4f92-814c-4bf33a5bb259',
        },
      ]}
      />
    ),
  }, {
    id: 'c7737cd4-cf1f-4a1e-b1d6-e3ce363789f7',
    component: (
      <TextArea
        trigger='7703d3ff-1e61-45d4-9c14-f4b1e411a86d'
        placeholder='So UX for me is...'
        callback={(value) => {
          localStorage.setItem('ux-explanation', value);
        }}
      />
    ),
  }, {
    id: '7703d3ff-1e61-45d4-9c14-f4b1e411a86d',
    message: 'Superb',
    trigger: '30710dd3-dd9f-447e-a90c-0348c615645a',
  }, {
    id: '30710dd3-dd9f-447e-a90c-0348c615645a',
    message: 'And your email?',
    trigger: '9f08c306-c990-4ae3-95e8-9f59b2bb8e08',
  }, {
    id: '9f08c306-c990-4ae3-95e8-9f59b2bb8e08',
    component: (
      <Input
        trigger='fcff86e7-bd2e-4279-97f2-aa2088d574ab'
        placeholder='Type your email...'
        callback={(value) => {
          localStorage.setItem('user-email', value);
        }}
      />
    ),
  }, {
    id: 'fcff86e7-bd2e-4279-97f2-aa2088d574ab',
    message: 'Would love to read your thoughts on the topic!',
    trigger: 'd0836ef8-c4ca-4755-b020-336e84d0cc3d',
  }, {
    id: 'd0836ef8-c4ca-4755-b020-336e84d0cc3d',
    message: `In the meantime while I read it and answer you can see some of my UX topics in my personal blog infinitecrave.com or if you want we can talk about something else!`, //Infinitecrave here is a link
    trigger: '33c0e0da-b505-42f5-ab41-522f792e23f2',
  }, {
    id: '33c0e0da-b505-42f5-ab41-522f792e23f2',
    component: (
      <CustomOptions options={[
        {
          value: 0,
          label: 'Nice. Can I see your work', // Priority buttons
          trigger: '89695e34-2a77-4f0e-ab39-8602906dde0b',
        },
      ]}
      />
    ),
  }, {
    id: 'dea627fc-240a-4f92-814c-4bf33a5bb259',
    message: 'No worries!',
    trigger: '21119418-c394-4d54-a8ef-c66b3451e6c6',
  }, {
    id: '21119418-c394-4d54-a8ef-c66b3451e6c6',
    message: 'While thinking on the topic you could check out some of my projects or we can talk about something else.',
    trigger: '2295a21b-5089-40ed-9780-63282c4e4fa2',
  }, {
    id: '2295a21b-5089-40ed-9780-63282c4e4fa2',
    component: (
      <CustomOptions options={[
        {
          value: 0,
          label: 'Show them to me',
          trigger: '89695e34-2a77-4f0e-ab39-8602906dde0b',
        },
        {
          value: 1,
          label: 'Wish to contact you',
          trigger: 'eed7338a-dacc-48af-a87b-7085b0736ee8',
        },
        {
          value: 2,
          label: 'Let’s talk about something else',
          trigger: '95c2fc33-6b10-44a8-b03e-a9d963c50bb5', //Go to section 3 mediator
        },
      ]}
      />
    ),
  }, {
    id: '572159ba-5f1f-4c5b-9813-cf67c5cd4441',
    message: 'Actually I write on many topics.',
    trigger: '4d10e7d4-9e96-4630-aa90-567354b47aec',
  }, {
    id: '4d10e7d4-9e96-4630-aa90-567354b47aec',
    message: 'To name few them: Universal design and UX, tinkering, Sharing my personal experience, entrepreneurship, leading, communication and technology.',
    trigger: '5e16c545-2f39-4a20-a1b8-3c978fce84cb',
  }, {
    id: '5e16c545-2f39-4a20-a1b8-3c978fce84cb',
    message: ` Long story short, I write what I’ve done so far and what I'm doing.`,
    trigger: '131a2787-d265-4d0f-bea2-a3167bec1f7c',
  }, {
    id: '131a2787-d265-4d0f-bea2-a3167bec1f7c',
    message: 'You can check some of my articles: infinitecrave.com', //infinitecrave is link
    trigger: '7921568d-5249-40e2-b03a-62e9237b4558',
  }, {
    id: '7921568d-5249-40e2-b03a-62e9237b4558',
    component: (
      <CustomOptions options={[
        {
          value: 0,
          label: 'Great, can you show me your work?',
          trigger: '89695e34-2a77-4f0e-ab39-8602906dde0b',
        },
        {
          value: 1,
          label: `Why you’ve started your own blog?`,
          trigger: '66f0c177-f9b9-40b7-a109-cb31074f5c01',
        },
      ]}
      />
    ),
  }, {
    id: '66f0c177-f9b9-40b7-a109-cb31074f5c01',
    message: `I'll try to be as short as possible.`,
    trigger: '3a255ae9-d7b9-4a0e-888b-9f071b86e3f3',
  }, {
    id: '3a255ae9-d7b9-4a0e-888b-9f071b86e3f3',
    message: 'When I started my career in the startup world as a designer, in the beginning, it was hard and confusing for me to know what to do and how to do it.',
    trigger: '392b12c8-91a4-4890-8d3e-77cad2c5d4bf',
  }, {
    id: '392b12c8-91a4-4890-8d3e-77cad2c5d4bf',
    message: 'So it took me a while before I started to produce great work and see results in the eyes of the customers.',
    trigger: '6dedb432-b073-4022-9c0e-ccda5bacc613',
  }, {
    id: '6dedb432-b073-4022-9c0e-ccda5bacc613',
    message: `My goal is to help designers learn about this world before going in there unprepared. That’s how I think I'll shorten their cycle of learning. And I love to talk.`,
    trigger: 'd2840803-f2e6-4a39-acb9-c7d2f308d29a',
  }, {
    id: 'd2840803-f2e6-4a39-acb9-c7d2f308d29a',
    message: 'The web is dark and full of terror!',
    trigger: '82f0954c-563c-4b8d-a91e-c7e90a4cf743',
  }, {
    id: '82f0954c-563c-4b8d-a91e-c7e90a4cf743',
    message: 'Haha, famous Game of Thrones quote.',
    trigger: '99219871-c480-47de-85c4-e272267ab316',
  }, {
    id: '99219871-c480-47de-85c4-e272267ab316',
    component: (
      <CustomOptions options={[
        {
          value: 0,
          label: 'Nice story. Would like to see your work', //Priority buttons
          trigger: '89695e34-2a77-4f0e-ab39-8602906dde0b',
        },
      ]}
      />
    ),
  },

  /**
   * SIDE PROJECTS STEPS
   */
  {
    id: '5eb2a29c-3f7e-4ca5-a691-84e4f73836b5',
    message: `Glad that you have the desire to know me better. Actually my side work is a hobby for me. Here is some of the things I've done`,
    trigger: 'b32930ef-d88f-4e08-ab84-44fe7f921a88',
  }, {
    id: 'b32930ef-d88f-4e08-ab84-44fe7f921a88',
    message: 'I was one of the organizers of IONIC Bulgaria. IONIC is a hybrid mobile development framework, which we’ve used in Snapp.',
    trigger: '776a47a6-5924-4081-bcd0-93eee330963b',
  }, {
    id: '776a47a6-5924-4081-bcd0-93eee330963b',
    message: 'I was helping a friend of mine to start a business - upcycled-recycled bags. This was challenging for me - I  helped her to start the business from scratch and understand the behavior of the people who buy that kind of bags. She stopped because of health issues.',
    trigger: 'e92543e9-ed1b-4727-95db-8b0e92965e06',
  }, {
    id: 'e92543e9-ed1b-4727-95db-8b0e92965e06',
    message: `I've started working on a project in the finance world with a financial consultant that had this idea. His idea was to start this project after working on his service and improving it and developing also his brand strategy. Peter, the financial consultant, wants to solve the issue here in Bulgaria for people to have a easy way to track their expenses and budget with a clear financial goals.`,
    trigger: '483331f9-ec6e-493b-8cab-42b54f9bf4e6',
  }, {
    id: '483331f9-ec6e-493b-8cab-42b54f9bf4e6',
    message: `With my girlfriend we’ve started a handmade family business of creating cozy and ergonomic bean bags. Yeah the cozy furniture in your home. Which so far is gaining popularity very quickly.`,
    trigger: 'd7e3ddc1-5890-4123-8878-eba0898fce81',
  }, {
    id: 'd7e3ddc1-5890-4123-8878-eba0898fce81',
    message: `And finally I'm trying to help new designers get into the design world faster by sharing my personal experience.`,
    trigger: 'ee2d98c2-d202-4929-81ae-64c09846e39b',
  }, {
    id: 'ee2d98c2-d202-4929-81ae-64c09846e39b',
    component: (
      <CustomOptions options={[
        {
          value: 0,
          label: 'Financial project',
          trigger: 'ee60602f-c72e-4158-9ffb-6ecccc935ab7',
        }, {
          value: 1,
          label: 'Wow, tell me more',
          trigger: '94b076a6-690e-47cc-ae0d-555cd6f126f9',
        }, {
          value: 2,
          label: 'How do you help those designers',
          trigger: '3d0e8fee-49c1-4404-ba1a-5f4758d7eba5',
        }, {
          value: 3,
          label: 'Wow, bean bag family business',
          trigger: '7d02bf1a-9c69-4d15-818a-0c2c9e5e1c8b',
        },
      ]}
      />
    ),
  }, {
    id: 'ee60602f-c72e-4158-9ffb-6ecccc935ab7',
    message: `Yeah, I mentioned the project which is called ALE and it’s goal is to help people with their finances. By putting a clear financial goal it will help them reach it. ALE is a project for a financial consultant and his clients. After working on his service and improving it he had this idea for an application for his customers to help them track their expenses and budgets. Peter, the financial consultant goal is make ALE personal financial assistant that every person have in his own pocket powered by AI.`,
    trigger: '9dc20388-3ddf-4660-973a-00a02d129f01',
  }, {
    id: '9dc20388-3ddf-4660-973a-00a02d129f01',
    message: 'My responsibilities are bigger since I am the only designers, working on prototypes and pivoting the idea to the shape that it took now with a strategy for further growth also on the information architecture, research and leading the communication with the developer.',
    trigger: 'a559ee93-3c91-43e2-a33e-24549b6a2efa',
  }, {
    id: 'a559ee93-3c91-43e2-a33e-24549b6a2efa',
    component: (
      <CustomOptions options={[
        {
          value: 0,
          label: 'Amazing. Can I see Ale',
          trigger: '672c6044-cf8e-4fa5-b3c2-875fca2d050c',
        }, {
          value: 1,
          label: 'Do you have other projects like Ale',
          trigger: '0e0fc28e-aef3-4333-8d2b-29ea3f84da11', //Priority buttons
        },
      ]}
      />
    ),
  }, {
    id: '672c6044-cf8e-4fa5-b3c2-875fca2d050c',
    message: 'Of course!',
    trigger: '8f906bb3-a50a-4d2e-93b1-938b15748c0c',
  }, {
    id: '8f906bb3-a50a-4d2e-93b1-938b15748c0c',
    component: (
      <ProjectsSlider activeSlideId={4} />
    ),
    style: {
      width: '100%',
      backgroundColor: 'transparent',
      padding: 0,
    },
  }, {
    id: '0e0fc28e-aef3-4333-8d2b-29ea3f84da11',
    message: 'Of course!',
    trigger: 'cd413535-3ce5-497b-9a6e-3f6c6823a879',
  }, {
    id: 'cd413535-3ce5-497b-9a6e-3f6c6823a879',
    message: 'But I think we can discuss them in a quick call? Or what else I can propose to you is to check out some of my other projects?',
    trigger: '260ebde6-6d91-47c2-8f57-e3703b42f800',
  }, {
    id: '260ebde6-6d91-47c2-8f57-e3703b42f800',
    component: (
      <CustomOptions options={[
        {
          value: 0,
          label: 'Would like to see your projects',
          trigger: '89695e34-2a77-4f0e-ab39-8602906dde0b',
        },
        {
          value: 1,
          label: 'Man, I want to contact you',
          trigger: 'eed7338a-dacc-48af-a87b-7085b0736ee8',
        },
      ]}
      />
    ),
  }, {
    id: '94b076a6-690e-47cc-ae0d-555cd6f126f9',
    message: 'Of course!',
    trigger: '32ae398c-a7ef-4b50-ad2a-78c82aa83c8e',
  }, {
    id: '32ae398c-a7ef-4b50-ad2a-78c82aa83c8e',
    message: 'You can find everything on my blog: infinitecrave.com', //infinitecrave.com link
    trigger: 'ffd450a6-46ae-43e0-b99d-f4a250b46176',
  }, {
    id: 'ffd450a6-46ae-43e0-b99d-f4a250b46176',
    message: ' Another media that you could find on is dribbble.com', //dribbble.com link
    trigger: '21c17276-eea8-47bc-8a99-c6df97fd416f',
  }, {
    id: '21c17276-eea8-47bc-8a99-c6df97fd416f',
    component: (
      <CustomOptions options={[
        {
          value: 0,
          label: 'Show me your projects',
          trigger: '89695e34-2a77-4f0e-ab39-8602906dde0b',
        }, {
          value: 1,
          label: 'Man, I want to contact you',
          trigger: 'eed7338a-dacc-48af-a87b-7085b0736ee8',
        },
      ]}
      />
    ),
  }, {
    id: '3d0e8fee-49c1-4404-ba1a-5f4758d7eba5',
    message: `I've started a group about design here in Bulgaria, where the goal is to help designers get into UX.`,
    trigger: '744b0bab-015f-48b3-b2b0-cf166ad65b93',
  }, {
    id: '744b0bab-015f-48b3-b2b0-cf166ad65b93',
    message: `Another thing is the blog that I've created which goal is exactly to share my personal point of view so people can learn and leverage on top of it`,
    trigger: '25bcbb27-fc8e-4acd-857d-725f3bd21e0e',
  }, {
    id: '25bcbb27-fc8e-4acd-857d-725f3bd21e0e',
    component: (
      <CustomOptions options={[
        {
          value: 0,
          label: 'And on what topics you write',
          trigger: '572159ba-5f1f-4c5b-9813-cf67c5cd4441',
        }, {
          value: 1,
          label: 'Nice! Tell me something else',
          trigger: '95c2fc33-6b10-44a8-b03e-a9d963c50bb5',
        },
      ]}
      />
    ),
  },


  /**
   * FAMILY BUSINESS
   */
  {
    id: '7d02bf1a-9c69-4d15-818a-0c2c9e5e1c8b',
    message: 'Yeah. A side project that we’ve started with my girlfriend which became to generate us serious income. People loved the brand and wanted to have a handmade bean bag so we saw that we could take a big % of the market share so we acted upon this opportunity.',
    trigger: '939b4944-f170-4d9d-a1e6-e7b59c7aa496',
  }, {
    id: '939b4944-f170-4d9d-a1e6-e7b59c7aa496',
    message: 'You could check out the story in my blog: infinitecrave.com.', //infinitecrave link
    trigger: '7f5e3c39-04bb-4c7a-9b17-11959b1ada53',
  }, {
    id: '7f5e3c39-04bb-4c7a-9b17-11959b1ada53',
    message: 'And check out our facebook page: www.facebook/barbarondesign.', //facebook/barbarondesign link
    trigger: 'f2dd8d7d-d267-42f0-932f-2ef90a41e0eb',
  }, {
    id: 'f2dd8d7d-d267-42f0-932f-2ef90a41e0eb',
    message: 'Hope you’ll like it. But in the meantime do you like us to talk on something else?',
    trigger: '287fc5a1-9669-4b24-a52f-8023944b57cf',
  }, {
    id: '287fc5a1-9669-4b24-a52f-8023944b57cf',
    component: (
      <CustomOptions options={[
        {
          value: 0,
          label: 'Great, can you show me your digital work', //Priority buttons
          trigger: '89695e34-2a77-4f0e-ab39-8602906dde0b',
        },
      ]}
      />
    ),
  },

  /**
    * MEDIATOR STEP
    */
  {
    id: '95c2fc33-6b10-44a8-b03e-a9d963c50bb5',
    message: 'Okay, what would like of me to show you?',
    trigger: '', //Priority buttons
  },


  /**
   * CONTACT ME STEPS
   */

  {
    id: 'eed7338a-dacc-48af-a87b-7085b0736ee8',
    message: 'Awesome',
    trigger: '1d895783-da23-4713-8354-d939001f7614',
  }, {
    id: '1d895783-da23-4713-8354-d939001f7614',
    message: 'What will be your ✉️ to me?',
    trigger: '5106d26e-0975-4fe3-ae31-0b87630201ea',
  }, {
    id: '5106d26e-0975-4fe3-ae31-0b87630201ea',
    component: (
      <TextArea
        trigger='8f854714-69f0-4a81-972c-e4bc18c47d0e'
        placeholder='Type your message...'
        callback={(value) => {
          localStorage.setItem('cf-message', value);
        }}
      />
    )
  }, {
    id: '8f854714-69f0-4a81-972c-e4bc18c47d0e',
    message: 'Nice',
    trigger: '3055ede5-e6b5-48b7-855a-e891ed9adaa2',
  }, {
    id: '3055ede5-e6b5-48b7-855a-e891ed9adaa2',
    message: `I can't wait to read it!`,
    trigger: 'e8d4ce93-bcee-42c8-986a-e93cefecc448',
  }, {
    id: 'e8d4ce93-bcee-42c8-986a-e93cefecc448',
    message: 'And your email?',
    trigger: 'c5932de6-7185-496f-bd88-efd489bc09c3',
  }, {
    id: 'c5932de6-7185-496f-bd88-efd489bc09c3',
    component: (
      <Input
        trigger='ef8d2487-80e9-4403-939b-57704a47596c'
        placeholder='Type your email...'
        callback={(value) => {
          localStorage.setItem('user-email', value);
        }}
      />
    )
  }, {
    id: 'ef8d2487-80e9-4403-939b-57704a47596c',
    message: 'Sent it! Will check it ASAP!',
    trigger: '7fbe2eb2-af3d-44cf-93d3-184dd1780595',
  }, {
    id: '7fbe2eb2-af3d-44cf-93d3-184dd1780595',
    message: `By the way, I am leaving my contacts if you would like to 
    reach me out on my phone number +359897923839 and by email on svs7oyanov@gmail.com`,
    trigger: '09c4294f-cead-4955-9c79-6f4f148c29cd',
  }, {
    id: '09c4294f-cead-4955-9c79-6f4f148c29cd',
    message: 'In the meantime what would you like to know about me?',
    trigger: '7c2a69d7-2c99-4a69-9469-15dcf41daca2'
  }, {
    id: '7c2a69d7-2c99-4a69-9469-15dcf41daca2',
    // The following options will be computed dynamically, for now this is all of them
    component: (
      <CustomOptions options={[
        {
          value: 0,
          label: 'Show me your projects',
          trigger: '89695e34-2a77-4f0e-ab39-8602906dde0b',
        },
        {
          value: 1,
          label: 'You mention that you write',
          trigger: 'ade03d57-a390-46ed-ae5b-16df08760972',
        },
        {
          value: 2,
          label: 'What is bushcraft',
          trigger: '36acf53a-d579-4c5d-8e6c-d6726e51737f',
        },
        {
          value: 4,
          label: 'Gotta go, sorry',
          trigger: '618ce22b-e7b3-45d2-864d-e8de9f4d2e5e',
        }
      ]}
      />
    )
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
    message: `Have a nice day ${localStorage.getItem('user-name')} and till next time!`
  }
];

