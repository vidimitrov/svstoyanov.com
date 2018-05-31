const JSON = require('circular-json');

/* istanbul ignore next */
const getData = ({cacheName, cache, firstStep, steps}, callback) => {
  const currentStep = firstStep;
  const renderedSteps = [steps[currentStep.id]];
  const previousSteps = [steps[currentStep.id]];
  const previousStep = {};

  if (cache && localStorage.getItem(cacheName)) {
    const data = JSON.parse(localStorage.getItem(cacheName));
    const lastStep = data.renderedSteps[data.renderedSteps.length - 1];

    if (lastStep && lastStep.end) {
      localStorage.removeItem(cacheName);
    } else {
      for (let i = 0; i < data.renderedSteps.length; i += 1) {
        const renderedStep = data.renderedSteps[i];
        // remove delay of cached rendered steps
        data.renderedSteps[i].delay = 0;
        // flag used to avoid call triggerNextStep in cached rendered steps
        data.renderedSteps[i].rendered = true;

        // an error is thrown when render a component from localStorage.
        // So it's necessary reassing the component
        if (renderedStep.component) {
          const id = renderedStep.id;
          data.renderedSteps[i].component = steps[id].component;
        }
      }

      const {trigger, end, options} = data.currentStep;
      const id = data.currentStep.id;

      if (options) {
        delete data.currentStep.rendered;
      }

      // add trigger function to current step
      if (!trigger && !end) {
        if (options) {
          for (let i = 0; i < options.length; i += 1) {
            data.currentStep.options[i].trigger = steps[id].options[i].trigger;
          }
        } else {
          data.currentStep.trigger = steps[id].trigger;
        }
      }

      // execute callback function to enable input if last step is
      // waiting user type
      if (data.currentStep.user) {
        callback();
      }

      return data;
    }
  }

  return {
    currentStep,
    previousStep,
    previousSteps,
    renderedSteps,
  };
};

/* istanbul ignore next */
const setData = (cacheName, data) => {
  localStorage.setItem(cacheName, JSON.stringify(data));
};

export {
  getData,
  setData,
};


// Integrating indexedDB

// const JSON = require('circular-json');
// const DB_NAME = 'rsc-cache';
// const OBJECT_STORE_NAME = 'cache';
// // This works on all devices/browsers, and uses IndexedDBShim as a final fallback
// let indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;

// /* istanbul ignore next */
// const getData = ({cacheName, cache, firstStep, steps}, callback) => {
//   // Open (or create) the database
//   let open = indexedDB.open(DB_NAME, 1);

//   // Create the schema
//   open.onupgradeneeded = function() {
//     let db = open.result;
//     db.createObjectStore(OBJECT_STORE_NAME, {keyPath: 'id'});
//   };

//   open.onsuccess = function() {
//     // Start a new transaction
//     let db = open.result;
//     let tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
//     let store = tx.objectStore(OBJECT_STORE_NAME);

//     // Query the data
//     let getCache = store.get(1);

//     getCache.onsuccess = function() {
//       const cache = getCache.result.cache;
//       const currentStep = firstStep;
//       const renderedSteps = [steps[currentStep.id]];
//       const previousSteps = [steps[currentStep.id]];
//       const previousStep = {};

//       if (cache) {
//         const data = JSON.parse(cache);
//         const lastStep = data.renderedSteps[data.renderedSteps.length - 1];

//         if (lastStep && lastStep.end) {
//           store.delete(1);
//         } else {
//           for (let i = 0; i < data.renderedSteps.length; i += 1) {
//             const renderedStep = data.renderedSteps[i];
//             // remove delay of cached rendered steps
//             data.renderedSteps[i].delay = 0;
//             // flag used to avoid call triggerNextStep in cached rendered steps
//             data.renderedSteps[i].rendered = true;

//             // an error is thrown when render a component from localStorage.
//             // So it's necessary reassing the component
//             if (renderedStep.component) {
//               const id = renderedStep.id;
//               data.renderedSteps[i].component = steps[id].component;
//             }
//           }

//           const {trigger, end, options} = data.currentStep;
//           const id = data.currentStep.id;

//           if (options) {
//             delete data.currentStep.rendered;
//           }

//           // add trigger function to current step
//           if (!trigger && !end) {
//             if (options) {
//               for (let i = 0; i < options.length; i += 1) {
//                 data.currentStep.options[i].trigger = steps[id].options[i].trigger;
//               }
//             } else {
//               data.currentStep.trigger = steps[id].trigger;
//             }
//           }

//           // execute callback function to enable input if last step is
//           // waiting user type
//           if (data.currentStep.user) {
//             callback();
//           }

//           return data;
//         }
//       }

//       return {
//         currentStep,
//         previousStep,
//         previousSteps,
//         renderedSteps,
//       };
//     };

//     // Close the db when the transaction is done
//     tx.oncomplete = function() {
//       db.close();
//     };
//   };
// };

// /* istanbul ignore next */
// const setData = (cacheName, data) => {
//   // Open (or create) the database
//   let open = indexedDB.open(DB_NAME, 1);

//   // Create the schema
//   open.onupgradeneeded = function() {
//     let db = open.result;
//     db.createObjectStore(OBJECT_STORE_NAME, {keyPath: 'id'});
//   };

//   open.onsuccess = function() {
//     // Start a new transaction
//     let db = open.result;
//     let tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
//     let store = tx.objectStore(OBJECT_STORE_NAME);

//     // Add some data
//     store.put({id: 1, cache: JSON.stringify(data)});

//     // Close the db when the transaction is done
//     tx.oncomplete = function() {
//       db.close();
//     };
//   };
// };

// export {
//   getData,
//   setData,
// };
