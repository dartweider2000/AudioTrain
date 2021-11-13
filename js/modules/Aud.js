export default class Aud{
   constructor(src){
      this.audio = new Audio();
      this.src = src;
   }

   async init(){
      await this.load();
   }

   async load(){
      return new Promise((resolve, reject) => {
         this.audio.src = this.src;

         this.audio.addEventListener('loadeddata', resolve);
         this.audio.addEventListener('error', reject);
      });
   }

   play(){
      this.audio.play();
   }

   pause(){
      this.audio.pause();
   }

   get CurrentTime(){
      return this.audio.currentTime;
   }

   set CurrentTime(ms){
      this.audio.currentTime = ms;
   }
}