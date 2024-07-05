

const url = document.getElementById('url')
const title = document.getElementById('title')
const text = document.getElementById('text')
const date = document.getElementById('date')
const link = document.getElementById('link')
const nameT = document.getElementById('name')

const form = document.querySelector('.form')

const list = document.querySelector('.list')

console.log(form)

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const block = document.createElement('li')

  block.innerHTML = `
    <h2 class="title">${title.value}</h2>
    <div class="date">${date.value}</div>
    <div class="img">
      <img src="${url.value}"/>
    </div>
    <p class="text">${text.value}</p>
    <p class="name">${nameT.value}</p>
    <a href="${link.value}">Оригинал</a>
  `

  list.append(block)
})
