// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseCollections: {
    user: "user-collection",
    hotels: "hotels-collection",
    sales: "sales-collection"
  },
  firebaseConfig: {
    apiKey: "AIzaSyDh5qsy73Jn6HUqf8ASXz32CgcpetJEF5I",
    authDomain: "project-1-e442b.firebaseapp.com",
    databaseURL: "https://project-1-e442b-default-rtdb.firebaseio.com",
    projectId: "project-1-e442b",
    storageBucket: "project-1-e442b.appspot.com",
    messagingSenderId: "277379812321",
    appId: "1:277379812321:web:a4e362049f42b989a060a0",
    measurementId: "G-Z3BGHP2JTJ"
  }

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
