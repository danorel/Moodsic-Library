const config = (isProduction) => ({
    mode: isProduction ? 'production' : 'development',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.css'],
        modules: ['src', 'node_modules'],
    },
})

module.exports = {
    config,
}