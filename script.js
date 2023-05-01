// Get a reference to the animate button
const animateBtn = document.getElementById('animate-btn');

// Add a click event listener to the animate button
animateBtn.addEventListener('click', () => {
  // Get a reference to the main content section
  const mainSection = document.querySelector('main');

  // Create a new div element to use as our animation element
  const animElement = document.createElement('div');

  // Set the initial position and size of our animation element
  animElement.style.position = 'absolute';
  animElement.style.top = '50%';
  animElement.style.left = '50%';
  animElement.style.width = '100px';
  animElement.style.height = '100px';
  animElement.style.backgroundColor = 'blue';

  // Add the animation element to the main content section
  mainSection.appendChild(animElement);

  // Animate the element using the Web Animations API
  const animation = animElement.animate(
    {
      transform: ['translate(-50%, -50%) scale(1)', 'translate(-50%, -50%) scale(2)'],
      opacity: [1, 0],
    },
    {
      duration: 1000,
      easing: 'ease-in-out',
    }
  );

  // Remove the animation element from the DOM once the animation has finished
  animation.onfinish = () => {
    mainSection.removeChild(animElement);
  };
});
