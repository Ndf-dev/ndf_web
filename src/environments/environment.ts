// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  userApi: "https://user-auth.ghanalegaltimbermarket.com/api/user",
  vendorApi: "https://vendor-info.ghanalegaltimbermarket.com/api/vendors",
  stockApi: "https://stocks.ghanalegaltimbermarket.com/api/stocks",
  feedbackApi: "https://ndf-feedback.herokuapp.com/api/v1/",
  newsfeedApi: "https://newsfeed.ghanalegaltimbermarket.com/api/newsfeed",
  baseImageUrl: "https://ndf-images.ams3.digitaloceanspaces.com"
};

/*
 * For easier debugging in development  mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
