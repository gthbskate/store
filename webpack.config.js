// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/, // Para archivos .scss
        use: [
          'style-loader',   // 1. Inyecta CSS en el DOM
          'css-loader',     // 2. Interpreta @import y url()
          'sass-loader',    // 3. Compila Sass a CSS
        ],
      },
      {
        test: /\.css$/, // Para archivos .css si también usas CSS plano
        use: ['style-loader', 'css-loader'],
      }
    ],
  },
};