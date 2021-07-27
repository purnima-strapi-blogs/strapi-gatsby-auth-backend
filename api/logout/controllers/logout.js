"use strict";

module.exports = {
  async index(ctx) {4
    ctx.cookies.set("token", null);
    ctx.send({
      authorized: true,
      message: "Successfully destroyed session",
    });
  },
};