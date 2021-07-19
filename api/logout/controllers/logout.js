"use strict";

module.exports = {
  async index(ctx) {4
    ctx.cookies.set("jwt", null);
    ctx.send({
      authorized: true,
      message: "Successfully destroyed session",
    });
  },
};