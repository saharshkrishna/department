const animation = bodymovin.loadAnimation({
  container: document.getElementById('lottie-container'), // The container element
  renderer: 'svg', // Renderer type: 'svg', 'canvas', or 'html'
  loop: true, // Whether to loop the animation
  autoplay: true, // Whether to autoplay the animation
  path: '/department-website/frontend/assets/animations/Animation - 1736188365820.json' // Path to the JSON file
});

const animation1 = bodymovin.loadAnimation({
  container: document.getElementById('vision-animation'), // The container element
  renderer: 'svg', // Renderer type: 'svg', 'canvas', or 'html'
  loop: true, // Whether to loop the animation
  autoplay: true, // Whether to autoplay the animation
  path: '/department-website/frontend/assets/animations/Animation - 1736190151978.json' // Path to the JSON file
});

const animation2 = bodymovin.loadAnimation({
  container: document.getElementById('mission-animation'), // The container element
  renderer: 'svg', // Renderer type: 'svg', 'canvas', or 'html'
  loop: true, // Whether to loop the animation
  autoplay: true, // Whether to autoplay the animation
  path: '/department-website/frontend/assets/animations/Animation - 1736193497483.json' // Path to the JSON file
});