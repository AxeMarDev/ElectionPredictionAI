module.exports = {
    require: ['@babel/register', './src/setupTests.js'],
    spec: ['test/**/*.test.js'],
    recursive: true,
    timeout: 5000,
    bail: true,
    reporter: 'spec',
};