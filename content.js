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
            text = text.match(/\w+/)[0].toLowerCase();
            if (text !== '') {
                let voice_url = 'https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=' + encodeURI(text) +  '&tl=en&total=1&idx=0&textlen=' + text.length;
                let au = new Audio();
                au.onerror = () => {
                    console.log('error');
                    let one_char = text.substring(0, 1);
                    let three_chars = text.substring(0, 3).padEnd(3, '_');
                    let five_chars = text.substring(0, 5).padEnd(5, '_');
                    voice_url = 'https://dictionary.cambridge.org/media/english/us_pron/'+ encodeURIComponent(one_char) +'/'+ encodeURIComponent(three_chars) +'/'+ encodeURIComponent(five_chars) +'/'+ encodeURIComponent(text) +'.mp3';
                    new Audio(voice_url).play();
                };
                au.src = voice_url;
                au.play();
            }
        }
    } 
} );

