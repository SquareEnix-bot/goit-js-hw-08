import Player from '@vimeo/player';
import _throttle from 'lodash.throttle';

const player = new Player('vimeo-player');

player.on('timeupdate', _throttle(timeUpdate, 1000));

// * ця функція отримує секунду програвання
function timeUpdate(data) {  
  localStorage.setItem('videoplayer-current-time', data.seconds);// * зберігає у сховище поточну секунду
}

const currentTime = localStorage.getItem('videoplayer-current-time');// * виймає зі сховища поточну секунду

if (currentTime != 0) {
    player.setCurrentTime(currentTime);
};

