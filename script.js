document.addEventListener('DOMContentLoaded', function() {
    const balloonsContainer = document.querySelector('.balloons');
    const colors = ['#ff7e5f', '#feb47b', '#ff6f61', '#ffb3ba', '#ffcccb', '#36d1dc', '#5b86e5'];

    function createBalloon() {
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');
        balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        balloon.style.left = `${Math.random() * 100}%`;

        balloonsContainer.appendChild(balloon);

        setTimeout(() => {
            balloon.remove();
        }, 5000); // Remove balloon after it pops
    }

    // Create a new balloon every 1 second
    setInterval(createBalloon, 1000);
});
