const app = {

    /**
     * App initialization
     */
    init: function() {
      console.log('app.init');
      soundboard.init();
    },
  
  }
  
  /* Event listener when DOM is loaded */
  document.addEventListener('DOMContentLoaded', app.init);