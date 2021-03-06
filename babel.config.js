const isDevelopment = process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test';

module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: [
    isDevelopment && 'react-refresh/babel',
    '@babel/plugin-syntax-dynamic-import',
    ['@babel/plugin-transform-runtime', {
      regenerator: true,
    }],
  ].filter(Boolean),
}