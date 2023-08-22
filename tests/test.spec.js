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
