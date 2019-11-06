module.exports = {
    plugins: [
        require('autoprefixer'),
        require('@lipemat/css-mqpacker'),
        require('cssnano')({
            preset: [
                'default', {
                    discardComments: {
                        removeAll: true,
                    }
                }
            ]
        })
    ]
}