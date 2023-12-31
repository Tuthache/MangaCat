PGDMP  7                 	    {           MangaCat    16.0    16.0     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16415    MangaCat    DATABASE     �   CREATE DATABASE "MangaCat" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_United States.1252';
    DROP DATABASE "MangaCat";
                postgres    false                        2615    16416    MangaCat    SCHEMA        CREATE SCHEMA "MangaCat";
    DROP SCHEMA "MangaCat";
                postgres    false            �            1259    16419    Manga    TABLE       CREATE TABLE "MangaCat"."Manga" (
    manga_id integer NOT NULL,
    manga_title character varying(255) NOT NULL,
    manga_author character varying(255) NOT NULL,
    manga_genre character varying(255) NOT NULL,
    manga_publication_date date,
    cover_image_url text
);
    DROP TABLE "MangaCat"."Manga";
       MangaCat         heap    postgres    false    5            �            1259    16453 
   User_Manga    TABLE     �   CREATE TABLE "MangaCat"."User_Manga" (
    user_manga_id integer NOT NULL,
    user_id integer NOT NULL,
    manga_id integer NOT NULL
);
 $   DROP TABLE "MangaCat"."User_Manga";
       MangaCat         heap    postgres    false    5            �            1259    16426    Users    TABLE     �   CREATE TABLE "MangaCat"."Users" (
    user_username character varying(255) NOT NULL,
    user_password character varying(255) NOT NULL,
    user_id integer NOT NULL
);
    DROP TABLE "MangaCat"."Users";
       MangaCat         heap    postgres    false    5            �          0    16419    Manga 
   TABLE DATA           �   COPY "MangaCat"."Manga" (manga_id, manga_title, manga_author, manga_genre, manga_publication_date, cover_image_url) FROM stdin;
    MangaCat          postgres    false    215          �          0    16453 
   User_Manga 
   TABLE DATA           L   COPY "MangaCat"."User_Manga" (user_manga_id, user_id, manga_id) FROM stdin;
    MangaCat          postgres    false    217   -       �          0    16426    Users 
   TABLE DATA           L   COPY "MangaCat"."Users" (user_username, user_password, user_id) FROM stdin;
    MangaCat          postgres    false    216   J       "           2606    16425    Manga Manga_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY "MangaCat"."Manga"
    ADD CONSTRAINT "Manga_pkey" PRIMARY KEY (manga_id);
 B   ALTER TABLE ONLY "MangaCat"."Manga" DROP CONSTRAINT "Manga_pkey";
       MangaCat            postgres    false    215            (           2606    16457    User_Manga User_Manga_pkey 
   CONSTRAINT     k   ALTER TABLE ONLY "MangaCat"."User_Manga"
    ADD CONSTRAINT "User_Manga_pkey" PRIMARY KEY (user_manga_id);
 L   ALTER TABLE ONLY "MangaCat"."User_Manga" DROP CONSTRAINT "User_Manga_pkey";
       MangaCat            postgres    false    217            $           2606    16464    Users Users_pkey 
   CONSTRAINT     [   ALTER TABLE ONLY "MangaCat"."Users"
    ADD CONSTRAINT "Users_pkey" PRIMARY KEY (user_id);
 B   ALTER TABLE ONLY "MangaCat"."Users" DROP CONSTRAINT "Users_pkey";
       MangaCat            postgres    false    216            &           2606    16432    Users username 
   CONSTRAINT     X   ALTER TABLE ONLY "MangaCat"."Users"
    ADD CONSTRAINT username UNIQUE (user_username);
 >   ALTER TABLE ONLY "MangaCat"."Users" DROP CONSTRAINT username;
       MangaCat            postgres    false    216            )           2606    16458    User_Manga manga_manga_id    FK CONSTRAINT     �   ALTER TABLE ONLY "MangaCat"."User_Manga"
    ADD CONSTRAINT manga_manga_id FOREIGN KEY (manga_id) REFERENCES "MangaCat"."Manga"(manga_id);
 I   ALTER TABLE ONLY "MangaCat"."User_Manga" DROP CONSTRAINT manga_manga_id;
       MangaCat          postgres    false    217    4642    215            *           2606    16465    User_Manga user_userid_id    FK CONSTRAINT     �   ALTER TABLE ONLY "MangaCat"."User_Manga"
    ADD CONSTRAINT user_userid_id FOREIGN KEY (user_id) REFERENCES "MangaCat"."Users"(user_id) NOT VALID;
 I   ALTER TABLE ONLY "MangaCat"."User_Manga" DROP CONSTRAINT user_userid_id;
       MangaCat          postgres    false    216    4644    217            �      x������ � �      �      x������ � �      �      x������ � �     