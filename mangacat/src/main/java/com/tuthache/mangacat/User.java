package com.tuthache.mangacat;

import org.springframework.boot.autoconfigure.domain.EntityScan;

@EntityScan
public class User {
    private Long id;
    private String username;
    private String password;
}
