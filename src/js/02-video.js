import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
player.on('timeupdate', throttle(saveCurretnTime, 1000));

function saveCurretnTime(currentTime) {
    localStorage.setItem("videoplayer-current-time",JSON.stringify(currentTime.seconds))
}
setCurrentTime()
function setCurrentTime() {
  if (
    localStorage.length > 0 &&
    Object.keys(localStorage).includes('videoplayer-current-time')
  ) {
    player.setCurrentTime(
      JSON.parse(localStorage.getItem('videoplayer-current-time'))
    );
  }
}
