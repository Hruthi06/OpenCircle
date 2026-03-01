package com.socialapp.admin;

import com.socialapp.user.UserService;
import com.socialapp.post.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

    @Autowired
    private UserService userService;

    @Autowired
    private PostService postService;

    // ===== BLOCK USER =====
    @PostMapping("/block/{userId}")
    public String blockUser(@PathVariable String userId) {
        userService.blockUser(userId);
        return "USER BLOCKED";
    }

    // ===== DELETE ANY POST =====
    @DeleteMapping("/post/{postId}")
    public String deletePost(@PathVariable String postId) {
        // Admin can delete without ownership
        postService.deletePost(postId, "ADMIN");
        return "POST DELETED BY ADMIN";
    }
}