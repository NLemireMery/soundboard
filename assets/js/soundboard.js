const soundboard = {

    /* Properties of DOM elements declared */
    kickElement: null,
    hihatElement: null,
    snareElement: null,
    wobbleElement: null,
    vocalElement: null,
    scratchElement: null,
    
    /* Properties of audio elements declared */
    kickAudio: null,
    hihatAudio: null,
    snareAudio: null,
    wobbleAudio: null,
    vocalAudio: null,
    scratchAudio: null,
  
    /**
     * Soundboard initialization
     */
    init: function() {
      console.log('soundboard.init');
      soundboard.definePads();
      soundboard.preloadSamples();
      soundboard.attachEvents();
    },
  
    /**
     * Select the DOM elements of the pads
     */
    definePads: function() {
      soundboard.kickElement = document.querySelector('.pad-1');
      soundboard.hihatElement = document.querySelector('.pad-2');
      soundboard.snareElement = document.querySelector('.pad-3');
      soundboard.wobbleElement = document.querySelector('.pad-4');
      soundboard.vocalElement = document.querySelector('.pad-5');
      soundboard.scratchElement = document.querySelector('.pad-6');
    },
  
    /**
     * Initialize and preload the audio elements
     */
    preloadSamples: function() {
      soundboard.kickAudio = new Audio('assets/audio/kick.opus');
      soundboard.hihatAudio = new Audio('assets/audio/hihat.opus');
      soundboard.snareAudio = new Audio('assets/audio/snare.opus');
      soundboard.wobbleAudio = new Audio('assets/audio/wobble.opus');
      soundboard.vocalAudio = new Audio('assets/audio/voice.opus');
      soundboard.scratchAudio = new Audio('assets/audio/scratch.opus');
    },
  
    /**
     * Handler for when the kick pad is played
     */
    handleKickClick: function() {
      soundboard.kickAudio.currentTime = 0;
      soundboard.kickAudio.play();
    },
  
    /**
     * Handler for when the hi-hat pad is played
     */
    handleHihatClick: function() {
      soundboard.hihatAudio.currentTime = 0;
      soundboard.hihatAudio.play();
    },
  
    /**
     * Handler for when the snare pad is played
     */
    handleSnareClick: function() {
      soundboard.snareAudio.currentTime = 0;
      soundboard.snareAudio.play();
    },
  
    /**
     * Handler for when the wobble pad is played
     */
    handleWobbleClick: function() {
      soundboard.wobbleAudio.currentTime = 0;
      soundboard.wobbleAudio.play();
    },
  
    /**
     * Handler for when the vocal pad is played
     */
    handleFxClick: function() {
      soundboard.vocalAudio.currentTime = 0;
      soundboard.vocalAudio.play();
    },
  
    /**
     * Handler for when the scratch pad is played
     */
    handleScratchClick: function() {
      soundboard.scratchAudio.currentTime = 0;
      soundboard.scratchAudio.play();
    },
  
    /**
    * Handler for when the keys are pressed
    */
    handleKeyboard: function(event) {
      if (event.key === 'a') { 
        soundboard.kickElement.classList.add('active');
        soundboard.kickElement.click(); }
  
      if (event.key === 'z') { 
        soundboard.hihatElement.classList.add('active');
        soundboard.hihatElement.click(); }
  
      if (event.key === 'e') { 
        soundboard.snareElement.classList.add('active');
        soundboard.snareElement.click(); }
  
      if (event.key === 'q') { 
        soundboard.wobbleElement.classList.add('active');
        soundboard.wobbleElement.click(); }
  
      if (event.key === 's') { 
        soundboard.vocalElement.classList.add('active');
        soundboard.vocalElement.click(); }
  
      if (event.key === 'd') { 
        soundboard.scratchElement.classList.add('active');
        soundboard.scratchElement.click(); }
    },
  
    /**
    * Handler for when the keys are released
    */
     handleKeysUp: function(event) {
      if (event.key === 'a') { soundboard.kickElement.classList.remove('active'); }
      if (event.key === 'z') { soundboard.hihatElement.classList.remove('active'); }
      if (event.key === 'e') { soundboard.snareElement.classList.remove('active'); }
      if (event.key === 'q') { soundboard.wobbleElement.classList.remove('active'); }
      if (event.key === 's') { soundboard.vocalElement.classList.remove('active'); }
      if (event.key === 'd') { soundboard.scratchElement.classList.remove('active'); }
    },
  
    /**
     * Event listener for each pad when clicked
     */
    attachEvents: function() {
      soundboard.kickElement.addEventListener('click', soundboard.handleKickClick);
      soundboard.hihatElement.addEventListener('click', soundboard.handleHihatClick);
      soundboard.snareElement.addEventListener('click', soundboard.handleSnareClick);
      soundboard.wobbleElement.addEventListener('click', soundboard.handleWobbleClick);
      soundboard.vocalElement.addEventListener('click', soundboard.handleFxClick);
      soundboard.scratchElement.addEventListener('click', soundboard.handleScratchClick);
  
      /* Event listener for when the keys are pressed */
      document.addEventListener('keydown', soundboard.handleKeyboard);
  
      /* Event listener for when the keys are released */
      document.addEventListener('keyup', soundboard.handleKeysUp);
    }
  
  }