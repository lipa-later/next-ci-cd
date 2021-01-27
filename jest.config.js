module.exports = {
    collectCoverage: true,
    setupFiles: [
        "./jest.setup.js"
    ],
    testPathIgnorePatterns: [
        "./.idea",
        "./.next",
        "./node_modules"
    ],
    moduleNameMapper: {
        '^.+\\.(css|less)$': '<rootDir>/style_mock.js',
      },
};
