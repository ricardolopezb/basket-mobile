module.exports = {
    platformName: "iOS", // Cambiar a "iOS" si estás probando en iOS
    deviceName: "iPhone 13", // Nombre de tu dispositivo móvil en el que está ejecutándose Expo Go
    appPackage: "host.exp.exponent", // Paquete de la aplicación Expo Go
    appActivity: ".experience.HomeActivity", // Actividad principal de la aplicación Expo Go
    automationName: "XCUITest", // Cambiar a "XCUITest" si estás probando en iOS
    noReset: true,
    newCommandTimeout: 600,
    autoGrantPermissions: true,
    chromedriverExecutableDir: require('chromedriver').path,
};