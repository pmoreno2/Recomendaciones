// filepath: /c:/Users/Pedro/Documents/Recomendaciones/store/src/e2e/test.js
const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    // Navega a la URL http://localhost:4200
    await driver.get('http://localhost:4200');
    
    // Espera hasta que el título de la página sea 'store'
    await driver.wait(until.titleIs('store'), 1000);
    
    // Encuentra todos los elementos con la clase CSS 'article'
    let articles = await driver.findElements(By.css('.article'));
    
    // Imprime en la consola la cantidad de artículos encontrados
    console.log(`Found ${articles.length} articles.`);
  } finally {
    // Cierra el navegador
    await driver.quit();
  }
}

example();