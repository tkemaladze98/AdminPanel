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
    apiKey: 'AIzaSyAmwgxNT9sJz1D4S-BXpG7KHoVRjFZa9CM',
    authDomain: 'booking-hotels-70e97.firebaseapp.com',
    databaseURL: 'https://booking-hotels-70e97-default-rtdb.firebaseio.com',
    projectId: 'booking-hotels-70e97',
    storageBucket: 'booking-hotels-70e97.appspot.com',
    messagingSenderId: '1060562286818',
    appId: '1:1060562286818:web:855b1071278fb9d2ccc6bb',
    measurementId: 'G-4V00LMDCXQ',
  },
};
