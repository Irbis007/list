

const url = document.getElementById('url')
const title = document.getElementById('title')
const text = document.getElementById('text')
const date = document.getElementById('date')
const link = document.getElementById('link')
const nameT = document.getElementById('name')

const form = document.querySelector('.form')

const listBlock = document.querySelector('.list')

let arr = []
let src = ''

if(url){
  url.addEventListener('change', function(event) {
    const file = event.target.files[0];
    const maxSize = 2 * 1024 * 1024;
    if (file) {
      if (file.size > maxSize) {
          alert('Файл слишком большой. Максимальный размер файла: 2 MB');
          event.target.value = ''; 
          return;
      }
      console.log(file.size)
      const reader = new FileReader();
      reader.onload = function(e) {
          src = e.target.result;
      }
      reader.readAsDataURL(file);
    }
  });
  
}

if(form){
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    arr.push({
      title: title.value,
      date: date.value,
      url: src,
      text: text.value,
      nameT: nameT.value,
      link: link.value
    })
  
    localStorage.setItem('list', JSON.stringify(arr))
    console.log(39)
  })
}

if(listBlock) {
  const list = JSON.parse(localStorage.getItem('list'))
  list.forEach(item => {
    console.log(item)
    const block = document.createElement('li')
  
    block.innerHTML = `
    <h2 class="title">${item.title}</h2>
    <div class="date">${item.date}</div>
    <div class="img">
      <img src="${item.url}"/>
    </div>
    <p class="text">${item.text}</p>
    <p class="name">${item.nameT}</p>
    <a href="${item.link}">Оригинал</a>
    `;
    listBlock.append(block);
  })
  console.log(item, 3)
}

console.log(arr)

console.log(3)
