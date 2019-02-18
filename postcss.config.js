let autoPrefixer=require('autoprefixer')

module.exports = {
    plugins: [
        autoPrefixer({
            browsers: [
                "> 0.01%"
            ]
        }),
        
    ]
}