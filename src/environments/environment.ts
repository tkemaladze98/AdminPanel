// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseCollections: {
    user: 'user-collection',
    hotels: 'hotels-collection',
    sales: 'sales-collection',
  },
  firebaseConfig: {
    apiKey: 'AIzaSyCBQoMxkXXm8C3ygFt6wbIgFKDYyz3Jc18',
    authDomain: 'bookinghotels-e7754.firebaseapp.com',
    databaseURL:
      'https://bookinghotels-e7754-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'bookinghotels-e7754',
    storageBucket: 'bookinghotels-e7754.appspot.com',
    messagingSenderId: '575600734199',
    appId: '1:575600734199:web:c7d2ff9dbbeae41b9488f2',
    measurementId: 'G-0QD58V2GDP',
  },
};
