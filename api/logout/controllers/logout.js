"use strict";

module.exports = {
  async index(ctx) {
    ctx.cookies.set("token", null);
    ctx.cookies.set('token.sig', null)
    ctx.send({
      authorized: true,
      message: "Successfully destroyed session",
    });
  },
};