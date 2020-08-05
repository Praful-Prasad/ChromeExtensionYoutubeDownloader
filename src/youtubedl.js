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


function downloadURI(event){
    event.preventDefault();
    event.stopPropagation();
    var url = event.currentTarget.getAttribute("href");
    var name = document.getElementsByTagName("title")[0].innerText;
    var datatype = event.currentTarget.getAttribute("data-type");
    var data = {url:url,name: name, sender:"YTDL",type:datatype};
    window.postMessage(data,"*");
    return false
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


    console.log("Our extension hassssssss loaded",JSON.parse(videoUrls).streamingData.adaptiveFormats);

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
    var quality = [];
    var flag =0;
    for(i in JSON.parse(videoUrls).streamingData.adaptiveFormats)
    {
        for(j=0;j<quality.length;j++)
          if(JSON.parse(videoUrls).streamingData.adaptiveFormats[i]["quality"]==quality[j])
            flag=1;
    
    
        if(flag==0)
        {   quality.push(JSON.parse(videoUrls).streamingData.adaptiveFormats[i]["quality"]);
            var item = document.createElement("a");
            item.innerText = JSON.parse(videoUrls).streamingData.adaptiveFormats[i]["quality"];
            item.setAttribute("href",JSON.parse(videoUrls).streamingData.adaptiveFormats[i]["url"]);
            item.setAttribute("target","_blank");
            item.setAttribute("data-type",JSON.parse(videoUrls).streamingData.adaptiveFormats[i]["mimeType"]);
            item.addEventListener("click",downloadURI);

            dropList.appendChild(item);
        }
        flag=0;   
    }



    console.log("skipped for loop");
    btn.addEventListener("click",downloadVideo)




 