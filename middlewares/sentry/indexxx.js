// module.exports = strapi => {
//     return {
//       initialize() {
//         strapi.app.use(async (ctx, next) => {
//           await next();
//         });
//       },
//     };
// };

// const Sentry = require('@sentry/node');

// Sentry.init({
//   dsn: 'https://5c69ef1aaefc440faaf5aa74931e056a@o283922.ingest.sentry.io/5800969',
//   environment: strapi.config.environment,
// });

// module.exports = strapi => {
//   return {
//     initialize() {
//       strapi.app.use(async (ctx, next) => {
//         console.log("am i called sentry", ctx)
//         try {
//           await next();
//         } catch (error) {
//           Sentry.captureException(error);
//           throw error;
//         }
//       });
//     },
//   };
// };