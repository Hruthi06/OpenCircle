package com.socialapp.post;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/posts")
public class PostController {

    @Autowired
    private PostService postService;

    // ===== CREATE POST =====
    @PostMapping
    public Post createPost(
            @RequestBody Map<String, String> body,
            Principal principal
    ) {
        return postService.createPost(
                principal.getName(),
                body.get("content"),
                body.get("imageUrl")
        );
    }

    // ===== HOME FEED =====
    @GetMapping
    public List<Post> getFeed() {
        return postService.getFeed();
    }

    // ===== USER POSTS =====
    @GetMapping("/user/{userId}")
    public List<Post> getUserPosts(@PathVariable String userId) {
        return postService.getUserPosts(userId);
    }

    // ===== DELETE POST =====
    @DeleteMapping("/{postId}")
    public String deletePost(
            @PathVariable String postId,
            Principal principal
    ) {
        postService.deletePost(postId, principal.getName());
        return "POST DELETED";
    }
}