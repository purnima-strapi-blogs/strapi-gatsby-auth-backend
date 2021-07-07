module.exports = (ctx, next) => {
    const currentUser = ctx.state.user
    const requestId = ctx.params.id

    if(currentUser.id === requestId) {
        return next()
    }

    ctx.unauthorized('You can only update your own profile')
}