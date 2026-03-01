package com.socialapp.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    // ===== CURRENT USER =====
    @GetMapping("/me")
    public User getCurrentUser(Principal principal) {
        return userService.getByEmail(principal.getName());
    }

    // ===== VIEW OTHER USER =====
    @GetMapping("/{id}")
    public User getUser(@PathVariable String id) {
        return userService.getById(id);
    }

    // ===== LIST USERS =====
    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }
}