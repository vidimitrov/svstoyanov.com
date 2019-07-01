import historyParkFullImage from '../assets/img/projects/history-park/history-park-full-image.png';
import historyParkHeading from '../assets/img/projects/history-park/history-park-heading.png';
import historyParkReviewAuthorAvatar from '../assets/img/projects/history-park/history-park-avatar.png';
import historyParkLogo from '../assets/img/projects/history-park/history-park-logo.png';

import motelNowReviewAuthorAvatar from '../assets/img/projects/motel-now/motelNowReviewAuthorAvatar.png';
import motelNowTeam from '../assets/img/projects/motel-now/motelNowTeam.png';
import motelNowCover from '../assets/img/projects/motel-now/motelNowCover.png';
import motelNowProcess from '../assets/img/projects/motel-now/motelNowProcess.png';
import motelNowUnderstanding from '../assets/img/projects/motel-now/motelNowUnderstanding.png'; 
import motelNowDiagram from '../assets/img/projects/motel-now/motelNowDiagram.png'; 
import motelNowPersonas from '../assets/img/projects/motel-now/motelNowPersonas.png'; 
import motelNowCompetitive from '../assets/img/projects/motel-now/motelNowCompetitive.png'; 
import motelNowFeatures from '../assets/img/projects/motel-now/motelNowFeatures.png'; 
import motelNowIA from '../assets/img/projects/motel-now/motelNowIA.png'; 
import motelNowExample from '../assets/img/projects/motel-now/motelNowExample.png'; 
import motelNowWireframes from '../assets/img/projects/motel-now/motelNowWireframes.png'; 


import seembaAffiliateTeam from '../assets/img/projects/seemba-affiliate/seembaAffiliateTeam.png'; 
import seembaAffiliateAlberto from '../assets/img/projects/seemba-affiliate/seembaAffiliateAlberto.png'; 
import seembaAffiliateCover from '../assets/img/projects/seemba-affiliate/seembaAffiliateCover.png'; 
import SeembaAffiliateInterviews from '../assets/img/projects/seemba-affiliate/SeembaAffiliateInterviews.png'; 
import SeembaAffiliatePersonas from '../assets/img/projects/seemba-affiliate/SeembaAffiliatePersonas.png'; 
import seembaAffiliatePersona from '../assets/img/projects/seemba-affiliate/seembaAffiliatePersona.png'; 
import seembaAffiliateFlow from '../assets/img/projects/seemba-affiliate/seembaAffiliateFlow.png'; 
import seembaAffiliateWireframes from '../assets/img/projects/seemba-affiliate/seembaAffiliateWireframes.png'; 
import seembaAffiliateUI from '../assets/img/projects/seemba-affiliate/seembaAffiliateUI.png'; 
import seembaAffiliateSuccess from '../assets/img/projects/seemba-affiliate/seembaAffiliateSuccess.jpg'; 

import seembaViewerCover from '../assets/img/projects/seemba-viewer/seembaViewerCover.png'; 
import seembaViewerBot from '../assets/img/projects/seemba-viewer/seembaViewerBot.png'; 
import seembaViewerUnderstanding from '../assets/img/projects/seemba-viewer/seembaViewerUnderstanding.png'; 
import seembaViewerPersonas from '../assets/img/projects/seemba-viewer/seembaViewerPersonas.png'; 
import seembaViewerStats from '../assets/img/projects/seemba-viewer/seembaViewerStats.png'; 
import seembaViewerDetails from '../assets/img/projects/seemba-viewer/seembaViewerDetails.png'; 
import seembaViewerNames from '../assets/img/projects/seemba-viewer/seembaViewerNames.png'; 
import seembaViewerBrainstorming from '../assets/img/projects/seemba-viewer/seembaViewerBrainstorming.png'; 
import seembaViewerIA from '../assets/img/projects/seemba-viewer/seembaViewerIA.png'; 
import seembaViewerWireframes from '../assets/img/projects/seemba-viewer/seembaViewerWireframes.png'; 
import seembaViewerFinalUI from '../assets/img/projects/seemba-viewer/seembaViewerFinalUI.png'; 
import seembaViewerTesting from '../assets/img/projects/seemba-viewer/seembaViewerTesting.png'; 




export const TYPES = {
  Image: 'image',
  FullWidthImage: 'full-width-image',
  Text: 'text',
  Section: 'section', // 
  Review: 'review',
  YouTube: 'youtube',
};

