/**File created beautifully by Praful Prasad */

chrome.runtime.onMessage.addListener(function(request,sender,callback){
    console.log("received requestttt",request);
    chrome.downloads.download({url: request.url,filename:request.name});
})
