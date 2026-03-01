package com.socialapp.post;

import com.socialapp.user.User;
import com.socialapp.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostService {

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private UserService userService;

    // ===== CREATE POST =====
    public Post createPost(String email, String content, String imageUrl) {
        User user = userService.getByEmail(email);

        if (user.isBlocked()) {
            throw new RuntimeException("User is blocked");
        }

        Post post = new Post();
        post.setUser(user);
        post.setContent(content);
        post.setImageUrl(imageUrl);

        return postRepository.save(post);
    }

    // ===== FEED =====
    public List<Post> getFeed() {
        return postRepository.findByDeletedFalseOrderByCreatedAtDesc();
    }

    // ===== USER POSTS =====
    public List<Post> getUserPosts(String userId) {
        User user = userService.getById(userId);
        return postRepository.findByUser(user);
    }

    // ===== DELETE OWN POST =====
    public void deletePost(String postId, String email) {
        Post post = postRepository.findById(postId)
                .orElseThrow(() -> new RuntimeException("Post not found"));

        if (!post.getUser().getEmail().equals(email)) {
            throw new RuntimeException("Unauthorized");
        }

        post.setDeleted(true);
        postRepository.save(post);
    }
}