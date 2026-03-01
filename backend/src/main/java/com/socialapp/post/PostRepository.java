package com.socialapp.post;

import com.socialapp.user.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PostRepository extends JpaRepository<Post, String> {

    List<Post> findByUser(User user);

    List<Post> findByDeletedFalseOrderByCreatedAtDesc();
}