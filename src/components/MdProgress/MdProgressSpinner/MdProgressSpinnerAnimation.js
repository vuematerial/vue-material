export default `
  @keyframes md-progress-spinner-stroke-rotate-DIAMETER {
    0% {
      stroke-dashoffset: START_VALUE;
      transform: rotate(0);
    }

    12.5% {
      stroke-dashoffset: END_VALUE;
      transform: rotate(0);
    }

    12.51% {
      stroke-dashoffset: END_VALUE;
      transform: rotateX(180deg) rotate(72.5deg);
    }

    25% {
      stroke-dashoffset: START_VALUE;
      transform: rotateX(180deg) rotate(72.5deg);
    }

    25.1% {
      stroke-dashoffset: START_VALUE;
      transform: rotate(270deg);
    }

    37.5% {
      stroke-dashoffset: END_VALUE;
      transform: rotate(270deg);
    }

    37.51% {
      stroke-dashoffset: END_VALUE;
      transform: rotateX(180deg) rotate(161.5deg);
    }

    50% {
      stroke-dashoffset: START_VALUE;
      transform: rotateX(180deg) rotate(161.5deg);
    }

    50.01% {
      stroke-dashoffset: START_VALUE;
      transform: rotate(180deg);
    }

    62.5% {
      stroke-dashoffset: END_VALUE;
      transform: rotate(180deg);
    }

    62.51% {
      stroke-dashoffset: END_VALUE;
      transform: rotateX(180deg) rotate(251.5deg);
    }

    75% {
      stroke-dashoffset: START_VALUE;
      transform: rotateX(180deg) rotate(251.5deg);
    }

    75.01% {
      stroke-dashoffset: START_VALUE;
      transform: rotate(90deg);
    }

    87.5% {
      stroke-dashoffset: END_VALUE;
      transform: rotate(90deg);
    }

    87.51% {
      stroke-dashoffset: END_VALUE;
      transform: rotateX(180deg) rotate(341.5deg);
    }

    100% {
      stroke-dashoffset: START_VALUE;
      transform: rotateX(180deg) rotate(341.5deg);
    }
  }
`
