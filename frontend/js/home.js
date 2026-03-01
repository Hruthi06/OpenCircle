document.addEventListener('DOMContentLoaded', loadGlobalFeed);

async function loadGlobalFeed() {
  const token = getToken();
  if (!token) {
    alert("You must be logged in to view the feed.");
    window.location.href = "index.html";
    return;
  }

  try {
    const res = await fetch(`${API}/posts`, {
      method: 'GET',
      headers: getAuthHeaders()
    });

    if (res.ok) {
      const posts = await res.json();
      renderFeed(posts);
    } else if (res.status === 403 || res.status === 401) {
      alert("Session expired. Please log in again.");
      logout();
    } else {
      console.error("Failed to load feed", res.status);
    }
  } catch (err) {
    console.error("Error loading feed:", err);
  }
}

function renderFeed(posts) {
  const feedContainer = document.querySelector('.feed');
  feedContainer.innerHTML = ''; // Clear loading text

  if (!posts || posts.length === 0) {
    feedContainer.innerHTML = '<p>No posts yet! Be the first to create one.</p>';
    return;
  }

  posts.forEach(post => {
    // Handling undefined properties depending on exact backend response schema
    const username = post.user ? post.user.username : 'Unknown User';
    const caption = post.caption || '';

    // Create card
    const card = document.createElement('div');
    card.className = 'post-card card';

    card.innerHTML = `
      <h3>@${username}</h3>
      <p>${caption}</p>
      <div class="actions">
        <button onclick="like(this)">❤️</button>
        <button onclick="comment()">💬</button>
      </div>
    `;

    feedContainer.appendChild(card);
  });
}

function like(btn) {
  btn.classList.toggle("liked");
}

function comment() {
  alert("Comment feature coming soon!");
}