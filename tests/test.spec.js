const { join } = require('path');
const { expect } = require('chai');

const waitforTimeout = 10000;


describe('Volvo Car Safety Page Tests', () => {
  before(() => {
    // Initialize and configure WebDriverIO, start browser, etc.
    browser.url('https://www.volvocars.com/intl/v/car-safety/a-million-more');
  });

  it('should load the page successfully', () => {     
    browser.waitUntil(() => browser.getUrl() === 'https://www.volvocars.com/intl/v/car-safety/a-million-more', {
      timeout: waitforTimeout,
      timeoutMsg: 'Expected: https://www.volvocars.com/intl/v/car-safety/a-million-more'
    });
  });

  it('should have the page title', () => { 
    browser.waitUntil(() => browser.getTitle() === 'Car Safety - A Million More | Volvo Cars', {
      timeout: waitforTimeout,
      timeoutMsg: 'Expected: Car Safety - A Million More | Volvo Cars'
    });
  });

  it('should have a valid header', () => {
    browser.waitUntil(() => $('.header__container').isDisplayed(), {
      timeout: waitforTimeout,
      timeoutMsg: 'Expected: Car Safety - A Million More | Volvo Cars'
    });
  });

  it('should scroll to the end of the page', () => {
    browser.execute(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });
  
    browser.waitUntil(() => {
      const footer = $('.footer');
      return footer.isDisplayed();
    }, {
      timeout: waitforTimeout,
      timeoutMsg: 'Expected: Footer to be displayed'
    });
  });
  
  after(() => {
    // Clean up and close the browser.
    browser.closeWindow();
  });
});

/*
describe('Visual Regression Test', () => {

    const screenshotName = 'volvo-car-safety';

    it("saves the baseline image", async () => {
        await browser.waitUntil(async () => {
            return (await browser.getUrl()) === 'https://www.volvocars.com/intl/v/car-safety/a-million-more';
        }, { timeout: waitforTimeout, timeoutMsg: 'Base page not loaded within 10s' });

        await browser.saveScreen(screenshotName);
    });

    it("compares with baseline image", async () => {
        await browser.waitUntil(async () => {
            return (await browser.getUrl()) === 'https://www.volvocars.com/intl/v/car-safety/a-million-more';
        }, { timeout: waitforTimeout, timeoutMsg: 'Test page not loaded within 10s' });

        const testOptions = {
            actualFolder: join(process.cwd(), './.tmp/checkActual'),
            baselineFolder: join(process.cwd(), './.tmp/actual'),
            diffFolder: join(process.cwd(), './.tmp/testDiff'),
            returnAllCompareData: true,
        };

        const result = await browser.checkScreen(screenshotName, testOptions);

        expect(result).toEqual(0);
    });
});
*/