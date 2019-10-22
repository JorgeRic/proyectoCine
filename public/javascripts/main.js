'use strict'



const main = () =>{
const form = document.querySelector('.pelicula-form')
form.addEventListener('submit', async (event) => {
  event.preventDefault();
  axios.post('/api/private', {} )
})

}
window.addEventListener('load', main)