if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./serviceworker.js')
    .then(reg => console.log('Registro de serviceworker exitoso', reg))
    .catch(err => console.warn('Error al tratar de registrar el serviceworker', err))
}