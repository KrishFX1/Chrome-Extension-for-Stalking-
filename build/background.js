window.onload = function (params) {
    chrome.extension.onMessage.addListener(
        function (request, sender, sendResponse) {
            console.log(request)
            if (request.body == "request0") {
                chrome.history.search({ text: '', startTime: 0, maxResults: 500 }, function (data) {
                    var a = []
                    data.forEach(function (page) {
                       
                        if(page.url.slice(0, 4) == "data"){

                        }else{
                            a.push(page.url)
                        }
                       
                    });
                    console.log(a)
                    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                        chrome.tabs.sendMessage(tabs[0].id, { body: a }, function (response) {
                        });
                    });
                });

            } else if (request.body == "request") {
                chrome.history.search({ text: '', startTime: 0, maxResults: 200 }, function (data) {
                    var a = []
                    data.forEach(function (page) {
                        if(page.url.slice(0, 4) == "data"){

                        }else{
                            a.push(page.url)
                        }
                       
                    });
                    console.log(a)
                    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                        chrome.tabs.sendMessage(tabs[0].id, { body: a }, function (response) {
                        });
                    });
                });

            }
        }
    );
}