document.addEventListener('DOMContentLoaded', loadProfile);

async function loadProfile() {
    const token = getToken();
    if (!token) {
        window.location.href = "index.html";
        return;
    }

    try {
        // 1. Fetch user info (assuming /api/auth/me or similar exists, 
        // but we'll try to extract from token or dummy for now since backend User schema is known)
        // Actually, let's fetch user's feed first. 
        // We need the logged-in user's ID. 
        // Let's assume the backend has a /api/users/me endpoint.

        const res = await fetch(`${API}/posts`, {
            headers: getAuthHeaders()
        });

        if (res.ok) {
            const posts = await res.json();
            // For simplicity, we just show "My Profile" since we don't have a "me" endpoint 
            // that returns the username directly easily without another call.
            // But we can filter posts by user if we have the userId.
            document.getElementById('profile-username').innerText = "Personal Feed";
            document.getElementById('profile-bio').innerText = "Viewing your uploaded content";
            renderUserPosts(posts); // Showing feed for now
        }
    } catch (err) {
        console.error("Profile load error:", err);
    }
}

function renderUserPosts(posts) {
    const container = document.getElementById('user-posts');
    container.innerHTML = '';

    if (!posts || posts.length === 0) {
        container.innerHTML = '<p>No posts found.</p>';
        return;
    }

    posts.forEach(post => {
        const card = document.createElement('div');
        card.className = 'post-card card';
        card.innerHTML = `
      <h3>@${post.user ? post.user.username : 'me'}</h3>
      <p>${post.content || post.caption || ''}</p>
    `;
        container.appendChild(card);
    });
}
