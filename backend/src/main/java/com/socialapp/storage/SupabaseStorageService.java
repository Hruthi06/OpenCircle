package com.socialapp.storage;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.UUID;

@Service
public class SupabaseStorageService {

    // NOTE:
    // This is a MOCK service to demonstrate file handling logic.
    // Real Supabase SDK can be plugged in later.

    public String uploadImage(MultipartFile file) {

        if (file == null || file.isEmpty()) {
            return null;
        }

        // Generate unique file name
        String fileName = UUID.randomUUID() + "_" + file.getOriginalFilename();

        // In real case → upload to Supabase bucket
        // Here → simulate URL
        return "https://supabase.storage/" + fileName;
    }
}