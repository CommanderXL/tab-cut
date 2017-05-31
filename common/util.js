function util () {
  chrome.tabs.getAllInWindow((arrTabs) => {
    // window.alert(arrTabs.length)
  })
  console.log(123)
  /* chrome.windows.create({
    url: 'http://www.baidu.com',
    type: 'popup'
  }) */
}