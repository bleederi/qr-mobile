
//video frame
var videoElement = document.querySelector('video');
videoElement.controls = false;
var videoURLBase = null;
var duration = null;


var constraints = { audio: true, video: { facingMode: "user" } };
navigator.mediaDevices.getUserMedia(constraints)
.then(function(stream) {
  /* Usage here */
})
.catch(function(err) {
    console.log('Error!', e);
});


