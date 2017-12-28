// controlling Recording
var RecordController = function () {
};
RecordController.prototype = {
  constructor: RecordController,
  startRecording: function () {
    RECORDER.clearRecordedBlobs()
            .setMimeType();
    try {
      RECORDER.reInitializeMediaRecorder();
    } catch (e) {
      alert(`Exception while creating MediaRecorder:${e}.mimeType: ${RECORDER.options.mimeType}`);
      return;
    }
    AUDIO_VIDEO.recordButton.textContent = "Stop Recording";
    AUDIO_VIDEO.playButton.disabled = true;

    RECORDER.attachEvents()
            .setConfigs();
    AUDIO_VIDEO.playButton.disabled = true;
    console.log("MediaRecorder started", RECORDER.mediaRecorder);
  },
  stopRecording: function () {
    RECORDER.stop();
    console.log("Recorded Blobs: ", RECORDER.recordedBlobs);
    AUDIO_VIDEO.recordedMedia.controls = true;
    AUDIO_VIDEO.playButton.disabled = false;
  },
};
