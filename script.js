document.addEventListener('DOMContentLoaded', function() {
    const layers = document.querySelectorAll('.layer');
    const colors = [
        'radial-gradient(circle, #ff7e5f, #feb47b)',
        'radial-gradient(circle, #ff6f61, #ffb3ba)',
        'radial-gradient(circle, #ffcccb, #feb47b)',
        'radial-gradient(circle, #56ab2f, #a8e063)',
        'radial-gradient(circle, #36d1dc, #5b86e5)'
    ];
    let colorIndex = 0;

    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth) - 0.5;
        const y = (e.clientY / window.innerHeight) - 0.5;

        layers.forEach((layer, index) => {
            const depth = index * -0.5;
            const movementX = x * 20 * (index + 1);
            const movementY = y * 20 * (index + 1);

            layer.style.transform = `translate3d(${movementX}px, ${movementY}px, ${depth}px) scale(${1 + (depth / 2)})`;
        });
    });

    document.addEventListener('click', () => {
        layers.forEach((layer) => {
            colorIndex = (colorIndex + 1) % colors.length;
            layer.style.background = colors[colorIndex];
            layer.style.transform += ' rotate(360deg)';
            layer.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        });
    });
});
