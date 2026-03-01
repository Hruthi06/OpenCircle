package com.socialapp.comment;

import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.*;

@RestController
@RequestMapping("/api/follow")
public class FollowController {

    // follower → following list
    private final Map<String, Set<String>> follows = new HashMap<>();

    // ===== FOLLOW USER =====
    @PostMapping("/{userId}")
    public String followUser(
            @PathVariable String userId,
            Principal principal) {
        follows
                .computeIfAbsent(principal.getName(), k -> new HashSet<>())
                .add(userId);

        return "FOLLOWED";
    }

    // ===== GET FOLLOWING =====
    @GetMapping
    public Set<String> getFollowing(Principal principal) {
        return follows.getOrDefault(principal.getName(), new HashSet<>());
    }
}