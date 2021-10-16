INSERT INTO tb_user (name, email, password) VALUES ('Bob', 'bob@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG' );
INSERT INTO tb_user (name, email, password) VALUES ('Ana', 'ana@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG' );

INSERT INTO tb_role (authority) VALUES ('ROLE_VISITOR');
INSERT INTO tb_role (authority) VALUES ('ROLE_MEMBER');

INSERT INTO tb_user_role (user_id, role_id) VALUES (1, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 2);

INSERT INTO tb_genre(name) VALUES ('Action');
INSERT INTO tb_genre(name) VALUES ('Science Fiction');
INSERT INTO tb_genre(name) VALUES ('Drama');

INSERT INTO tb_movie(title, sub_title, year, img_url, synopsis, genre_id) VALUES ('The Matrix', 'Welcome to the Real World.', 1999, 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg', 'Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.', 2);
INSERT INTO tb_movie(title, sub_title, year, img_url, synopsis, genre_id) VALUES ('The Matrix Reloaded', 'Free your mind.', 2003, 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8xEVAe84zlL9rkfYT6dZXero4KK.jpg', 'Six months after the events depicted in The Matrix, Neo has proved to be a good omen for the free humans, as more and more humans are being freed from the matrix and brought to Zion.', 2);
INSERT INTO tb_movie(title, sub_title, year, img_url, synopsis, genre_id) VALUES ('The Matrix Revolutions', 'Everything that has a beginning has an end.', 2000, 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fgm8OZ7o4G1G1I9EeGcb85Noe6L.jpg', 'The human city of Zion defends itself against the massive invasion of the machines as Neo fights to end the war at another front while also opposing.', 2);
INSERT INTO tb_movie(title, sub_title, year, img_url, synopsis, genre_id) VALUES ('Fight Club', 'Mischief. Mayhem. Soap.', 1999, 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/a26cQPRhJPX6GbWfQbvZdrrp9j9.jpg', 'A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground fight clubs.', 1);
INSERT INTO tb_movie(title, sub_title, year, img_url, synopsis, genre_id) VALUES ('Minority Report', 'The system is perfect until it comes after you.', 2002, 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ccqpHq5tk5W4ymbSbuoy4uYOxFI.jpg', 'John Anderton is a top Precrime cop in the late-21st century, when technology can predict crimes before they are committed. But Anderton becomes the quarry.', 1);
INSERT INTO tb_movie(title, sub_title, year, img_url, synopsis, genre_id) VALUES ('Pirates of Silicon Valley', 'The true story of how Bill Gates and Steve Jobs changed the world.', 1999, 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/t7uUOD2Ov2CM9PYYOEggL7hef15.jpg', 'The story about the men who made the world of technology what it is today, their struggles during college, the founding.', 3);
INSERT INTO tb_movie(title, sub_title, year, img_url, synopsis, genre_id) VALUES ('Star Wars', 'A long time ago in a galaxy far, far away...', 1977, 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg', 'Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker.', 2);
INSERT INTO tb_movie(title, sub_title, year, img_url, synopsis, genre_id) VALUES ('Star Wars: Episode I - The Phantom Menace', 'Every generation has a legend. Every journey has a first step. Every saga has a beginning.', 1999, 'http://url.com.br', 'Anakin Skywalker, a young slave strong with the Force, is discovered on Tatooine. Meanwhile, the evil Sith have returned, enacting their.', 2);
INSERT INTO tb_movie(title, sub_title, year, img_url, synopsis, genre_id) VALUES ('Star Wars: Episode II - Attack of the Clones', 'A Jedi Shall Not Know Anger. Nor Hatred. Nor Love.', 2002, 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/oZNPzxqM2s5DyVWab09NTQScDQt.jpg', 'Following an assassination attempt on Senator Padmé Amidala, Jedi Knights Anakin Skywalker and Obi-Wan Kenobi.', 2);
INSERT INTO tb_movie(title, sub_title, year, img_url, synopsis, genre_id) VALUES ('Spider-Man', 'Go for the ultimate spin', 2002, 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fwoETElxZqiF3it8F4HitSliXqp.jpg', 'After being bitten by a genetically altered spider at Oscorp, nerdy but endearing high school student Peter Parker is endowed with amazing powers.', 1);


INSERT INTO tb_review (text, movie_id, user_id) VALUES ('Muito bom!', 1, 2);
INSERT INTO tb_review (text, movie_id, user_id) VALUES ('Excelente Filme!', 1, 2);


