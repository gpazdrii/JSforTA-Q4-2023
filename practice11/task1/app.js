const button = document.getElementById('voteButton')
button.addEventListener('click', clickVote)

function clickVote () {
  const ajaxRequest = new XMLHttpRequest()

  ajaxRequest.open('GET', '/date', true)
  ajaxRequest.onreadystatechange = function () {
    if (ajaxRequest.readyState !== 4) return
    if (ajaxRequest.status !== 200) {
      console.log(`Error + ${ajaxRequest.status}: ${ajaxRequest.statusText}`)
    } else {
      button.innerHTML = `Your vote is accepted: ${ajaxRequest.responseText}`
    }
  }
  ajaxRequest.send()
}
