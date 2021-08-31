require("chromedriver");
const { Builder, By, Key, util } = require("selenium-webdriver");
// const chrome = require("selenium-webdriver/chrome");
(async function test1() {
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.manage().window().maximize();
    await driver.get("https://linkedin.com/");
    await driver.findElement(By.css("#session_key")).sendKeys(/**Enter you Email */);
    await driver.sleep(500);
    await driver.findElement(By.css("#session_password")).sendKeys(/**Enter your password */);
    await driver.sleep(2000);
    await driver.findElement(By.css(".sign-in-form__submit-button")).click();
    
    await driver.get(/**Enter the link from browser url of the profile you want to send request to */);
    await driver.findElement(By.css('.pvs-profile-actions__action')).click()
    await driver.sleep(1000);
    await driver.findElement(By.css('.ml1')).click()
})();