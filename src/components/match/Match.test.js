const { device, element, by, waitFor } = require('detox');
const { initDriver, setTestApp } = require('detox-expo-helpers');

// Configura la prueba
before(async () => {
    await initDriver();
    await setTestApp(device, 'host.exp.exponent', '.experience.HomeActivity');
});

after(async () => {
    await device.quit();
});


describe('Input Test', () => {
    it('should display an input field', async () => {
        // Busca el componente raíz (root component) de tu aplicación
        const appRoot = device.element(by.id('root'));

        // Busca el elemento de input dentro del componente raíz por su etiqueta (label)
        const inputField = appRoot.element(by.label('Email'));

        // O busca el elemento de input dentro del componente raíz por su tipo (type)
        // const inputField = appRoot.element(by.type('android.widget.EditText'));

        // Verifica si el elemento de input está presente en la pantalla
        await expect(inputField).toBeVisible();
    });
});