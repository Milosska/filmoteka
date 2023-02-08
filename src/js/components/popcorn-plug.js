import { TweenMax, TimelineMax, Power1 } from 'gsap/all';

export default function animateFace() {
  var mouth = document.getElementById('mouth');
  var popcorn = document.querySelectorAll('#popcorn');
  var rightCheek = document.getElementById('cheek--right');
  var leftCheek = document.getElementById('cheek--left');
  var light = document.querySelectorAll('#light');
  var leftEye = document.getElementById('eye--left');
  var rightEye = document.getElementById('eye--right');
  var leftEyebrow = document.getElementById('eyebrow--left');
  var rightEyebrow = document.getElementById('eyebrow--right');
  var chin = document.getElementById('chin');
  var hand = document.getElementById('hand');

  // Sets lights to off
  TweenMax.set(light, { opacity: 0 });

  // Light flicker
  var tl = new TimelineMax({ delay: 0.3 });

  tl.to(light, 0.1, { opacity: 1 })
    .to(light, 0.1, { opacity: 0 })
    .to(light, 0.1, { opacity: 1 })
    .to(light, 0.1, { opacity: 0 })
    .to(light, 0.1, { opacity: 1 })
    .to(light, 0.1, { opacity: 0 })
    .to(light, 0.05, { opacity: 1 })
    .to(light, 0.05, { opacity: 0 })
    .to(light, 0.05, { opacity: 1 });

  // Mouth Chewing
  var tl = new TimelineMax({ delay: 1.7, repeat: 2 });

  tl.to(mouth, 0.2, { transformOrigin: '50% 70%', scale: 0.3 })
    .to(mouth, 0.2, { y: -5 })
    .to(mouth, 0.3, { y: 5 })
    .to(mouth, 0.2, { y: -5 })
    .to(mouth, 0.3, { y: 5 })
    .to(mouth, 0.2, { y: -5 })
    .to(mouth, 0.3, { y: 5 })
    .to(mouth, 0.2, { y: -5 })
    .to(mouth, 0.3, { y: 5 })
    .to(mouth, 0.2, { y: -5 })
    .to(mouth, 0.3, { y: 5 })
    .to(mouth, 0.2, { y: -3 })
    .to(mouth, 0.3, { y: 1 })
    .to(mouth, 0.3, { y: 0, scale: 1 });

  // Chin
  var tl = new TimelineMax({ delay: 1.9, repeat: 2 });

  tl.to(chin, 0.2, { y: -5 })
    .to(chin, 0.3, { y: 5 })
    .to(chin, 0.2, { y: -5 })
    .to(chin, 0.3, { y: 5 })
    .to(chin, 0.2, { y: -5 })
    .to(chin, 0.3, { y: 5 })
    .to(chin, 0.2, { y: -5 })
    .to(chin, 0.3, { y: 5 })
    .to(chin, 0.2, { y: -5 })
    .to(chin, 0.3, { y: 5 })
    .to(chin, 0.2, { y: -5 })
    .to(chin, 0.3, { y: 3 })
    .to(chin, 0.2, { y: -1 })
    .to(chin, 0.3, { y: 0 });

  // Right Cheek
  var tl = new TimelineMax({ delay: 1.9, repeat: 2 });

  tl.to(rightCheek, 0.2, { y: -1 })
    .to(rightCheek, 0.3, { y: 1 })
    .to(rightCheek, 0.2, { y: -1 })
    .to(rightCheek, 0.3, { y: 1 })
    .to(rightCheek, 0.2, { y: -1 })
    .to(rightCheek, 0.3, { y: 1 })
    .to(rightCheek, 0.2, { y: -1 })
    .to(rightCheek, 0.3, { y: 1 })
    .to(rightCheek, 0.2, { y: -1 })
    .to(rightCheek, 0.3, { y: 1 })
    .to(rightCheek, 0.2, { y: -1 })
    .to(rightCheek, 0.3, { y: 1 })
    .to(rightCheek, 0.2, { y: -0.5 })
    .to(rightCheek, 0.3, { y: 0 });

  // Left Cheek
  var tl = new TimelineMax({ delay: 1.9, repeat: 2 });

  tl.to(leftCheek, 0.2, { y: -1 })
    .to(leftCheek, 0.3, { y: 1 })
    .to(leftCheek, 0.2, { y: -1 })
    .to(leftCheek, 0.3, { y: 1 })
    .to(leftCheek, 0.2, { y: -1 })
    .to(leftCheek, 0.3, { y: 1 })
    .to(leftCheek, 0.2, { y: -1 })
    .to(leftCheek, 0.3, { y: 1 })
    .to(leftCheek, 0.2, { y: -1 })
    .to(leftCheek, 0.3, { y: 1 })
    .to(leftCheek, 0.2, { y: -1 })
    .to(leftCheek, 0.3, { y: 1 })
    .to(leftCheek, 0.2, { y: -0.5 })
    .to(leftCheek, 0.3, { y: 0 });

  // Right Eye
  var tl = new TimelineMax({ repeat: 2 });

  tl.to(rightEye, 0.2, { transformOrigin: '50% 100%', scale: 0, delay: 3.5 })
    .to(rightEye, 0.2, { scale: 1 })
    .to(rightEye, 0.2, { transformOrigin: '50% 100%', scale: 0 })
    .to(rightEye, 0.2, { scale: 1 });

  // Left Eye
  var tl = new TimelineMax({ repeat: 2 });

  tl.to(leftEye, 0.2, { transformOrigin: '50% 100%', scale: 0, delay: 3.5 })
    .to(leftEye, 0.2, { scale: 1 })
    .to(leftEye, 0.2, { transformOrigin: '50% 100%', scale: 0 })
    .to(leftEye, 0.2, { scale: 1 });

  // Popcorn falling
  TweenMax.staggerTo(popcorn, 0.5, { y: 300, ease: Power1.easeIn }, 0.1);

  // Hand
  var tl = new TimelineMax();

  TweenMax.set(hand, { transformOrigin: '130% 120%', rotation: 45 });
  tl.to(hand, 0.5, { rotation: 0 })
    .to(hand, 0.3, { rotation: 45 }, '+=4.45')
    .to(hand, 0.5, { rotation: 0 })
    .to(hand, 0.3, { rotation: 45 }, '+=2.75')
    .to(hand, 0.5, { rotation: 0 });
}
