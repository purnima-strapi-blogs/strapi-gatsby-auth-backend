const axios = require("axios");

module.exports = {
  async index(ctx) {

    const { body } = ctx.request;

    const hostname =
      strapi.config.environment === "development" &&
        ["127.0.0.1", "0.0.0.0"].includes(strapi.config.server.host)
        ? "localhost"
        : strapi.config.server.host;

    const absoluteURL = `http://${hostname}:${strapi.config.server.port}`;

    try {
      const { data } = await axios.post(`${absoluteURL}/auth/local`, body);


      if (data && data.jwt) {
        ctx.cookies.set("jwt", data.jwt, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production" ? true : false,
          maxAge: 1000 * 60 * 60 * 24 * 14,
          domain:
            process.env.NODE_ENV === "development"
              ? "localhost"
              : process.env.PRODUCTION_URL,
        });
      }

      console.log("ctx.cookie.get(jwt)", ctx.cookies.get("jwt"));

      return ctx.send(data);

    } catch (error) {

      return ctx.badRequest(null, error);

    }
  },
};