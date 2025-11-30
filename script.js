document.addEventListener('DOMContentLoaded', () => {
    const modalOverlay = document.getElementById('modalOverlay');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    const closeButton = document.getElementById('closeButton');
    const cards = document.querySelectorAll('.card');

    // Open Modal
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const contentId = card.getAttribute('data-content-id');
            const contentSource = document.getElementById(contentId);
            const title = card.querySelector('.card-title').textContent;

            if (contentSource) {
                modalTitle.textContent = title;
                modalBody.innerHTML = contentSource.innerHTML;
                modalOverlay.classList.add('active');
                document.body.style.overflow = 'hidden'; // Prevent background scrolling
            }
        });
    });

    // Close Modal Function
    const closeModal = () => {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
        setTimeout(() => {
            modalBody.innerHTML = ''; // Clear content after animation
        }, 300);
    };

    // Close on Button Click
    closeButton.addEventListener('click', closeModal);

    // Close on Overlay Click
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });

    // Close on Escape Key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
            closeModal();
        }
    });
});
