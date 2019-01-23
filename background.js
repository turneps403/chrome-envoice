/*
chrome.commands.onCommand.addListener(function(command) {
    if (command === 'flip-tabs-forward') {
        chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {action: "get_selected_text"}, (res) => { 
                if (res.hasOwnProperty("selected_text") && res.selected_text.length > 0) {
                    console.log('text is: '+ res.selected_text);
                    let text = res.selected_text;
                    let voice_url = 'https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=' + encodeURI(text) +  '&tl=en&total=1&idx=0&textlen=' + text.length;
                    new Audio(voice_url).play();
                } // else { console.log('just res: '+ res) }
            })
        });
    }
});
*/
