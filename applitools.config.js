// Applitools visual tests configuration to run tests in Applitools Ultrafast Grid.

module.exports = {
  testConcurrency: 5,
  apiKey: 'APPLITOOLS_API_KEY',
  batchName: 'Strongly Typed',
  browser: [
      {width: 800, height: 600, name: 'chrome'},
      {width: 1280, height: 720, name: 'chrome'},

      {width: 800, height: 600, name: 'firefox'},
      {width: 1280, height: 720, name: 'firefox'},

      {width: 800, height: 600, name: 'safari'},
      {width: 1280, height: 720, name: 'safari'},

      {deviceName: 'Pixel 2', screenOrientation: 'portrait'},
  ]
}