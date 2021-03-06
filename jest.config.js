module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/', '/cypress/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/pages/**/*.ts(x)?',
    '!src/styles/**.ts',
    '!src/types/**/*.d.ts',
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
};
