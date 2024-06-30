export default {
  testEnvironment: 'jsdom',
  testMatch: ['**/src/**/test/*.tsx'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
  },
};
