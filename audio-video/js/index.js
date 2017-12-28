// 'AV' is used as audio-video module namespace,
var AV = function () {
  var isVideo = document.getElementById("mediaType").checked;
  AUDIO_VIDEO = new AudioVideo({
    containerElem: document.getElementById("container"),
    mediaType: isVideo ? CONSTANTS.VIDEO : CONSTANTS.AUDIO,
  });
  USER_MEDIA = new UserMedia();
  RECORD_CONTROLLER = new RecordController();
  RECORDER = new Recorder();
};

// initialized audio-video module, at page loading
AV();
