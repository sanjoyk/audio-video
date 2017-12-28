// This class used for interacting with user action
var AudioVideo = function (options) {
  //options
  this.containerElem = options.containerElem || AudioVideo.DefaultValues.containerElem;
  this.mediaType = options.mediaType || AudioVideo.DefaultValues.mediaType;
  //created elements
  this.recordingMedia;
  this.recordedMedia;
  this.recordButton;
  this.playButton;

  //initializing
  this.createDOMElements();
  this.initialize();
  this.attachEvents();
};
AudioVideo.prototype = {
  constructor: AudioVideo,

  createDOMElements: function () {
    //making template for audio or video and adding"rotateVideoRecording" css class for rotating window
    var template = this.getTemplate(this.mediaType)(this.mediaType === CONSTANTS.VIDEO ? "rotateVideoRecording" : "");
    this.containerElem.innerHTML = template;
  },
  //making template
  getTemplate: function (mediaType) {
    return function (rotateVideoRecording) {
      return '<div class="controller"> \
                <button id="record" class="record" disabled>Start Recording</button> \
                <button id="play" class="play" disabled>Play</button> \
              </div><br/>\
              <' + mediaType +' id="recordingMedia" class="viewWidth ' + rotateVideoRecording +'" autoplay muted></' + mediaType + '> \
              <' + mediaType +' id="recorded" autoplay  class="viewWidth" controls></' + mediaType +'> ';
    };
  },
  initialize: function () {
    //refering all elements
    this.recordingMedia = document.getElementById("recordingMedia");
    this.recordedMedia = document.getElementById("recorded");
    this.recordButton = document.getElementById("record");
    this.playButton = document.getElementById("play");
  },
  attachEvents: function () {
    this.playButton.onclick = this.play;
    this.recordButton.onclick = this.toggleRecording;
  },
  play: function () {
    var superBuffer = new Blob(RECORDER.recordedBlobs, { type: AUDIO_VIDEO.mediaType === CONSTANTS.VIDEO ? CONSTRAINS.VIDEO.mimeType : CONSTRAINS.AUDIO.mimeType });
    AUDIO_VIDEO.recordedMedia.src = window.URL.createObjectURL(superBuffer);
  },
  toggleRecording: function () {
    if (AUDIO_VIDEO.recordButton.textContent === "Start Recording") {
      RECORD_CONTROLLER.startRecording();
    } else {
      RECORD_CONTROLLER.stopRecording();
      AUDIO_VIDEO.recordButton.textContent = "Start Recording";
    }
  },
};
AudioVideo.DefaultValues = {
  containerElem: document.getElementsByTagName("body")[0],
  mediaType: CONSTANTS.AUDIO,
};
