window.onload = function () {
  const favicon = document.getElementById('favicon')
  let pageTitle = document.title
  let attentionMessage = 'Come back'

  document.addEventListener('visibilitychange', function (e) {
    toggle()
  })

  function toggle() {
    if (!document.hidden) {
      document.title = pageTitle
      favicon.href = './assets/images/dp_female.png'
    } else {
      document.title = attentionMessage
      console.log()
      favicon.href = './assets/images/folded.png'
    }
  }
}
