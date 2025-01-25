document.querySelectorAll('.sidebar-button').forEach(button => {
    button.addEventListener('click', (event) => {
        const buttonText = event.target.textContent;

        // Hide project details and show the modal
        document.getElementById('projectContainer').style.display = 'none';
        const mainContent = document.querySelector('.main-content');
        mainContent.style.opacity = '0';

        setTimeout(() => {
            switch (buttonText) {
                case 'Chat':
                    document.getElementById('chatModal').style.display = 'block';
                    break;
                case 'Friends':
                    document.getElementById('friendsModal').style.display = 'block';
                    break;
                case 'Upload Files':
                    document.getElementById('uploadModal').style.display = 'block';
                    break;
                case 'Follow-ups':
                    document.getElementById('followModal').style.display = 'block';
                    break;
                default:
                    break;
            }
        }, 500);
    });
});

// Close modals and show project again
document.getElementById('closeChatModal').addEventListener('click', () => {
    document.getElementById('chatModal').style.display = 'none';
    document.getElementById('projectContainer').style.display = 'block';
    document.querySelector('.main-content').style.opacity = '1';
});

document.getElementById('closeFriendsModal').addEventListener('click', () => {
    document.getElementById('friendsModal').style.display = 'none';
    document.getElementById('projectContainer').style.display = 'block';
    document.querySelector('.main-content').style.opacity = '1';
});

document.getElementById('closeUploadModal').addEventListener('click', () => {
    document.getElementById('uploadModal').style.display = 'none';
    document.getElementById('projectContainer').style.display = 'block';
    document.querySelector('.main-content').style.opacity = '1';
});

document.getElementById('closeFollowModal').addEventListener('click', () => {
    document.getElementById('followModal').style.display = 'none';
    document.getElementById('projectContainer').style.display = 'block';
    document.querySelector('.main-content').style.opacity = '1';
});

// Send message in Chat
document.getElementById('sendChatMessage').addEventListener('click', () => {
    const userMessage = document.getElementById('chatInput').value;
    if (userMessage.trim()) {
        const messageContainer = document.createElement('p');
        messageContainer.classList.add('user-message');
        messageContainer.textContent = userMessage;
        document.getElementById('chatMessages').appendChild(messageContainer);
        document.getElementById('chatInput').value = '';
        document.getElementById('chatMessages').scrollTop = document.getElementById('chatMessages').scrollHeight;

        // Simulate bot reply
        setTimeout(() => {
            const botReply = document.createElement('p');
            botReply.classList.add('bot-message');
            botReply.textContent = "Thank you for your message!";
            document.getElementById('chatMessages').appendChild(botReply);
            document.getElementById('chatMessages').scrollTop = document.getElementById('chatMessages').scrollHeight;
        }, 1000);
    }
});

// Send friend request
document.getElementById('sendRequest').addEventListener('click', () => {
    const friendName = document.getElementById('friendName').value;
    if (friendName.trim()) {
        alert(`Friend request sent to ${friendName}`);
        document.getElementById('friendsModal').style.display = 'none';
    } else {
        alert('Please enter a username');
    }
});

// Upload file
document.getElementById('uploadFile').addEventListener('click', () => {
    const fileInput = document.getElementById('fileInput');
    if (fileInput.files.length > 0) {
        alert('File uploaded successfully!');
        document.getElementById('uploadModal').style.display = 'none';
    } else {
        alert('Please select a file to upload');
    }
});