export const SeembaForEndUsersProject = {
  id: 0,
  trigger: '986f2b6e-e271-4bf1-9c6a-0ee809026e27',
  name: 'Seemba - end users',
  headline: 'The Website India required',
  shortDescription: 'Seemba for the end users was the first project made as a pivot from Snapp. We decided instead of going for the business first to create something that will be used by the business users and than create a solution for the business owners.',
  logo: null,
  metadata: {
    duration: '4_MONTHS',
  },
  sections: [{
    type: TYPES.Image,
    src: seembaViewerCover,
  }, {
    type: TYPES.Section,
    heading: 'The problem',
    content: 'Seemba was the mobile-only platform that allows users to create a seemingly online presence and distribute it all across the web. It helps business owners in India to create their presence with few taps. People in India are taking the exponential wave and instead of using computers they pretty much do everything from a smartphone. This is a mobile-only economy which is the second economy in the world where the people are coming online for the first time through their smartphones. Seemba’s main target was small & medium businesses. (In India small and medium have a different meaning. They differentiate on space that they are using since labor is cheap and sometimes on 2sqm there are 11 people working).',
  }, {
    type: TYPES.Text,
    content: '​A major issue with our previous product Snapp was that business owner customers weren’t satisfied with the result that they were getting because:',
    bulletPoints: [
      'Finding an app just to book or buy a good wasn’t ideal since business customers are using low-end devices short on storage.',
      'The fact that one needs to search in the play store or aptioide (a secondary store) for an app like that he would buy something from the shop or reserve, for example, an hour for a hairdresser is not intuitive at all',
      'Having a transactional application on the phone is not an option since after using it once the user deletes it.',
    ],
  }, {
    type: TYPES.Text,
    content: '​Some of the metrics that I have used to spot the issue were :',
    bulletPoints: [
      'Churn rate',
      'Time spends in-app',
      '% of returning users',
    ],
  }, {
    type: TYPES.Section,
    heading: 'Testing the concept',
    content: 'After validating the idea by creating a simple prototype using FB bot the stakeholders decided to start first with the end result of what the business owner will get. The project had the called name: Seemba for the business owners customers.',
  }, {
    type: TYPES.Image,
    src: seembaViewerBot,
  }, {
    type: TYPES.Section,
    heading: 'Understanding',
    content: 'One question that we struggled with was: Why not to give the complete freedom to the users? Well, we’ve learned this lesson from Snapp and from business owners having a WYSIWYG type of UI builder is hard and a lot of onboarding of every feature is required. Not to mention that those people were coming online for the first time, they know what is a button, a list, and a text and input. But giving them the control of using those components was a nightmare. To give one example. A user has put a button which label is 20 words. People who are not tech savvy do not know the guidelines and how to use properly the components.',
  }, {
    type: TYPES.Text,
    content: 'Conducting research of that scale takes time and team coordination. I was leading the research process and the product prototyping phase. It took us 3 months to deliver the project.',
  }, {
    type: TYPES.Text,
    content: 'For this type of research and giving the fact we had some budget constraints I decided to directly hire a few people and in a period of a week, they to observe and interview business owners and their customers in place instead of me going to India. For this, I have prepared an onboarding guide on how to ask questions and gather insides from owners and made 2 workshops on the topic with the students.',
  }, {
    type: TYPES.FullWidthImage,
    src: seembaViewerUnderstanding,
  }, {
    type: TYPES.Section,
    heading: 'Next steps',
    content: 'The results were nicely recorded with videos, survey results and usability insights. Our audience for this sub-product was both the business owners and their customers and they were struggling with our product. Few of the pain points that had found after surveys, ready application analysis, and interviews were:',
    bulletPoints: [
      'Business owners couldn’t use their branding.',
      'Business owners were using only essential information about their business and product/services offerings.',
      'Customers were unable to find how to contact the business owners.',
      'Customers were having a hard time discovering the applications in the stores. If the business owner hasn’t told them that they had an app they wouldn’t discover it.',
    ], 
  }, {
    type: TYPES.Text,
    content: 'I saw the need for research also on the business customers since this product was aiming them. I’ve approached directly people and sent surveys to them. More than 140 people participated.',
  }, {
    type: TYPES.Image,
    src: seembaViewerPersonas,
  }, {
    type: TYPES.Section,
    heading: 'Research',
    content: 'After understanding and analyzing our user\'s pain points with the current product it was about time to continue with deciding in which direction we will go first: services or products. The 2 are different since they require a different set of features apart from the minimum required information mentioned above. For my research, I used google places, Facebook and government data. Where I was searching for:',
    bulletPoints: [
      'Easiest and fastest penetration.',
      'Minimum required features satisfying the user.',
    ], 
  }, {
    type: TYPES.Text,
    content: 'The services won and we would start building the product first around satisfying the service owners and then the business owners with goods. Why services first? Because:',
    bulletPoints: [
      'They require to go to a place.',
      'Can call the owner to reserve the service.',
      'Take a look at the service quality by visiting the owner\'s gallery.',
      'Can be implemented without much of a hassle and build on top of it.',
    ], 
  }, {
    type: TYPES.Text,
    content: 'This research also involved the website styling, trends, and branding criteria. All of those components would give me a clear indicator of what direction to go.',
  }, {
    type: TYPES.FullWidthImage,
    src: seembaViewerDetails,
  }, {
    type: TYPES.FullWidthImage,
    src: seembaViewerStats,
  }, {
    type: TYPES.Text,
    content: 'Something very interesting I found was the fact that businesses have a name with a length, not more than 31 characters which influenced the design afterward.',
  }, {
    type: TYPES.FullWidthImage,
    src: seembaViewerNames,
  }, {
    type: TYPES.Section,
    heading: 'Analysing the data',
    content: 'After I was done with the research we set down with the team and brainstormed on potential feature sets having in mind all the variables from above. We also explored some technical constraints.', 
  }, {
    type: TYPES.Image,
    src: seembaViewerBrainstorming,
  }, {
    type: TYPES.Section,
    heading: 'Creating a concept solution',
    content: 'Since we were in a market dominated by smartphone users a vision of the product was needed and understanding how the hardware of the phone can be used when possible on low-budget phones. More than 5 iterations were made using high fidelity paper prototypes before continuing the work. The prototypes were tested internally only. I\'ve used origami to create them.', 
  }, {
    type: TYPES.YouTube,
    id: '_HT9aA9RYJk',
  }, {
    type: TYPES.Section,
    heading: 'Information architecture',
    content: 'Presenting a concept like this is hard sometimes because when the engineer looks at it he sees all the hard work and pitfalls that can come up on the way. But in this situation, all went good, because this was the vision of where we wanted to go, not what will have from day one. After discussing the vision and being approved I jumped in creating the information architecture and user flows.', 
  }, {
    type: TYPES.Image,
    src: seembaViewerIA,
  }, {
    type: TYPES.Section,
    heading: 'Back to reality: Wireframing',
    content: 'When I had the architecture I started sketching, wireframing and finally stress testing the UI. On the wireframing I have iterated several times to achieve a minimalistic view with only the necessary information.', 
  }, {
    type: TYPES.FullWidthImage,
    src: seembaViewerWireframes,
  }, {
    type: TYPES.Section,
    heading: 'Final design',
    content: 'After several iterations, we\'ve seen that the following layout and style has the best performance. Benchmarked based on:', 
    bulletPoints: [
      'Scalable navigation.',
      'Intuitive usage from end users. Let\'s not forget that people are coming for the first time online',
      'Visually pleasant and unique to match the business initial branding.',
    ], 
  }, {
    type: TYPES.FullWidthImage,
    src: seembaViewerFinalUI,
  }, {
    type: TYPES.Section,
    heading: 'Testing the UI',
    content: 'Stress testing in this situation needed to give a clue how the UI can work with different sets of visuals, see the font in action and if the navigation will be visible and usable. Because we cannot predict what pictures the business owners will take, and having in mind that they have low-end devices I\'ve added an overlay and a blur so it can work in different scenarios.', 
  }, {
    type: TYPES.Text,
    content: 'Once this was finished I made a clickable prototype with invision and test it out with around 18 different users. Where there were 2 groups split on half: one half was users that already had a presence made with Snapp and the other half totally new ones.', 
  }, {
    type: TYPES.Image,
    src: seembaViewerTesting,
  }, {
    type: TYPES.Section,
    heading: 'Outcome',
    content: '340 KB payload for the website of the business owner. Because of this small payload, the website was also easy to cache on the user\'s device without taking up to much space, so it would also work in offline mode. More than 4M visitors on the business owner websites in total during the 1 year living period of the product. The navigation proved to be scalable since we\'ve added few more features to this product before Seemba closed doors. The reason why Seemba closed doors was because of a co-founder quarrel.', 
  },
],
};

