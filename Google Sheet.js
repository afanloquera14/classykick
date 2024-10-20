const scriptURL = 'https://script.google.com/macros/s/AKfycbzPa29OKZBQ5i0u6-LhKDeI7H1MO11IViDdOtPNRSyQP_uHjUo0anLTA1Jt6JOvGWyQhQ/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Tu pedido ha sido realizado" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})