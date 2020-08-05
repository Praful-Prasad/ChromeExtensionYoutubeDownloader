s = document.createElement("script");
s.src = chrome.extension.getURL("src/youtubedl.js")

s.onload = function(){
    this.remove();
}

document.head.appendChild(s);

window.addEventListener("message",function(e){
    console.log("downloaddd:",e);
    // var ext = e.data.type.split("/")[1];
    var ext="mp4"
    var fn = e.data.name+"."+ext
    console.log("hereeeee hdd",fn,chrome);
    chrome.runtime.sendMessage({name:fn,url:e.data.url},function(res){
        console.log(res);
    });
    
// chrome.runtime.onConnect.addListener(port => {
//     console.log('connected ', port);

//     if (port.name === 'hieloeleo') {
//         port.onMessage.addListener(this.processMessage);
//     }
// });
console.log("ENDDDD");

})