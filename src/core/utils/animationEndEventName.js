function transitionEndEventName() {
  const el = document.createElement('span');
  const transitions = {
    transition: 'animationend',
    OTransition: 'oAnimationEnd',
    MozTransition: 'animationend',
    WebkitTransition: 'webkitAnimationEnd'
  };

  for (let transition in transitions) {
    if (el.style[transition] !== undefined) {
      return transitions[transition];
    }
  }
}

export default transitionEndEventName();
