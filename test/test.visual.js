import { join } from 'path';

const { expect } = require('chai');
const waitforTimeout = 10000;

describe('Visual Regression Test', () => {

    const screenshotName = 'volvo-car-safety';

    it("saves the baseline image", async () => {
        await browser.waitUntil(async () => {
            return (await browser.getUrl()) === 'https://www.volvocars.com/intl/v/car-safety/a-million-more';
        }, { timeout: waitforTimeout, timeoutMsg: 'Page not loaded within 10s' });

        await browser.saveScreen(screenshotName);
    });

    it("compares with baseline image", async () => {
        await browser.waitUntil(async () => {
            return (await browser.getUrl()) === 'https://www.volvocars.com/intl/v/car-safety/a-million-more';
        }, { timeout: waitforTimeout, timeoutMsg: 'Page not loaded within 10s' });

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
