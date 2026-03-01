async function createPost() {
    const content = document.getElementById('post-content').value;

    if (!content) {
        alert("Post content cannot be empty.");
        return;
    }

    const token = getToken();
    if (!token) {
        alert("You must be logged in to post.");
        window.location.href = "index.html";
        return;
    }

    try {
        const res = await fetch(`${API}/posts`, {
            method: 'POST',
            headers: getAuthHeaders(),
            body: JSON.stringify({
                content: content,
                imageUrl: "" // Image upload feature to be added later
            })
        });

        if (res.ok) {
            alert("Post created successfully!");
            window.location.href = "home.html";
        } else {
            const err = await res.text();
            alert("Failed to create post: " + err);
        }
    } catch (err) {
        console.error("Error creating post:", err);
        alert("Connection error occurred.");
    }
}