export const SeembaProject = {
  id: 1,
  trigger: '986f2b6e-e271-4bf1-9c6a-0ee809026e27',
  name: 'Seemba - business ',
  headline: 'The first mobile web builder',
  shortDescription: 'Seemba for the business owner helps businesses accross India to create their online presence, distribute it everywhere in the web and manage their businesses only from their low end smartphones.',
  logo: null,
  metadata: {
    duration: '1_YEAR',
  },
  sections: [{
    type: TYPES.Image,
    src: historyParkHeading,
  }, {
    type: TYPES.Section,
    heading: 'The problem',
    content: 'Seemba was the mobile-only platform that allows users to create a seemingly easy online presence and distribute it all across the web. It helps business owners in India to create their presence with just a few taps. India is a mobile-only economy meaning that people are coming online for the first time through their smartphones. Out the main target was small & medium businesses. (In India small and medium have a different meaning. They differentiate on space that they are using since labor is cheap and sometimes on 2sqm there are 11 people working).',
  }, {
    type: TYPES.Text,
    content: 'Seemba was a product pivot from our old product called Snapp needed to present to users a totally new way of creating and managing their online presence.. Snapp was a similar product but was giving a different more complex way of people to create and manage their online presence using the WYSIWYG method. In comparison with Seemba, you could create your presence with 7 taps. was working in the company for nearly 2 years with 15 more people.',
  }, {
    type: TYPES.Section,
    heading: 'Snapp - the legacy',
    content: 'With the CEO we were the 2 people that started first working on Seemba. The whole project with the full team on board took 6 months and 5 more months tweaking and iterating on it. I was a UX designer & researcher.',
  }, {
    type: TYPES.Text,
    content: 'But before even thinking of pivoting I was given the task of analyzing, summarising all the problems and user data we had from Snapp. I’ve used all that we had: Analytics, customer interviews, business owner groups that we’ve got, support tickets, interviewing the support and sales team.',
  }, {
    type: TYPES.Text,
    content: 'By synthesizing almost 2 years of knowledge using personas, journeys, documents analyzing the pain points I’ve created a presentation with the insights and presented to the team.',
  }, {
    type: TYPES.YouTube,
    id: 'f6qdAwENFRk',
  }, {
    type: TYPES.Section,
    heading: 'Issues',
    content: 'Few of the major issues were:',
    bulletPoints: [
      'We were having a very big churn rate.',
      'Low engagement with the product. User lifespan was around 2 mins. And with users that need to spend more than 20 min in setting up their online presence something wasn’t quite right.',
      'Returning users % was around 40% and decreasing with time.',
      'Seeing on the front line that applications quality wasn’t that good. Missing information, abandon web apps, web apps that are created once and left after.',
      'People having a hard time finding their applications in the play store and also in one more store called aptoide (secondary application store). If they find it they had troubles with their phone memory.',
    ],
  }, {
    type: TYPES.FullWidthImage,
    src: historyParkHeading,
  }, {
    type: TYPES.Section,
    heading: 'Proof of concept',
    content: 'Having the users problems in mind the three of us: the CEO, one of our developers we have created a facebook bot prototype to test out a few new concepts of creating an online presence. Back than bots were a hit so I’ve decided to give it a shot. By analyzing user businesses in this location of the world from the already created applications I’ve seen that people were adding the same type of information which I’ve transferred it to questions used by the bot.',
  }, {
    type: TYPES.FullWidthImage,
    src: historyParkHeading,
  }, {
    type: TYPES.Section,
    heading: 'Analytics & what was learned',
    content: 'I’ve used previously generated and found channels to distribute the bot. Using FB groups with business owners and using our existing users. The online presence was created manually by us, bot for a prototype to prove the concept this was a satisfying result. For 2 weeks we were running the test and the results were:',
  }, {
    type: TYPES.FullWidthImage,
    src: historyParkHeading,
  }, {
    type: TYPES.Section,
    heading: 'Analyze',
    content: 'Having all the data at hand also the newest data from our FB bot experiment I’ve created a summary presentation and presented to the whole team. After that, I’ve started working on the product its self. One of the hardest parts was the new dashboard for Seemba and what information should we visualize. I ran a feature workshop where we laid and measure the feature importance for the new product.',
  }, {
    type: TYPES.FullWidthImage,
    src: historyParkHeading,
  }, {
    type: TYPES.Section,
    heading: 'Architecture & flows',
    content: 'I started by creating an information architecture which can scale with ease. I’ve decided to use a card-based interface and one nesting for controlling the card information. That how every new feature will have a card. With a vision the dashboard to evolve in a combined UI with a chatbot.',
  }, {
    type: TYPES.FullWidthImage,
    src: historyParkHeading,
  }, {
    type: TYPES.Section,
    heading: 'Wireframing',
    content: 'Having the architecture in place I’ve started sketching and wireframing. I wanted to have some ideas followed bu wireframes so to test out the card-based UI.After I had the dashboard I ran into using the bot flow from the FB bot and create a form based step by step UI.',
  }, {
    type: TYPES.FullWidthImage,
    src: historyParkHeading,
  }, {
    type: TYPES.Section,
    heading: 'Testing, testing, testing',
    content: 'In Seemba tests were remotely using our user base or gathering participants from facebook groups after filling out a survey. I needed to be creative and found a way of using WhatsApp, lookback, invision, and hotjar.',
  }, {
    type: TYPES.Text,
    content: 'For testing Seemba, I’ve used Snapp users that are using the platform from several days and used our WhatsApp group with business owners. I’ve tested with 24 people. The results were pleasing:',
    bulletPoints: [
      '100% success rate, with no churn on the way.',
      'In less than a minute the user could create his web site.',
      'The dashboard information was enough for users to operate with and also understandable for them.',
      'The business owners were very happy also to see the end product, which is their website or aka the Viewer.',
    ],
  }, {
    type: TYPES.FullWidthImage,
    src: historyParkHeading,
  }, {
    type: TYPES.Section,
    heading: 'Wait? What just happened?',
    content: 'Having the whole product done, in the last few weeks an additional feature needed to be done. This was an amazing opportunity to test the architecture and how de-coupled the flow was. Since our stakeholders were in search of verified businesses as a metric to show to investors, the Indian government and also for other planned features to come in place we needed to set a business verification process. We had a partnership with the Indian government and we were participating in Bring India online global campaign where the goal was to bring real businesses online. So verification was a necessity.',
  }, {
    type: TYPES.Text,
    content: 'Verifying a business is a hard thing and can be done by asking for private information like VAT numbers, ID card or Bills. And sometimes you don’t have at hand these papers.',
  }, {
    type: TYPES.Text,
    content: 'I’ve done quick research on products in India that have in place this process and also researched if it is possible to automate this process without involving a person from our support team. The verification feature I’ve tested as a standalone one. The tests made me re-think the flow a bit and create new components for uploading documents. The verification feature also required to create an internal dashboard so our support could verify the businesses since this couldn’t be done automatically.',
  }, {
    type: TYPES.FullWidthImage,
    src: historyParkHeading,
  }, {
    type: TYPES.FullWidthImage,
    src: historyParkHeading,
  }, {
    type: TYPES.Section,
    heading: 'UI and Branding',
    content: 'We wanted to rebrand the product and not use our previous brand Snapp because it was also confused with Snapchat. So with the CEO, we’ve come up with the name Seemba. It has the letters SMB meaning: Small, medium Businesses which was exactly our target. On Swahili Simba means power. For the logo, I’ve used a lions head surrounded by a location pin as a logo, showing the location-based empowerment. The blue was kept from Snapp but made darker to enhance the lion power.',
  }, {
    type: TYPES.Text,
    content: 'For our main font, I’ve picked up Lato for English and Hindi English with a fall back option to Noto for support Hindi, Marathi, and other Indian jargons, which only Noto font supports.',
  }, {
    type: TYPES.YouTube,
    id: 'f6qdAwENFRk',
  }, {
    type: TYPES.Section,
    heading: 'Continuous improvement',
    content: 'There was also a website done for the product chatbot based. And 1 month before the company closed the UI changed to a mix of conversational and regular UI. Upon which we had several production iterations for improving the script.',
  }, {
    type: TYPES.YouTube,
    id: 'f6qdAwENFRk',
  }, {
    type: TYPES.Section,
    heading: 'Outcome & lessons',
    bulletPoints: [
      'Seemba raised additional 100K from the previous cornerstone investors. It was only 20MB in the play store and for a half a year was downloaded 500K times.',
      'User complains became requests and suggestions for new features.',
      'End product was only 340 KB in payload working also offline.',
      'We were in close competition with Google and we were winning it.',
      'Product flow that afterward copied by Wix and they have created the Wix ADI (artificial design intelligence). How do I know? Well, one of the startup cofounders after the quarrel lend a job in Wix as a VP.',
    ],
    content: 'During my journey in Seemba I’ve learned a lot on pivoting, building products for the masses and also gave me the spark in the world of conversational UI. The last month before shutting doors I’ve worked on improving the dashboard by adding a chatbot instead of the card UI. But as a startup, the future ahead was unclear and unsettled. And as in some startups cofounders do not agree with each other and have different objectives in mind. This was the beginning of another exciting journey of continuing with one of the owners and searching for an idea and building a new product, this was the product, called Panto.',
  }, {
    type: TYPES.FullWidthImage,
    src: historyParkHeading,
  },
],
};

