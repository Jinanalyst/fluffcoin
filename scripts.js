// You can add some interactivity here, such as smooth scrolling, animations, etc.
document.addEventListener('DOMContentLoaded', function() {
    const ctaButton = document.querySelector('.cta-btn');
    
    ctaButton.addEventListener('click', function() {
        alert("Redirecting to FluffCoin purchase page...");
        window.location.href = "https://www.pancakeswap.finance/swap"; // Replace with actual purchase URL
    });
});
