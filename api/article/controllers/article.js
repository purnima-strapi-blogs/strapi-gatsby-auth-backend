const { sanitizeEntity } = require('strapi-utils');

module.exports = {
  /**
   * Retrieve a record.
   *
   * @return {Object}
   */
  
  async find (ctx) {
    console.log("ctx is", ctx.request)
    const articles = await strapi.services.article.find();
    const entity = articles.map(({content, ...article}) => {
      return article
    })
    return sanitizeEntity(entity, { model:  strapi.models.article })
  },
  async findOne(ctx) {
    const { slug } = ctx.params;

    if(ctx.state.user) {
      const entity = await strapi.services.article.findOne({ slug });
      return sanitizeEntity(entity, { model: strapi.models.article });
    } 
  },
};
