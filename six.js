// Sidebar button actions
document.querySelectorAll('.sidebar-button').forEach(button => {
    button.addEventListener('click', (event) => {
        const buttonText = event.target.textContent;

        // Hide project details and show modal
        switch (buttonText) {
            case 'Chat':
                openModal('chatModal');
                break;
            case 'Students':
                openModal('studentsModal');
                break;
            case 'Upload Files':
                openModal('uploadModal');
                break;
            case 'Add Project':
                openModal('addProjectModal');
                break;
            default:
                break;
        }
    });
});

// Open modal function
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'flex';
}

// Close modals
document.querySelectorAll('.close-button').forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        if (modal) {
            modal.style.display = 'none';
        }
    });
});

// Submit project form
document.getElementById('submitProject').addEventListener('click', (e) => {
    e.preventDefault();
    alert('Project added successfully!');
    document.getElementById('addProjectModal').style.display = 'none';
});
