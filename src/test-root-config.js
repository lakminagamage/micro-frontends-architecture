import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     import(
//       /* webpackIgnore: true */
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

registerApplication({
  name: "@test/product-service-app",
  app: () =>
    import(
      /* webpackIgnore: true */
      "@test/product-service"
    ),
  activeWhen: ["/"],
});


start({
  urlRerouteOnly: true,
});
