function util () {
  chrome.tabs.getAllInWindow((arrTabs) => {
    // window.alert(arrTabs.length)
  })
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { greeting: 'Hello' }, (res) => {
      console.log(res.farewell)
    })
  })
  chrome.runtime.onMessage.addListener((request, sender, sendRes) => {
    console.log(sender.tab ? `from a content script: ${sender.tab.url}` : 'from the extension' )
    if (request.greeting === 'hello') {
      sendRes({farewell: 'goodbye'})
    }
  })
  /* chrome.windows.create({
    url: 'http://www.baidu.com',
    type: 'popup'
  }) */
}