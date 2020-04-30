// File: fade.js
// Import Highway
import Highway from '@dogstudio/highway';


// Fade
class Fade extends Highway.Transition {
  in({ from, to, done }) {

    window.scrollTo(0, 0);
    console.log('from', from)
    from.remove();
    done();
  }

  out({ done }) {
    console.log('outtt')
    done();
  }
}

export {Fade};