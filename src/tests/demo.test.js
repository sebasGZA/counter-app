test('Debe ser true,', () => {
    const isActive = true;

    if (isActive) {
        throw Error('No está activo')
    }
})