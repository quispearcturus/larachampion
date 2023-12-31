// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('equipo test', function() {
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
  it('equipo test', async function() {
    // Test name: equipo test
    // Step # | name | target | value
    // 1 | open | / | 
    await driver.get("http://localhost:8000/")
    // 2 | setWindowSize | 1366x728 | 
    await driver.manage().window().setRect({ width: 1366, height: 728 })
    // 3 | click | linkText=Log in | 
    await driver.findElement(By.linkText("Log in")).click()
    // 4 | click | linkText=Player | 
    await driver.findElement(By.linkText("Player")).click()
    // 5 | click | css=.fa | 
    await driver.findElement(By.css(".fa")).click()
    // 6 | click | css=.flex:nth-child(2) > .mb-2:nth-child(1) > .border-gray-300 | 
    await driver.findElement(By.css(".flex:nth-child(2) > .mb-2:nth-child(1) > .border-gray-300")).click()
    // 7 | type | css=.flex:nth-child(2) > .mb-2:nth-child(1) > .border-gray-300 | julio
    await driver.findElement(By.css(".flex:nth-child(2) > .mb-2:nth-child(1) > .border-gray-300")).sendKeys("julio")
    // 8 | click | css=.flex:nth-child(2) > .mb-2:nth-child(2) > .border-gray-300 | 
    await driver.findElement(By.css(".flex:nth-child(2) > .mb-2:nth-child(2) > .border-gray-300")).click()
    // 9 | type | css=.flex:nth-child(2) > .mb-2:nth-child(2) > .border-gray-300 | perez
    await driver.findElement(By.css(".flex:nth-child(2) > .mb-2:nth-child(2) > .border-gray-300")).sendKeys("perez")
    // 10 | click | css=.flex:nth-child(3) > .mb-2:nth-child(1) > .border-gray-300 | 
    await driver.findElement(By.css(".flex:nth-child(3) > .mb-2:nth-child(1) > .border-gray-300")).click()
    // 11 | type | css=.flex:nth-child(3) > .mb-2:nth-child(1) > .border-gray-300 | 0002-03-04
    await driver.findElement(By.css(".flex:nth-child(3) > .mb-2:nth-child(1) > .border-gray-300")).sendKeys("0002-03-04")
    // 12 | type | css=.flex:nth-child(3) > .mb-2:nth-child(1) > .border-gray-300 | 0020-03-04
    await driver.findElement(By.css(".flex:nth-child(3) > .mb-2:nth-child(1) > .border-gray-300")).sendKeys("0020-03-04")
    // 13 | type | css=.flex:nth-child(3) > .mb-2:nth-child(1) > .border-gray-300 | 0200-03-04
    await driver.findElement(By.css(".flex:nth-child(3) > .mb-2:nth-child(1) > .border-gray-300")).sendKeys("0200-03-04")
    // 14 | type | css=.flex:nth-child(3) > .mb-2:nth-child(1) > .border-gray-300 | 2000-03-04
    await driver.findElement(By.css(".flex:nth-child(3) > .mb-2:nth-child(1) > .border-gray-300")).sendKeys("2000-03-04")
    // 15 | click | css=.flex:nth-child(3) > .mb-2:nth-child(2) > .border-gray-300 | 
    await driver.findElement(By.css(".flex:nth-child(3) > .mb-2:nth-child(2) > .border-gray-300")).click()
    // 16 | type | css=.flex:nth-child(3) > .mb-2:nth-child(2) > .border-gray-300 | 54673454
    await driver.findElement(By.css(".flex:nth-child(3) > .mb-2:nth-child(2) > .border-gray-300")).sendKeys("54673454")
    // 17 | click | css=.flex:nth-child(4) > .mb-2:nth-child(1) > .border-gray-300 | 
    await driver.findElement(By.css(".flex:nth-child(4) > .mb-2:nth-child(1) > .border-gray-300")).click()
    // 18 | select | css=.flex:nth-child(4) > .mb-2:nth-child(1) > .border-gray-300 | label=Varon
    {
      const dropdown = await driver.findElement(By.css(".flex:nth-child(4) > .mb-2:nth-child(1) > .border-gray-300"))
      await dropdown.findElement(By.xpath("//option[. = 'Varon']")).click()
    }
    // 19 | click | css=.flex:nth-child(4) > .mb-2:nth-child(2) > .border-gray-300 | 
    await driver.findElement(By.css(".flex:nth-child(4) > .mb-2:nth-child(2) > .border-gray-300")).click()
    // 20 | type | css=.flex:nth-child(4) > .mb-2:nth-child(2) > .border-gray-300 | 32475908
    await driver.findElement(By.css(".flex:nth-child(4) > .mb-2:nth-child(2) > .border-gray-300")).sendKeys("32475908")
    // 21 | click | css=.flex:nth-child(5) .border-gray-300 | 
    await driver.findElement(By.css(".flex:nth-child(5) .border-gray-300")).click()
    // 22 | type | css=.flex:nth-child(5) .border-gray-300 | ninguno
    await driver.findElement(By.css(".flex:nth-child(5) .border-gray-300")).sendKeys("ninguno")
    // 23 | click | css=.bg-gray-800:nth-child(2) | 
    await driver.findElement(By.css(".bg-gray-800:nth-child(2)")).click()
    // 24 | click | name=team_id | 
    await driver.findElement(By.name("team_id")).click()
    // 25 | select | name=team_id | label=blanco
    {
      const dropdown = await driver.findElement(By.name("team_id"))
      await dropdown.findElement(By.xpath("//option[. = 'blanco']")).click()
    }
    // 26 | click | name=team_id | 
    await driver.findElement(By.name("team_id")).click()
    // 27 | select | name=team_id | label=verde
    {
      const dropdown = await driver.findElement(By.name("team_id"))
      await dropdown.findElement(By.xpath("//option[. = 'verde']")).click()
    }
    // 28 | click | css=.bg-gray-800:nth-child(2) | 
    await driver.findElement(By.css(".bg-gray-800:nth-child(2)")).click()
    // 29 | click | css=.swal2-confirm | 
    await driver.findElement(By.css(".swal2-confirm")).click()
    // 30 | click | css=.text-sm:nth-child(8) > .px-6:nth-child(8) > .inline-flex:nth-child(1) | 
    await driver.findElement(By.css(".text-sm:nth-child(8) > .px-6:nth-child(8) > .inline-flex:nth-child(1)")).click()
    // 31 | click | linkText=Player | 
    await driver.findElement(By.linkText("Player")).click()
    // 32 | click | css=.text-sm:nth-child(8) .inline-flex:nth-child(2) > .fas | 
    await driver.findElement(By.css(".text-sm:nth-child(8) .inline-flex:nth-child(2) > .fas")).click()
    // 33 | click | css=.swal2-confirm | 
    await driver.findElement(By.css(".swal2-confirm")).click()
    // 34 | click | css=.swal2-confirm | 
    await driver.findElement(By.css(".swal2-confirm")).click()
  })
})
