// functionality for recording media(audio/video) stream
var Recorder = function () {
  this.mediaRecorder;
  this.recordedBlobs = [];
  this.options = { mimeType: CONSTRAINS.AUDIO.mimeType };
};
Recorder.prototype = {
  constructor: Recorder,
  setMimeType: function () {
    this.options = { mimeType: CONSTRAINS.VIDEO.mimeType };
    return this;
  },
  reInitializeMediaRecorder: function () {
    this.mediaRecorder = new MediaRecorder(window.stream, this.options);
    return this;
  },
  attachEvents: function () {
    this.mediaRecorder.onStop = this.handleStop;
    this.mediaRecorder.ondataavailable = this.handleDataAvailable;
    return this;
  },
  setConfigs: function () {
    this.mediaRecorder.start(10); // 20ms of data
    return this;
  },
  handleDataAvailable: function (event) {
    if (event.data && event.data.size > 0) {
      RECORDER.recordedBlobs.push(event.data);
    }
    return this;
  },
  handleStop: function (event) {
    console.log("Recorder Stopped", event);
    return this;
  },
  stop: function () {
    this.mediaRecorder.stop();
    return this;
  },
  clearRecordedBlobs: function () {
    this.recordedBlobs = [];
    return this;
  },
};
