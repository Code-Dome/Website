document.addEventListener('DOMContentLoaded', function() {
    const successMessage = document.getElementById('success-message');

    document.getElementById('subscribe-form').addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('Form submitted!'); // Check if this message appears in the console

        // Show success message toast
        showSuccessMessage();

        // Trigger confetti animation
        triggerConfetti();
    });

    function showSuccessMessage() {
        if (successMessage) {
            successMessage.classList.remove('hidden');
            successMessage.classList.add('show');

            // Hide toast message after 5 seconds
            setTimeout(function() {
                successMessage.classList.remove('show');
                successMessage.classList.add('hidden');
            }, 5000); // 5000 milliseconds = 5 seconds
        }
    }
});

function triggerConfetti() {
    // Configure confetti settings
    const duration = 3 * 1000; // 3 seconds
    const confettiSettings = {
        target: 'confetti-canvas',
        max: 200,
        size: 1,
        animate: true,
        props: ['circle', 'square', 'triangle', 'line'],
        colors: [[255, 165, 0], [255, 0, 0], [255, 255, 0], [0, 255, 0], [0, 0, 255]],
        clock: 25
    };

    // Trigger confetti animation
    window.confetti(confettiSettings);
}
