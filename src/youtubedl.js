/** Created by Praful Prasad on 5 August 2020 */


function downloadVideo(){
    console.log("Download this video");
    var dl  = document.getElementById("VideoDownloadDropdown");
    if(dl.className.indexOf("shown")>-1){
        dl.className = dl.className.replace("shown","");
    }
    else{
        dl.className+="shown";
    }

    console.log("Downloadedddd this video");
}
// var videoUrls = {};
// ytplayer.config.args.url_encoded_fmt_stream_map.split(',').forEach(function (item) {
//   var obj = {};

//   item.split('&').forEach(function (param) {
//     param = param.split('=');
//     obj[param[0]] = decodeURIComponent(param[1]);
//   });

//   videoUrls[obj.quality] = obj;
// });

// console.log(videoUrls);
    
    // var videoUrls =(async () => {
    //   const html = await fetch(window.location.href).then((resp) => resp.text()).then((text) => text);
    //   const startStr = 'ytplayer.config = {';
    //   const start = html.indexOf(startStr) + startStr.length - 1;
    //   const end = html.indexOf('};', start) + 1;
    //   const playerObj = JSON.parse(html.slice(start, end));
    
    //   playerObj.args.player_response = JSON.parse(playerObj.args.player_response);
    
    //   const videoUrls = playerObj.args.player_response.streamingData.adaptiveFormats.reduce((acc, item) => {
    //     if (!acc[item.quality]) {
    //       acc[item.quality] = {};
    //     }
    
    //     const mimeType = item.mimeType.split(';')[0];
    
    //     acc[item.quality][mimeType] = item;
    
    //     return acc;
    //   }, {});
    
    //   console.log('!!', videoUrls);
    // })();

    var videoUrls = window.ytplayer.config.args.player_response;


    console.log("Our extension hassssssss loaded",videoUrls)

    var container = document.getElementById("top-level-buttons");
    var btn = document.createElement("button");
    btn.className = "style-scope ytd-menu-renderer force-icon-button style-text";
    btn.setAttribute("role","button");
    btn.id = "downloadVideo";
    btn.innerText = "Download";

    var dropdown = document.createElement("div");
    dropdown.id = "VideoDownloadDropdown";
    container.appendChild(dropdown);

    var dropList = document.createElement("ul");
    dropdown.appendChild(dropList);

    container.appendChild(btn);
    console.log("video urls right here right now = ");
    for(i in videoUrls){
        var item = document.createElement("li");
        console.log("here 1");
        item.innerText = videoUrls[i];
        console.log("here 2");
        item.setAttribute("href",videoUrls[i]["video/mp4"]["url"]);
        console.log("here 3");
        dropList.appendChild(item);
        console.log("here 4");
    }
    console.log("skipped for loop");
    btn.addEventListener("click",downloadVideo)




 