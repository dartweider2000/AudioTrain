//use strict
import Aud from './modules/Aud.js'

document.querySelector('.button').addEventListener('click', async () => {
   const audio = new Aud('../../audio/tanksAudio.mp3');

   await audio.init();

   console.log(audio);

   audio.CurrentTime = 1;

   audio.play();

   const go = async time => {
      return new Promise(resolve => {
         setTimeout(() => {
            //if(audio.CurrentTime * 1000 == )
               audio.pause();

            console.log(audio.CurrentTime);
            //console.log(audio);
            resolve();
         }, time);

      })
   };

   console.log("!!");

   await go(1000);
});