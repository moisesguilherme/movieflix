INSERT INTO tb_user (name, email, password) VALUES ('Bob', 'bob@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG' );
INSERT INTO tb_user (name, email, password) VALUES ('Ana', 'ana@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG' );

INSERT INTO tb_role (authority) VALUES ('ROLE_VISITOR');
INSERT INTO tb_role (authority) VALUES ('ROLE_MEMBER');

INSERT INTO tb_user_role (user_id, role_id) VALUES (1, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 2);

INSERT INTO tb_genre(name) VALUES ('Comedia');
INSERT INTO tb_genre(name) VALUES ('Ficao');
INSERT INTO tb_genre(name) VALUES ('Terror');

INSERT INTO tb_movie(title, sub_title, year, img_url, synopsis, genre_id) VALUES ('Filme 1', 'Subtitle 1', 1998, 'https://www.themoviedb.org/t/p/w220_and_h330_face/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg', 'sinopsi 1', 1);
INSERT INTO tb_movie(title, sub_title, year, img_url, synopsis, genre_id) VALUES ('Filme 2', 'Subtitle 2', 1999, 'http://url.com.br', 'sinopsi 2', 2);
INSERT INTO tb_movie(title, sub_title, year, img_url, synopsis, genre_id) VALUES ('Filme 3', 'Subtitle 3', 2000, 'http://url.com.br', 'sinopsi 3', 2);
INSERT INTO tb_movie(title, sub_title, year, img_url, synopsis, genre_id) VALUES ('Filme 1', 'Subtitle 1', 1998, 'https://www.themoviedb.org/t/p/w220_and_h330_face/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg', 'sinopsi 1', 1);
INSERT INTO tb_movie(title, sub_title, year, img_url, synopsis, genre_id) VALUES ('Filme 2', 'Subtitle 2', 1999, 'http://url.com.br', 'sinopsi 2', 2);
INSERT INTO tb_movie(title, sub_title, year, img_url, synopsis, genre_id) VALUES ('Filme 3', 'Subtitle 3', 2000, 'http://url.com.br', 'sinopsi 3', 2);
INSERT INTO tb_movie(title, sub_title, year, img_url, synopsis, genre_id) VALUES ('Filme 1', 'Subtitle 1', 1998, 'https://www.themoviedb.org/t/p/w220_and_h330_face/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg', 'sinopsi 1', 1);
INSERT INTO tb_movie(title, sub_title, year, img_url, synopsis, genre_id) VALUES ('Filme 2', 'Subtitle 2', 1999, 'http://url.com.br', 'sinopsi 2', 2);
INSERT INTO tb_movie(title, sub_title, year, img_url, synopsis, genre_id) VALUES ('Filme 3', 'Subtitle 3', 2000, 'http://url.com.br', 'sinopsi 3', 2);
INSERT INTO tb_movie(title, sub_title, year, img_url, synopsis, genre_id) VALUES ('Filme 3', 'Subtitle 3', 2000, 'http://url.com.br', 'sinopsi 3', 2);

INSERT INTO tb_review (text, movie_id, user_id) VALUES ('Muito bom!', 1, 2);
INSERT INTO tb_review (text, movie_id, user_id) VALUES ('Excelente Filme!', 1, 2);


