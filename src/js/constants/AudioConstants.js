(function(factory) {

  define([], factory);

})(function() {

  var contants = {
    // actions
    'PLAY_APPOINTED_TRACK': 'PLAY_APPOINTED_TRACK',
    'AUDIO_CHANGE_VOLUME': 'AUDIO_CHANGE_VOLUME',
    'AUDIO_TOGGLE_MUTE': 'AUDIO_TOGGLE_MUTE',
    'TOGGLE_LOOP_MODE': 'TOGGLE_LOOP_MODE',
    'TOGGLE_SHUFFLE_MODE': 'TOGGLE_SHUFFLE_MODE',
    'MODE_CHANGE': 'MODE_CHANGE',
    'RESET_PLAYED_TRACKLIST': 'RESET_PLAYED_TRACKLIST',

    // audio api callbacks
    'AUDIO_UPDATE_CURRENT_TIME': 'AUDIO_UPDATE_CURRENT_TIME',
    'AUDIO_CHANGE_CURRENT_TIME': 'AUDIO_CHANGE_CURRENT_TIME',
    'AUDIO_PLAYING': 'AUDIO_PLAYING',
    'AUDIO_PAUSE': 'AUDIO_PAUSE',
    'AUDIO_ENDED': 'AUDIO_ENDED'
  }

  return contants;

});