module.exports = {
  presets: ['@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@/screens': './src/screens',
          '@/components': './src/components',
          '@/api': './src/api',
          '@/assets': './assets',
        },
      },
    ],
    'nativewind/babel',
    'react-native-reanimated/plugin',
  ],
};