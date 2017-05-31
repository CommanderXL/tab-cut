(() => {
  const CTRL_KEY_CODE = 17
  const TAB_KEY_CODE = 81
  const {
    runtime
  } = chrome

  document.addEventListener('keydown', e => {
    let currKey = e.keyCode
    if (e.ctrlKey && currKey === TAB_KEY_CODE) {
      createTabWrapper()

      runtime.sendMessage({
        greeting: 'hello'
      }, (res) => {
        console.log(res)
      })
    }
  })

  function createTabWrapper() {
    let tabWrapper = document.createElement('div')
    tabWrapper.id = 'tab-wrapper'
    tabWrapper.innerHTML = 'Hello tab-wrapper'
  }

  function getTabs() {

  }

  runtime.onMessage.addListener((request, sender, sendRes) => {
    console.log(sender.tab ? `from a content script: ${sender.tab.url}` : 'from the extension')
    if (request.greeting === 'Hello') {

    }
  })

  runtime.sendMessage({
    greeting: 'Hello'
  }, (res) => {
    console.log(res)
  })
})()