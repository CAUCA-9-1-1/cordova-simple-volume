module.exports = {
  init: function (options, successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, "VolumeControl", "initCommand", [options]);
  },

  destroy: function () {
    cordova.exec(null, null, "VolumeControl", "destroyCommand", null);
  },

  setVolume: function (volume) {
    cordova.exec(null, null, "VolumeControl", "setVolumeCommand", [volume]);
  },

  getVolume: function () {
    return new Promise((resolve, reject) => {
      cordova.exec((volume) => {
        resolve(parseFloat(volume))
      }, () => {
        reject("error getting volume")
      }, "VolumeControl", "getVolumeCommand");
    })
  },

  getNotificationVolume: function () {
    return new Promise((resolve, reject) => {
      cordova.exec((volume) => {
        resolve(parseFloat(volume))
      }, () => {
        reject("error getting notification volume")
      }, "VolumeControl", "getNotificationVolumeCommand");
    })
  },

  getRingVolume: function () {
    return new Promise((resolve, reject) => {
      cordova.exec((volume) => {
        resolve(parseFloat(volume))
      }, () => {
        reject("error getting ring call volume")
      }, "VolumeControl", "getRingVolumeCommand");
    })
  }
};