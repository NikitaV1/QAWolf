const qawolf = require("qawolf");

let browser;
let page;

beforeAll(async () => {
  browser = await qawolf.launch();
  const context = await browser.newContext();
  await qawolf.register(context);
  page = await context.newPage();
});

afterAll(async () => {
  await qawolf.stopVideos();
  await browser.close();
});

test("bakalavrInfo", async () => {
  await page.goto("http://scs.fpm.kpi.ua/");
  await page.click('ul:nth-of-type(2) [href="/"]');
  await page.click('[href="http://www.scs.kpi.ua/content/zahist-atestaciynih-robit"]');
});