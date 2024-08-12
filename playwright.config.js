// @ts-check
const { defineConfig, devices } = require('@playwright/test');
const { on } = require('events');

 
module.exports = defineConfig({
  testDir: './tests',
  timeout: 30*1000,
  expect: {
    timeout: 5000
  },
  
  reporter: 'html',
 
  use: {
   browserName: 'chromium',
   headless: false,
    trace: 'retain-on-failure',
  screenshot: 'on'
}
  
});