export const SeembaForSales = {
  id: 2,
  trigger: '986f2b6e-e271-4bf1-9c6a-0ee809026e27',
  name: 'Seemba - affiliates',
  headline: 'Helping ground sales coordination',
  shortDescription: 'Seeing that a problem is to manage our on ground sales we came up with a solution to help coordinate on ground teams and track their results.',
  logo: null,
  metadata: {
    duration: '2_MONTHS',
  },
  sections: [{
    type: TYPES.Image,
    src: seembaAffiliateCover,
  }, {
    type: TYPES.Section,
    heading: 'The problem',
    content: 'After launching Seemba we were in search of penetrating the Indian market offline. One of our partners called Sakal offered to us more than 600 sales interns that can do a field sale by offering, onboarding and creating the online presence of the business owners in specific districts, starting from the largest ones Maharastra, New Delphi. The salespeople will go from the business door to business door empowering them.  All carrying a smartphone with them we saw a problem of coordination, tracking, and monitoring the field sales.',
  }, {
    type: TYPES.Text,
    content: 'I was working with the VP of Sales and one of our developers.',
  }, {
    type: TYPES.Image,
    src: seembaAffiliateTeam,
  }, {
    type: TYPES.Text,
    content: 'First and foremost I needed to get familiar with the field sales process so I’ve prepared myself for an interview with the VP.',
  }, {
    type: TYPES.Image,
    src: SeembaAffiliateInterviews,
  }, {
    type: TYPES.Text,
    content: 'After understanding the project objective I have created a plan and shared it with the VP.', 
    bulletPoints: [
      'Research and find software that solves the problems to sales interns.',
      'Interview 2-3 people from a company called Southwestern Advantage. This company was doing door to door sales in the US so they could throw some light on how they were solving the issues within the process.',
      'Ideate, Wireframe.',
      'Create a prototype.',
      'Test internally and with some of the sales interns.',
    ], 
  }, {
    type: TYPES.Text,
    content: 'Based on my preliminary research I found very nicely done solutions from which I’ve extracted the functionality and adapted to our use case. We wanted our own solution because of the data that we would have. From the research I discovered some key features:', 
    bulletPoints: [
      'Location-based tracking and mapping the road.',
      'Pointing out the visited location of the salesperson.',
      'Adding neighborhoods in which the salesperson to operate in.',
    ], 
  }, {
    type: TYPES.Text,
    content: 'After knowing some key components I wanted to understand a bit more on the process from field sales. So I’ve conducted a gathered interview of 3 people from SouthWestern Advantage plus me and the VP all in one session so to map out the flow and understand the tools and how they were using them. By creating a journey map of the sales representatives of SW I have uncovered hidden obstacles that no one of us has thought of them. To name a few:', 
    bulletPoints: [
      'The neighborhood is added by the team manager and from the upper management.',
      'Sometimes no one from the customers is at home. So the sales rep is adding him in the list to come after a few days.',
      'Taking notes.',
      'Compete between each other and see the statuses of everyone. But in SW they have rewards and a very settled gamification model that motivates people.',
    ], 
  }, {
    type: TYPES.Image,
    src: SeembaAffiliatePersonas,
  }, {
    type: TYPES.Section,
    heading: 'Understanding the user',
    content: 'Before starting I needed to consider our sales persona, the person that will use the application, the environment he has, the context in which he will use it and how will use it. I had answers to those questions from my past observations and from the stakeholder interviews because they have met the Indian sales team which directly be managed from our management. I wanted to quickly add the pieces so I will be also aware with the person in mind.',
  }, {
    type: TYPES.Image,
    src: seembaAffiliatePersona,
  }, {
    type: TYPES.Section,
    heading: 'Figuring out the solution',
    content: 'I was ready to start with the design. The whole product took me 4 weeks in total to build. Having in mind what use cases the app needed to cover I’ve started by ideating and creating the user flows for the application. I usually do the information architecture before the sketchings but in this situation, I just reversed it because as a deliverable it was for me and the dev team. I had a clear understanding of what to do after the research. The architecture was helping the developers to see the product from a birds view and understand the connections between the views and after completing a task where the next view takes you.',
  }, {
    type: TYPES.Image,
    src: seembaAffiliateFlow,
  }, {
    type: TYPES.Section,
    heading: 'Wireframing',
    content: 'A bit of testing was needed to understand if Sakal’s sale representatives have any issues in using the app and understanding it. In this situation since features and flows are taken from already existing apps and combined in our solution but with some usability fixes we didn’t have the necessity of extensive testing. The testing included: Internally sales team and 4 people from the sales of Sakal that would operate on the side in India. I used invision and lookback.io to record a video and I was speaking on WhatsApp where I was giving the tasks to the users.',
  }, {
    type: TYPES.FullWidthImage,
    src: seembaAffiliateWireframes,
  }, {
    type: TYPES.Section,
    heading: 'Design',
    content: 'A bit of testing was needed to understand if Sakal’s sale representatives have any issues in using the app and understanding it. In this situation since features and flows are taken from already existing apps and combined in our solution but with some usability fixes we didn’t have the necessity of extensive testing. The testing included: Internally sales team and 4 people from the sales of Sakal that would operate on the side in India. I used invision and lookback.io to record a video and I was speaking on WhatsApp where I was giving the tasks to the users.',
  }, {
    type: TYPES.FullWidthImage,
    src: seembaAffiliateUI,
  }, {
    type: TYPES.Section,
    heading: 'Outome',
    content: 'The application was used total one month only from sales interns. It easily allowed the Seemba internal sales team to monitor the performance of the interns and to see at the end that more than 100K businesses were brought online. One thing I improved tho was the fact that I added a survey inquiry for businesses that wouldn’t be able to come online.',
  }, {
    type: TYPES.Image,
    src: seembaAffiliateSuccess,
  }, {
    type: TYPES.Review,
    headline: 'Alberto Iore - VP of sales',
    companyName: 'Seemba',
    content: 'I had the pleasure to work with Stoyan for almost two years. Stoyan comes across as a very professional and motivated designer. I was particularly amazed by Stoyan\'s deep commitment to beautiful user experience and the time dedicated to the learning of the latest design approaches. Stoyan was able to provide key suggestions and insights based on deep data analysis on users behaviors and interactions with the product. Furthermore, Stoyan is a fantastic team-member always able to drive team\'s motivation, commitment and positive vibes at any time of the day. I\'d highly recommend Stoyan to any company looking to hire an experienced designer able to provide solid understanding of user experience and of the latest trends in web and mobile design',
    representative: 'ALBERTO_IORE',
    representativeRole: 'VP_SALES',
    avatar: seembaAffiliateAlberto,
  },
],
};


