module.exports = {
  presets: ['@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@/screens': './src/screens',
        },
      },
    ],
    'nativewind/babel',
    'react-native-reanimated/plugin',
  ],
};
