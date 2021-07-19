const { sanitizeEntity } = require('strapi-utils');

module.exports = {
  /**
   * Retrieve a record.
   *
   * @return {Object}
   */
  
  async findOne(ctx) {
    const { id } = ctx.params;
    if(ctx.state.user) {
      const entity = await strapi.services.article.findOne({ id });
      return sanitizeEntity(entity, { model: strapi.models.article });
    } 
  },
  async find (ctx) {
    const articles = await strapi.services.article.find();
    const entity = articles.map(({content, ...article}) => {
      return article
    })
    return sanitizeEntity(entity, { model:  strapi.models.article })
  },
};
