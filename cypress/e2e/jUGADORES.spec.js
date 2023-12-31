// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('JUGADORES', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('JUGADORES', async function() {
    // Test name: JUGADORES
    // Step # | name | target | value
    // 1 | open | / | 
    await driver.get("http://localhost:8000/")
    // 2 | setWindowSize | 1366x728 | 
    await driver.manage().window().setRect({ width: 1366, height: 728 })
    // 3 | click | css=.text-gray-300:nth-child(1) > font:nth-child(2) > font | 
    await driver.findElement(By.css(".text-gray-300:nth-child(1) > font:nth-child(2) > font")).click()
    // 4 | click | css=.hidden:nth-child(6) font > font | 
    await driver.findElement(By.css(".hidden:nth-child(6) font > font")).click()
    // 5 | click | css=font:nth-child(2) > font | 
    await driver.findElement(By.css("font:nth-child(2) > font")).click()
    // 6 | mouseOver | css=.fa | 
    {
      const element = await driver.findElement(By.css(".fa"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    // 7 | click | css=.flex:nth-child(2) > .mb-2:nth-child(1) > .border-gray-300 | 
    await driver.findElement(By.css(".flex:nth-child(2) > .mb-2:nth-child(1) > .border-gray-300")).click()
    // 8 | type | css=.flex:nth-child(2) > .mb-2:nth-child(1) > .border-gray-300 | CAR
    await driver.findElement(By.css(".flex:nth-child(2) > .mb-2:nth-child(1) > .border-gray-300")).sendKeys("CAR")
    // 9 | click | css=.flex:nth-child(2) > .mb-2:nth-child(2) > .border-gray-300 | 
    await driver.findElement(By.css(".flex:nth-child(2) > .mb-2:nth-child(2) > .border-gray-300")).click()
    // 10 | click | css=.flex:nth-child(2) > .mb-2:nth-child(1) > .border-gray-300 | 
    await driver.findElement(By.css(".flex:nth-child(2) > .mb-2:nth-child(1) > .border-gray-300")).click()
    // 11 | type | css=.flex:nth-child(2) > .mb-2:nth-child(1) > .border-gray-300 | CARL
    await driver.findElement(By.css(".flex:nth-child(2) > .mb-2:nth-child(1) > .border-gray-300")).sendKeys("CARL")
    // 12 | click | css=.flex:nth-child(2) > .mb-2:nth-child(2) > .border-gray-300 | 
    await driver.findElement(By.css(".flex:nth-child(2) > .mb-2:nth-child(2) > .border-gray-300")).click()
    // 13 | type | css=.flex:nth-child(2) > .mb-2:nth-child(2) > .border-gray-300 | JONSON
    await driver.findElement(By.css(".flex:nth-child(2) > .mb-2:nth-child(2) > .border-gray-300")).sendKeys("JONSON")
    // 14 | click | css=.flex:nth-child(3) > .mb-2:nth-child(1) > .border-gray-300 | 
    await driver.findElement(By.css(".flex:nth-child(3) > .mb-2:nth-child(1) > .border-gray-300")).click()
    // 15 | type | css=.flex:nth-child(3) > .mb-2:nth-child(1) > .border-gray-300 | 0001-07-07
    await driver.findElement(By.css(".flex:nth-child(3) > .mb-2:nth-child(1) > .border-gray-300")).sendKeys("0001-07-07")
    // 16 | type | css=.flex:nth-child(3) > .mb-2:nth-child(1) > .border-gray-300 | 0019-07-07
    await driver.findElement(By.css(".flex:nth-child(3) > .mb-2:nth-child(1) > .border-gray-300")).sendKeys("0019-07-07")
    // 17 | type | css=.flex:nth-child(3) > .mb-2:nth-child(1) > .border-gray-300 | 0199-07-07
    await driver.findElement(By.css(".flex:nth-child(3) > .mb-2:nth-child(1) > .border-gray-300")).sendKeys("0199-07-07")
    // 18 | type | css=.flex:nth-child(3) > .mb-2:nth-child(1) > .border-gray-300 | 1999-07-07
    await driver.findElement(By.css(".flex:nth-child(3) > .mb-2:nth-child(1) > .border-gray-300")).sendKeys("1999-07-07")
    // 19 | click | css=.flex:nth-child(3) > .mb-2:nth-child(2) > .border-gray-300 | 
    await driver.findElement(By.css(".flex:nth-child(3) > .mb-2:nth-child(2) > .border-gray-300")).click()
    // 20 | type | css=.flex:nth-child(3) > .mb-2:nth-child(2) > .border-gray-300 | 23456789
    await driver.findElement(By.css(".flex:nth-child(3) > .mb-2:nth-child(2) > .border-gray-300")).sendKeys("23456789")
    // 21 | click | css=.flex:nth-child(4) > .mb-2:nth-child(1) > .border-gray-300 | 
    await driver.findElement(By.css(".flex:nth-child(4) > .mb-2:nth-child(1) > .border-gray-300")).click()
    // 22 | select | css=.flex:nth-child(4) > .mb-2:nth-child(1) > .border-gray-300 | label=Varón
    {
      const dropdown = await driver.findElement(By.css(".flex:nth-child(4) > .mb-2:nth-child(1) > .border-gray-300"))
      await dropdown.findElement(By.xpath("//option[. = 'Varón']")).click()
    }
    // 23 | click | css=.flex:nth-child(4) > .mb-2:nth-child(2) > .border-gray-300 | 
    await driver.findElement(By.css(".flex:nth-child(4) > .mb-2:nth-child(2) > .border-gray-300")).click()
    // 24 | type | css=.flex:nth-child(4) > .mb-2:nth-child(2) > .border-gray-300 | 32145675
    await driver.findElement(By.css(".flex:nth-child(4) > .mb-2:nth-child(2) > .border-gray-300")).sendKeys("32145675")
    // 25 | click | css=.flex:nth-child(5) > .mb-2 | 
    await driver.findElement(By.css(".flex:nth-child(5) > .mb-2")).click()
    // 26 | click | css=.flex:nth-child(5) .border-gray-300 | 
    await driver.findElement(By.css(".flex:nth-child(5) .border-gray-300")).click()
    // 27 | type | css=.flex:nth-child(5) .border-gray-300 | NUEVO
    await driver.findElement(By.css(".flex:nth-child(5) .border-gray-300")).sendKeys("NUEVO")
    // 28 | click | css=.bg-gray-800 > font > font | 
    await driver.findElement(By.css(".bg-gray-800 > font > font")).click()
    // 29 | mouseOver | css=.bg-gray-800:nth-child(2) | 
    {
      const element = await driver.findElement(By.css(".bg-gray-800:nth-child(2)"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    // 30 | click | name=team_id | 
    await driver.findElement(By.name("team_id")).click()
    // 31 | select | name=team_id | label=negro
    {
      const dropdown = await driver.findElement(By.name("team_id"))
      await dropdown.findElement(By.xpath("//option[. = 'negro']")).click()
    }
    // 32 | click | css=.bg-gray-800 > font > font | 
    await driver.findElement(By.css(".bg-gray-800 > font > font")).click()
    // 33 | click | css=.swal2-confirm | 
    await driver.findElement(By.css(".swal2-confirm")).click()
    // 34 | click | css=.text-sm:nth-child(8) .inline-flex:nth-child(1) > .fas | 
    await driver.findElement(By.css(".text-sm:nth-child(8) .inline-flex:nth-child(1) > .fas")).click()
    // 35 | click | css=.hidden:nth-child(6) font > font | 
    await driver.findElement(By.css(".hidden:nth-child(6) font > font")).click()
    // 36 | click | css=.text-sm:nth-child(8) .inline-flex:nth-child(2) > .fas | 
    await driver.findElement(By.css(".text-sm:nth-child(8) .inline-flex:nth-child(2) > .fas")).click()
    // 37 | click | css=.swal2-confirm > font > font | 
    await driver.findElement(By.css(".swal2-confirm > font > font")).click()
    // 38 | mouseOver | css=.swal2-confirm | 
    {
      const element = await driver.findElement(By.css(".swal2-confirm"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    // 39 | mouseOut | css=.swal2-confirm | 
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    }
    // 40 | click | css=.swal2-confirm > font > font | 
    await driver.findElement(By.css(".swal2-confirm > font > font")).click()
    // 41 | runScript | window.scrollTo(0,45) | 
    await driver.executeScript("window.scrollTo(0,45)")
  })
})
