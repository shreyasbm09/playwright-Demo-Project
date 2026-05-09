




  const config = (
    {
  testDir: './tests/',
  timeout: 40*1000,//for each step in the test
  expect: 
  {// for assertion time
          timeout:5000
  },
  use:
  {
  //specifies the browser 
    browserName: 'chromium',
    headless: false,
    screenshot: 'on',//on, off, only-on-failure
    trace: 'on',//on,off
    //trace: 'retain-on-failure',//off on reatin-on-failure
    
 
  },
// Will get the html report after we run the test
  reporter:'html', 

  }
);

  module.exports = config

