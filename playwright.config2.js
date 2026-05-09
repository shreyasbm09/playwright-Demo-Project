import {defineConfig,devices} from '@playwright/test';

export default defineConfig({
  testDir: './tests/',
  timeout: 40000,
  
  expect: {
    timeout: 5000
  },
  use:{
    colorScheme: 'dark',
    launchOptions:{
      sloMo:50,
    }
  },
  reporter:'html',
  workers:4,
  browserName:'chromium',
  headless: false,
  screenshot:'only-on-failure',
  trace:'on',
  video:'retain-on-failure',
  ignoreHttpsErrors:true,
  permissions:['geolocation'],
  viewport:{width:500,height:550},
  projects:[{
    
    name:"chromium",
    use:{
      colorScheme: 'dark',
      browserName:'chromium',
      ...devices['Nexus 10 landscape'],
     //  viewport:{width:500,height:550},
      video:"retain-on-failure",
      trace:'only-on-failure',
      screenshot:'on',
      headless:false,

    },
  }]
















})