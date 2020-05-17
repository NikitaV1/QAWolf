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

test("myTest", async () => {
  await page.goto("http://scs.fpm.kpi.ua/");
  await page.click('ul:nth-of-type(2) [href="/"]');
  await page.click('[href="/content/konsultaciyi-vikladachiv"]');
  await qawolf.scroll(page, "html", { x: 0, y: 11 });
  await page.click('[href="/content/pislyadiplomna-osvita"]');
  await page.click('ul:nth-of-type(2) [href="/"]');
  await page.click('[href="http://www.scs.kpi.ua/content/zahist-atestaciynih-robit"]');
  await page.click('[href="/content/mizhnarodna-diyalnist"]');
  await page.click('li:nth-of-type(2) [href="#"]');
  await page.click('[href="#"]');
  await page.click('[href="/content/osvitni-standarti-specialisti"]');
  await page.click('[href="http://www.scs.kpi.ua/blogs/vgzaitsev"]');
  await page.click(".messages");
  await page.click(".messages");
  await page.click("#tabs-wrapper");
  await page.click("#tabs-wrapper");
});