export const Panto = {
  id: 3,
  trigger: '986f2b6e-e271-4bf1-9c6a-0ee809026e27',
  name: 'Panto',
  headline: 'Information on the tip of your fingers',
  shortDescription: 'Panto is the assistant your company would like to have. It saves time and money by allowing deskless employees to get the proper answer to their question',
  logo: null,
  metadata: {
    duration: '6_MONTHS',
  },
  sections: [{
    type: TYPES.Image,
    src: historyParkHeading,
  }, {
    type: TYPES.Section,
    heading: 'Problem',
    content: 'Panto is a tool that gives the possibility to deskless employees instantly to retrieve company information or get an answer to a question in seconds. Combining cutting edge technologies to disrupt the way companies collect and use their knowledge. 80% of the global workforce is deskless meaning that companies need to take care also of their deskless employees. So far companies are using different platforms even paper documents, thus making the information retrieving process a bit hard and time-consuming. Not anymore, Panto gives this information on the tip of your fingers. With the main target are healthcare, real estate/construction, transportation/logistics. Combined, those sectors form more than 600M people working there. Making an opportunity for information-centered businesses.',
  }, {
    type: TYPES.Text,
    content: 'I was hired to work on Panto leading the product design process. The task was to design a central knowledge-based system that can retrieve information by using a chatbot from their smartphones.',
  }, {
    type: TYPES.FullWidthImage,
    src: historyParkHeading,
  }, {
    type: TYPES.Text,
    content: 'Working remotely relies on heavy communication especially in early stages so we were syncing and constantly communicating on a daily basis. We were also traveling once a month for working at one place all of us. The best thing was that we worked together in the previous startUp Seemba.',
  }, {
    type: TYPES.Section,
    heading: 'The plan',
    content: 'The plan was the following:',
  }, {
    type: TYPES.Image,
    src: historyParkHeading,
  }, {
    type: TYPES.Section,
    heading: 'Constraints & problems',
    content: 'During the process, a lot of the problems were solved on the go. Some of the constraints and problems were:',
    bulletPoints: [
      'Voice vs combined Conversational UI  - CI won because of the the complexity Voice would bring for the MVP',
      'Panto needed to be safe and secure for usage because it was operating with sensitive data.',
      'Based on the industry Panto operates in and the type of information people are used to share it and record it in a different way. So for the MVP, a specific, fast adoptable industry needed to be picked.',
      'Panto needed to be observed and someone to take care of the data migration especially for the MVP.',
      'The script of Panto needed to be with a very simple structure, easily maneuverable and scalable.',
      'Using the NLP and ML algorithms that dialogflow has (googles voice and natural chatbot platform creation), Panto needed to be taught from people. So, in the beginning, we decided to manually tackle this problem by improving: Response accuracy & Keyword Matching',
      'We wanted to use FB messenger as another platform but during out our technical research we saw that it is impossible due to security, privacy, and Facebook API to retrieve or help the user fill in a questionnaire.',
    ],
  }, {
    type: TYPES.Text,
    content: 'For building the MVP, it took us  6 months. In the end the deliverables were: ',
    bulletPoints: [
      'Slack bot.',
      'Email bot.',
      'Dashboard and bot.',
      'Learning strategy.',
      'Initial Branding.',
    ],
  }, {
    type: TYPES.Section,
    heading: 'Research',
    content: 'I did my own research to get familiar with similar indirect competitors and also with the industry and potential. This helped me create a list with a question that kicked off the first meeting which afterward led to a further discussion aligning our thoughts what we wanted to achieve.',
  }, {
    type: TYPES.Image,
    src: historyParkHeading,
  }, {
    type: TYPES.Text,
    content: 'In the very beginning the CEO, me and the developer split out to interview and observe as many people in the companies that I listed above as we could. In an early stage like what we have is important to combine the different skills and look at the problem from a different perspective. I prepared a set of questions, the script and the 3 of us discussed different scenarios we would like to observe.',
  }, {
    type: TYPES.Text,
    content: 'After the interviews, I led the insights workshop analyzing the results using affinity diagrams. During this process, proto-personas started to shape. I laid down the journey that a person was taking to retrieve needed information.',
  }, {
    type: TYPES.Image,
    src: historyParkHeading,
  }, {
    type: TYPES.Section,
    heading: 'Competitive analysis',
    content: 'During the discovery phase with the CEO, we prepared a list of competitors and I analyzed them. Competitive research also included in-depth feature analysis.',
  },  {
    type: TYPES.Image,
    src: historyParkHeading,
  }, {
    type: TYPES.Section,
    heading: 'Learnings',
    content: 'Uncovering that there is only one product in the market called askspoke.io and Uber where they were building their internal system we saw an opportunity to be first in market advantage, especially in our not tech-savvy industries. I also wanted to understand askspoke in depth so additional attention was added to it. Summarising the findings in a presentation which gave us the ability to sit down and laid out the functionalities.',
  }, {
    type: TYPES.Image,
    src: historyParkHeading,
  }, {
    type: TYPES.Section,
    heading: 'Scripts & Interaction models',
    content: 'The first big thing that I started working on was the chatbots for the different platforms, the scripts, and the interaction points. Based on which I’ve seen that there were different types of questions. For example, Bard could ask an informative question like What is the wifi password or ask Panto for a vacation, where Panto needs to ask a series of questions before sending up the request to Bard’s manager for approval of his vacation.',
  }, {
    type: TYPES.Image,
    src: historyParkHeading,
  }, {
    type: TYPES.Text,
    content: 'One problem tho it appeared during the process was the fact of internationalization but the stakeholders decided to not solve it, for now, since we would start to operate in English spoken markets first. After presenting the interaction models and types of questions the stakeholders decided for the MVP to go without the series question scenario.',
  }, {
    type: TYPES.Text,
    content: 'A need was for slightly different scripts. Since slack and email, for example, are invoked and interact with in different ways. Another significant difference is that in email, Panto can get tagged with @ and also multiple people can talk with him in the thread. Similar to slack tho.',
  }, {
    type: TYPES.Text,
    content: 'The first big thing that I started working on was the chatbots for the different platforms, the scripts, and the interaction points. Based on which I’ve seen that there were different types of questions. For example, Bard could ask an informative question like What is the wifi password or ask Panto for a vacation, where Panto needs to ask a series of questions before sending up the request to Bard’s manager for approval of his vacation.',
  }, {
    type: TYPES.Image,
    src: historyParkHeading,
  }, {
    type: TYPES.Text,
    content: 'I tested the script internally by creating a quick prototype using dialogflow and read out loud the script. What I found was that a question could also have sub use cases. Eg. Give me the WIFI password on the 5th floor in 250A room. This also changed the script a bit in terms of handling a question and adding an additional step where Panto asks an additional contextual question.',
  }, {
    type: TYPES.Image,
    src: historyParkHeading,
  }, {
    type: TYPES.Text,
    content: 'After having all the script done both in dialogflow and google docs, it was time to test it at least with people outside of the company but time was of the essence so the only test that was performed with the Hipocrate Holding CEO and 3 different employees (1 field, 1 manager and 1 desk).',
  }, {
    type: TYPES.Image,
    src: historyParkHeading,
  }, {
    type: TYPES.Text,
    content: 'It was a relief when the script was done for the platforms and was working with the most common company scenarios. So now the dashboard creation part came. I’ve started by creating the architecture.',
  }, {
    type: TYPES.Image,
    src: historyParkHeading,
  }, {
    type: TYPES.Section,
    heading: 'Sketches & Wireframes',
    content: 'Sketching and wireframing of the dashboard was done in the end to give a shape to our new bot.',
  }, {
    type: TYPES.Image,
    src: historyParkHeading,
  }, {
    type: TYPES.Image,
    src: historyParkHeading, // Here a video could be added
  }, {
    type: TYPES.Section,
    heading: 'Final Design',
    content: 'In the end I did a clickable prototype and used a testing session scenario where the user was asking the most common questions that he could think of in the context of the company.',
  }, {
    type: TYPES.Image,
    src: historyParkHeading, 
  }, {
    type: TYPES.Section,
    heading: 'Branding',
    content: 'Everything was great but a bit of color needed to be added and a trustworthy one, which also gives the feeling that behind the product a corporation stands. So I picked up a royal blue and a P tech letter for the logo. The blue was recently changed to a lighter blue. A funny fact is that I thought this could happen because Vito loves the sea and also we were using the same blue color in Snapp.',
  }, {
    type: TYPES.Section,
    heading: 'Outcomes',
    content: 'The MVP was launched and it was a success. Till my time in the company, Hippocrates Holding started to adapt to the product. I constantly keep in touch with Vito, the CEO so from his words I know that the company took an investment, expanded also with a google sheet extension so Panto can learn from there. So far I know that the voice is not ready yet and that they haven’t started working on the internationalization.',
  }, {
    type: TYPES.Text,
    content: 'In terms of the project, I really enjoyed the journey. I learned on the go how an email bot can be created. Panto also inspired me and guided my decision on my personal project which is my portfolio web-bot. Panto also inspired me to deep in the world of voice UI and make a workshop on:” Creating VUI from scratch” here in Sofia on UXiFY.',
  }, {
    type: TYPES.Review,
    headline: 'Vito Margiotta - Panto',
    companyName: 'Panto',
    content: 'Working with Stoyan was just an awesome experience. He invested time to learn about out wants and need , he also took time to learn everything needed fo the project Historical Park so he could make the best website for it He was honest and transparent about the process and kept us involved all the time. It was up to Stoyan to really translate everything we talked about in to the website design and to find the best one for this big project.. The end result was just awesome, he did what we had as an idea and done it at the best way. Looking forward to work with Stoyan again.',
    representative: 'VITO_MARGIOTTA',
    representativeRole: 'CEO',
    avatar: historyParkReviewAuthorAvatar,
  }, 
],
};

