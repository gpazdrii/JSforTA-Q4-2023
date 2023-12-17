const button = document.getElementById('download')
button.addEventListener('click', showList)

async function downloadList () {
  const response = await fetch('http://127.0.0.1:3000/download')
  const data = await response.json()
  return data
}

function showList () {
  const list = downloadList()

  const ul = document.createElement('ul')
  list.then((res) => {
    res.forEach(el => {
      const li = document.createElement('li')
      ul.appendChild(li)
      li.innerHTML = el
    })
  })

  button.replaceWith(ul)
}
