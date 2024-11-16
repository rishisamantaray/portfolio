document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
        const link = card.getAttribute('data-link');
        if (link) {
            window.open(link, '_blank');
        }
    });
});

// Attach event listeners to the remove buttons
document.querySelectorAll('.project-card').forEach(card => {
    const removeButton = document.createElement('button');
    removeButton.textContent = '×';
    card.appendChild(removeButton);

    // Add event listener for the remove button
    removeButton.addEventListener('click', () => {
        card.style.opacity = '0'; // Add fade-out effect
        setTimeout(() => {
            card.remove(); // Remove the card from DOM
            rearrangeCards(); // Call rearrange function
        }, 300); // Match fade-out transition duration
    });
});

// Rearrange cards (optional if Flexbox is sufficient for dynamic reordering)
function rearrangeCards() {
    const carousel = document.querySelector('.project-carousel');
    const cards = carousel.querySelectorAll('.project-card');
    if (cards.length === 0) {
        const noProjects = document.createElement('p');
        noProjects.textContent = 'No projects available.';
        noProjects.style.color = '#6200ea';
        carousel.appendChild(noProjects);
    }
}