export const MotelNow = {
  id: 4,
  trigger: '986f2b6e-e271-4bf1-9c6a-0ee809026e27',
  name: 'MotelNow',
  headline: 'Walking on the road of love',
  shortDescription: 'MotelNow connects people that want to book instantly for the same day a motel room. Latin America is famous with it\'s love tourism but it is hard to discover great Motels when you are there',
  logo: null,
  metadata: {
    duration: '1_MONTH',
  },
  sections: [{
    type: TYPES.Image,
    src: motelNowCover,
  }, {
    type: TYPES.Section,
    heading: 'Overview',
    content: 'MotelNow is the gateway between people and Motels in Latin America. It helps people to discover and reserve an amazing thematic motel room on the go by choosing the number of staying hours they want and the room and this happens on the same day of the reservation. Latin America is known for sex tourism, but this wasn’t our target. Our target was people that want to have sex in a Motel or couples who want to experience something new in a thematic room. ',
  }, {
    type: TYPES.Text,
    content: '​MotelNow wanted to give the possibility of their users to make reservations on the web without the struggle of downloading an app and in the meantime increase discoverability of their service. They have had native apps for the 2 platforms iOS and Android and also an online booking system, but the booking system was only used to showcase the idea to the Motel clients.',
  }, {
    type: TYPES.Section,
    heading: 'The Problem',
    content: 'For me, this was an interesting challenge with which I haven’t worked before in the industry of booking, intimacy, and romance. They reached me to design their online booking system and help the stakeholders with the research process of finding the right user group.',
  }, {
    type: TYPES.Text,
    content: '​I was leading the design process and working remotely, thus we needed to align strictly our collaboration and timing, so we decided to have daily sync-ups and weekly status updates.',
  }, {
    type: TYPES.Image,
    src: motelNowTeam,
  }, {
    type: TYPES.Section,
    heading: 'Scope & constraints',
    content: 'I had a very tight deadline since MN (MotelNow) was in negotiating an investment in Colombia and also the budget was very tight. I decided to do the research process as an ongoing task during and after the launch of the platform. This type of research process is possible when you are the only player in the market and people need to use the product. The first part of the project is needed to be done in 4 weeks.',
  }, {
    type: TYPES.Text,
    content: '​​Another issue that we encounter was during the customer interviews and usability testing since people know very little English and me - Spanish. We solved this issue by me preparing all the necessary artifacts for the interviews and with one of the founders (who is available on a certain day) to perform 1:1:1 (me : one of the founders: the user) customer interviews. Where I was onboarding and guiding the founder and he was asking the questions.',
  }, {
    type: TYPES.Image,
    src: motelNowProcess,
  }, {
    type: TYPES.Section,
    heading: 'Week #1: Understanding  & empathise',
    content: 'As every startup MotelNow is also in a dynamic phase struggling with scale. Things were a bit chaotic. However, I love to bring order in chaos. A challenge was to take the brief and clear it. First, I got familiar with their product so I could have questions for them and to see their product and service. After that I did an interview with the stakeholders to understand the current state of the product, what we want to achieve, where do they stand in understanding their users and what they want from the new product to solve.',
  }, {
    type: TYPES.Text,
    content: '​​We cleared out the brief, discussed the inconsistency in the application and how we can standardize them by creating a UI kit for web and adapt it for both iOS and Android platforms. We also set KPI’s of the project. To mention a few:',
    bulletPoints: [
      'Increasing the monthly traffic of people.',
      'Reduce the churn rate of users.',
    ],
  }, {
    type: TYPES.Text,
    content: '​​After that, I listed out some hypothesis with what I struggled and jumped into google analytics to check out the behavior flow there.',
  }, {
    type: TYPES.Image,
    src: motelNowUnderstanding,
  }, {
    type: TYPES.Image,
    src: motelNowDiagram,
  }, {
    type: TYPES.Section,
    heading: 'The personas',
    content: 'Given the fact that this product was on the market since 2017, the stakeholders had a good amount of information on their users, both from their understanding and from the gathered requests they had in their internal dashboard.  I led a second remote workshop in which we summarised the user information, laid out the problems and hypothesis and the plan on what to do. We ended up with 3 main personas. The 3 types are:',
  }, {
    type: TYPES.Image,
    src: motelNowPersonas,
  }, {
    type: TYPES.Section,
    heading: 'Empathising with the users & competitive analysis',
    content: 'I prepared a document with questions for user interviews and also some tasks and scenarios to do a guerilla usability study on their applications. We used their internal dashboard for the recruiting process and sent e-mails from the CEO’s name to the users. The usability study and the interviews were combined and it was with the real product and we used loockback.io to record and further analyze the findings.',
  }, {
    type: TYPES.Text,
    content: '​​After that, we analyzed the foundings. One of the co-founders was involved since the interviews were in Spanish.',
  }, {
    type: TYPES.Text,
    content: '​​Studying competitors is a must in my process and in this case, all that was to see indirect competitors in Japan and Korea and also reservation flows of commonly used platforms like airbnb and booking.com. I wanted to compare how the other similar services are tackling the issues with the instant reservation. Among the direct business model competitors, but not in the same market, were Dayuse and HotelTonigh.',
  }, {
    type: TYPES.Image,
    src: motelNowCompetitive,
  }, {
    type: TYPES.Image,
    src: motelNowFeatures,
  },  {
    type: TYPES.Section,
    heading: 'Week #2: Define',
    content: 'As illustrated I documented few users flows on which I had to build the different use cases for the web app and an architecture that can easily scale up with the next features in line.',
  }, {
    type: TYPES.FullWidthImage,
    src: motelNowIA,
  }, {
    type: TYPES.Section,
    heading: 'Week #3: Sketching, wireframing, prototyping',
    content: 'My sketches were a combination of the first version of the platform and what to add next in it. That’s how I could test the architecture and see its scale abilities. With the MN team, we have a design critique session using a paper prototype.',
  }, {
    type: TYPES.Text,
    content: '​​After everything was done I continued with the wireframes and the final UI. During the visual design, similar patterns from other platforms and apps that the users used with were taken into consideration.',
  }, {
    type: TYPES.Text,
    content: '​​Discovering an opportunity from the initial interviews with the stakeholders I’ve developed quickly button variations and presented the Idea of MotelNow reaching the Motels and ask for a partnership where the motel redirects clients to MN where the client can book the room.',
  }, {
    type: TYPES.Image,
    src: motelNowExample,
  }, {
    type: TYPES.Text,
    heading: 'Wireframes',
  }, {
    type: TYPES.Image,
    src: motelNowWireframes,
  }, {
    type: TYPES.Text,
    heading: 'Final product',
  }, {
    type: TYPES.Section,
    heading: 'Week #4: Learning & Final UI',
    content: 'We finished by testing the visual prototype in invision and maze.design. Amazing pair which allowed us to do it remotely. Again with the CEO we translated the tasks and the scenarios to Spanish and test it out. Some refinements were done after the testings with the reservation waiting for screen and the copywriting was changed. Here is the final product.',
  }, {
    type: TYPES.YouTube,
    id: '5GJ_I_rM83M',
  }, {
    type: TYPES.Section,
    heading: 'Outcomes & next steps',
    content: 'In the end, MotelNow integrated a design approach into their working culture which was a success for me. For me, keeping close contact with startups at this stage is important due to our relations and the fact that we will continue our work together. That’s why I’m in constant sync with the project. And an investment is coming to town soon, so we are ready for enhancing the MotelNow. Our next steps are to continue with a deep understanding of the customers,  create a unified design system and enhance the web platform by adding necessary features.',
  }, {
    type: TYPES.Text,
    content: '​​MotelNow are currently developing the MVP, but their applications can be found in play store and appstore. ',
  }, {
    type: TYPES.Review,
    headline: 'Jose Hurtado - client',
    companyName: 'MotelNow',
    content: 'While working together on MotelNow, Stoyan constantly showed that he is a team player and regularly provided professional advises. His great soft skills help him to understand technical requirements and user needs by learning on the go in a way that he produces an outstanding solution with excellent design and user experience.',
    representative: 'JOSE_HURTADO',
    representativeRole: 'CEO',
    avatar: motelNowReviewAuthorAvatar,
  },

  ],
};

