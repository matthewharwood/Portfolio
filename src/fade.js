// File: fade.js
// Import Highway
import Highway from '@dogstudio/highway';


// Fade
class Fade extends Highway.Transition {
  in({ from, to, done }) {
    if(typeof document === 'undefined') return;
    //
    // const keyframeTo = [
    //   {  opacity: 0},
    //   {  opacity: 1},
    // ];
    // const keyframeFrom = [
    //   {  opacity: 1},
    //   {  opacity: 0}
    // ];
    // to.animate(
    //     keyframeTo,
    //     {
    //       easing: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
    //       duration: 192,
    //       fill: 'forwards'
    //     }
    // );
    // from.animate(
    //     keyframeFrom,
    //     {
    //       easing: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
    //       duration: 192,
    //       fill: 'forwards'
    //     }
    // );

    from.remove();
    done();
  }

  out({ done }) {
    done();
  }
}

export {Fade};