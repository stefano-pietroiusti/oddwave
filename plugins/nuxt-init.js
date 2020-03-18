export default async (ctx) => {
  await ctx.store.dispatch('strapi/getSetArticles')
  await ctx.store.dispatch('strapi/getSetCategories')
}