export const Hatchery1 = {
  id: 5,
  trigger: '986f2b6e-e271-4bf1-9c6a-0ee809026e27',
  name: 'Hatchery 1',
  headline: 'Automating portfolio management in the crypto world',
  shortDescription: 'Trading and portfolio management changed after 2014 after cryptocurrencies came on the stage for the mainstream customer. So a different way needed to be provided to those people of maintaining their investment portfolios.',
  logo: null,
  metadata: {
    duration: '2_MONTHS',
  },
  sections: [],
};

export const MySite = {
  id: 6,
  trigger: '986f2b6e-e271-4bf1-9c6a-0ee809026e27',
  name: 'svstoyanov.com',
  headline: '',
  shortDescription: 'My passion for conversational and voice UI\'s came after working in Snapp & Seemba and afterwords in Panto. This was the trigger of building from groud up this web app which wouldn\'t happened without the support of Veselin Dimitrov.',
  logo: null,
  metadata: {
    duration: '',
  },
  sections: [],
};

export const HistoryParkProject = {
  id: 7,
  trigger: '986f2b6e-e271-4bf1-9c6a-0ee809026e27',
  name: 'History Park',
  headline: 'History Park - Its all about history',
  shortDescription: 'History park is one of the biggest interactive parks that gives the opportunity to people to interact with history. My job was creating the online presence of the park.',
  logo: historyParkLogo,
  metadata: {
    duration: '4_MONTH',
  },
  sections: [{
    type: TYPES.Image,
    src: historyParkHeading,
  }, {
    type: TYPES.YouTube,
    id: 'f6qdAwENFRk',
  }, {
    type: TYPES.Text,
    content: 'Characters that have had created the big part of the European History. Well guess what Bulgaria takes role here in on Balkans with it nation which is several thousand years old. This is History park, it brings Bulgarian and partial Roman history by presenting it in a interactive way and taking you centuries and decades ago. People in the park will be able to experience this time travel, ride horses and shoot with a bow while riding, eat ancient kitchen, leave like the old days, even fight on the arena.',
  }, {
    type: TYPES.Section,
    heading: 'Problem',
    content: 'Imagine Disney Land but instead of the cartoon characters real ones. Characters that have had created the big part of the European History.',
    bulletPoints: [
      'Imagine Disney Land but instead of the cartoon characters real ones. Characters that have had created the big part of the European History.',
      'Imagine Disney Land but instead of the cartoon characters real ones. Characters that have had created the big part of the European History.',
    ],
  }, {
    type: TYPES.FullWidthImage,
    src: historyParkFullImage,
  }, {
    type: TYPES.Review,
    headline: 'Georgi Detelinov - client',
    companyName: 'Together Bulgaria',
    content: 'Working with Stoyan was just an awesome experience. He invested time to learn about out wants and need , he also took time to learn everything needed fo the project Historical Park so he could make the best website for it He was honest and transparent about the process and kept us involved all the time. It was up to Stoyan to really translate everything we talked about in to the website design and to find the best one for this big project.. The end result was just awesome, he did what we had as an idea and done it at the best way. Looking forward to work with Stoyan again.',
    representative: 'GEORGI_DETELINOV',
    representativeRole: 'FINANCE_CONSULTANT',
    avatar: historyParkReviewAuthorAvatar,
  }, {
    type: TYPES.Text,
    content: 'Characters that have had created the big part of the European History. Well guess what Bulgaria takes role here in on Balkans with it nation which is several thousand years old. This is History park, it brings Bulgarian and partial Roman history by presenting it in a interactive way and taking you centuries and decades ago. People in the park will be able to experience this time travel, ride horses and shoot with a bow while riding, eat ancient kitchen, leave like the old days, even fight on the arena.',
  }, {
    type: TYPES.FullWidthImage,
    src: historyParkFullImage,
  }],
};

export default [
  SeembaForEndUsersProject,
  SeembaProject,
  SeembaForSales,
  Panto,
  MotelNow,
  Hatchery1,
  MySite,
  HistoryParkProject,
];
