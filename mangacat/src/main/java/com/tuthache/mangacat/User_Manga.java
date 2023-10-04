package com.tuthache.mangacat;

import org.springframework.boot.autoconfigure.domain.EntityScan;

@EntityScan
@Table(name = "Users")
public class User_Manga {
    
    private Long id;
    private User user;
    private Manga manga;
    private String status;
}
