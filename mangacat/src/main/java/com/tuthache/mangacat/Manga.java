package com.tuthache.mangacat;

import org.springframework.boot.autoconfigure.domain.EntityScan;

@EntityScan
public class Manga {
    private Long id;
    private String title;
    private String author;
    private String genre;
    private String publication_date;
    private String cover_image_url;
}
