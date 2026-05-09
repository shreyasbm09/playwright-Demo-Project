
import { chromium, defineConfig, devices, expect } from '@playwright/test';
import { trace } from 'node:console';
import { permission } from 'node:process';




const config = (
  {
    testDir: './tests/',
    workers: 3,//can specify the number of parrel exection agents 
    timeout: 40 * 1000,
    expect:
    {
      timeout: 5000
    },
    retries:1,
    reporter: 'html',
    projects: [
      {
        name: "Safari",
        use:
        {
          
          browserName: 'webkit',
          headless: true,
          screenshot: 'on',
          trace: 'on',
          ...devices['Pixel 7']

        }
      },
      { 
          name: "Chrome",
        use:
        {
          
          browserName: 'chromium',
          headless: true,

          screenshot: 'on',
          ignoreHttpsErrors:true,
          permissions:['geolocation'],
          video:'retain-on-failure',
          trace: 'on',
          viewport : {width:720,height:720}

        }
    
      }

    ]
    ,



  }
);

module.exports = config

