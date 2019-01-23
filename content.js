/*
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.action == "get_selected_text") {
        var text = document.getSelection().toString();
        if (text !== '') {
            text = text.match(/\w+/)[0];
            if (text !== '') {
                console.log("send text: "+ text);
                sendResponse({selected_text: text});
            }
        }
    } // else { console.log("catch action: " + request.action) }
  }
);
*/

document.addEventListener ("keydown", function (zEvent) {
    // https://stackoverflow.com/questions/37557990/detecting-combination-keypresses-control-alt-shift/37559790
    if (zEvent.code == "Backquote" && zEvent.shiftKey) {
        var text = document.getSelection().toString();
        if (text !== '') {
            // console.log(text);
            text = text.match(/\w+/)[0].toLowerCase();
            if (text !== '') {
                let voice_url = 'https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=' + encodeURI(text) +  '&tl=en&total=1&idx=0&textlen=' + text.length;
                new Audio(voice_url).play();
            }
        }
    } 
} );

