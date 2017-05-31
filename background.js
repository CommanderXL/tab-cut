chrome.runtime.onMessage.addListener((request, sender, sendRes) => {
  console.log(sender.tab ? `from a content script: ${sender.tab.url}` : 'from the extension')
  if (request.greeting === 'Hello') {
    // 因为这个方法是异步的，因此最后需要return true
    // https://developer.chrome.com/extensions/messaging
    chrome.tabs.getAllInWindow((arrTabs) => {
      console.log(arrTabs)
      sendRes({
        tabLen: arrTabs
      })
    })
    return true
  }
})