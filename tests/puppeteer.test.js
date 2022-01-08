import puppeteer from 'puppeteer';

describe('puppeteer', () => {
    let browser;
    let page;

    beforeAll(async () => {
        browser = await puppeteer.connect({
            browserWSEndpoint: 'ws://browserless:3000'
        });
        page = await browser.newPage();
    });

    it('should render welcome message', async () => {
        await page.goto('http://conjur-express:8080', { waitUntil: 'networkidle0' });
        const message = "Welcome to Conjur!";
        await page.waitForFunction(`document.querySelector("body").innerText.includes("${message}")`);
    });

    afterAll(() => browser.close());
});
