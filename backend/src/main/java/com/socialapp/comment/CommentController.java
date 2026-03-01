package com.socialapp.comment;

import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api/comments")
public class CommentController {

    // NOTE: For simplicity, comments are handled in-memory.
    // You can convert this to DB entity later.

    private final Map<String, List<String>> comments = new HashMap<>();

    // ===== ADD COMMENT =====
    @PostMapping("/{postId}")
    public String addComment(
            @PathVariable String postId,
            @RequestBody Map<String, String> body
    ) {
        comments.computeIfAbsent(postId, k -> new ArrayList<>())
                .add(body.get("comment"));

        return "COMMENT ADDED";
    }

    // ===== GET COMMENTS =====
    @GetMapping("/{postId}")
    public List<String> getComments(@PathVariable String postId) {
        return comments.getOrDefault(postId, new ArrayList<>());
    }
}