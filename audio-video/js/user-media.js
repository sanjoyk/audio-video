//opening media for audio or video accessing
var UserMedia = function () {
  this.streamData;
  this.initialize();
};
UserMedia.prototype = {
  constructor: UserMedia,
  //initializing available media for accessing audio/video
  initialize: function () {
    navigator
      .mediaDevices
      .getUserMedia(AUDIO_VIDEO.mediaType === CONSTANTS.VIDEO ? CONSTRAINS.VIDEO.constraints : CONSTRAINS.AUDIO.constraints)
      .then(this.handleSuccess)
      .catch(this.handleError);
  },
  handleSuccess: function (stream) {
    AUDIO_VIDEO.recordButton.disabled = false;
    window.stream = stream;
    this.streamData = stream;
    AUDIO_VIDEO.recordingMedia.srcObject = stream;
  },
  handleError: function (e) {
    alert("respected media is not supported");
  },
};
