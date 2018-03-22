import 'gsap/TweenLite';
import 'gsap/TimelineLite';
import 'gsap/CSSPlugin';
import 'gsap/ScrollToPlugin';

export const Tween = window.TweenMax || window.TweenLite;
export const Timeline = window.TimelineMax || window.TimelineLite;

Tween && (Tween.defaultEase = window.Power1.easeInOut);
Timeline && (Timeline.defaultEase = window.Power1.easeInOut);
