chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    return {redirectUrl: "https://news.ycombinator.com"};
  },
  {urls: ["*://*.smh.com.au/*"]},
  ["blocking"]
);
