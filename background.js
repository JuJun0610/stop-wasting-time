chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    const forbiddenKeywords = ["youtube", "netflix", "disney"];
    const ispageForbidden = forbiddenKeywords.some((Keyword) =>
        tab.url.includes(Keyword)
    );
    if (ispageForbidden) {
        chrome.tabs.remove(tabId);
    }
});
