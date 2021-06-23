CREATE DATABASE coolkicks CHARACTER SET utf8mb4;
CREATE TABLE users(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
nombre VARCHAR(100) NOT NULL,
apellido VARCHAR(100) NOT NULL,
email VARCHAR(250) NOT NULL,
password VARCHAR(250) NOT NULL,
repassword VARCHAR(250) NOT NULL,
image VARCHAR(200) NOT NULL,
fecha DATE NOT NULL,
seguidores INT UNSIGNED NOT NULL,
created_at DATE,
updated_at DATE
);

CREATE TABLE product(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
modelo VARCHAR(200) NOT NULL,
image VARCHAR(200) NOT NULL,
descripcion VARCHAR(300) NOT NULL,
fecha DATE NOT NULL,
created_at DATE,
updated_at DATE,
user_id INT UNSIGNED,
FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE comentarios(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
comentario VARCHAR(300) NOT NULL,
created_at DATE,
updated_at DATE,
user_id INT UNSIGNED,
product_id INT UNSIGNED,
FOREIGN KEY (user_id) REFERENCES users(id),
FOREIGN KEY (product_id) REFERENCES product(id)
);

INSERT INTO users (nombre, apellido, email, password, repassword, image, fecha, seguidores, created_at, updated_at)
VALUES('Lola','Marinelli','lmarinelli@udesa.edu.ar','12345','12345','/images/users/face-amico.png','2002-04-05',10,'2021-03-03','2021-03-03'),
	('Mora','Baylac','mbaylac@udesa.edu.ar','123456','123456','/images/users/face-pana.png','2001-08-27',18,'2021-03-03','2021-03-03'),
    ('Martina','Cappelloni','mcappelloni@udesa.edu.ar','1234', '1234', '/images/users/face-cuate.png','2002-02-19',7, '2021-03-03','2021-03-03'),
    ('Juana','Garcia','jgarcia@udesa.edu.ar','1234','1234','/images/users/face-rafiki.png','1999-04-20',9, '2021-03-03','2021-03-03'),
    ('Mateo','Lopez','mlopez@udesa.edu.ar','1234','1234','/images/users/face-bro.png','2004-09-01',15,'2021-03-03','2021-03-03');

INSERT INTO product (modelo, image, descripcion, fecha, created_at, updated_at, user_id)
VALUES('JORDAN 1 HIGH SATIN SNAKE', '/images/products/satinsnake.jpeg','Las zapatillas Jordan 1 HIGH SATIN SNAKE presentan una mezcla de satén, cuero y piel de serpiente sintética', '2020-12-23', '2021-03-03', '2021-03-03', 1),
      ('JORDAN 1 MID MAGENTA', '/images/products/magenta.jpeg','Las Jordan 1 MID MAGENTA son el primer zapato exclusivo de Michael Jordan equipado en talla de mujer de color magenta, negro y blanco. ', '2021-01-10', '2021-03-03', '2021-03-03', 2),
      ('SB DUNK SPARTAN GREEN', '/images/products/spartangreen.jpeg','Las SB DUNK SPARTAN GREEN son las zapatillas verdes que no te quitarás en todo el otoño', '2020-03-20', '2021-03-03', '2021-03-03', 3),
      ('JORDAN 1 CRIMSON TINT','/images/products/crimsontint.jpeg', 'Las zapatillas JORDAN 1 CRIMSON TINT añaden un tono rosa coral espectacular. ¿Qué estas esperando? Compralas ya!', '2021-05-20', '2021-03-03', '2021-03-03', 4),
      ('JORDAN 1 MID MULTICOLOR', '/images/products/multicolor.jpeg', 'Las zapatillas JORDAN 1 MID MULTICOLOR son solamente para aquellos que les gusta divertirse. Ya su nombre lo delata, tienen todos los colores!', '2021-01-24', '2021-03-03', '2021-03-03', 5),
      ('JORDAN 1 YELLOW OCHRE', '/images/products/yellowochre.jpeg','Las zapatillas JORDAN 1 YELLOW OCHRE son parte del paquete Best Hand in the Game, vienen en una combinación de colores blanco cumbre, ocre amarillo y negro', '2020-01-11', '2021-03-03', '2021-03-03', 1),
      ('JORDAN 1 PINE GREEN','/images/products/pinegreen.jpeg','Las zapatillas JORDAN 1 PINE GREEN son increibles para aquellos que les encanta el color verde, blanco y negro', '2021-01-02', '2021-03-03', '2021-03-03', 2),
      ('JORDAN 1 ROOKIE OF THE YEAR','/images/products/rookieoftheyear.jpeg','Las zapatillas JORDAN 1 ROOKIE OF THE YEAR de color piel, son de un gran confort y tacto premium. Además, cuenta con una puntera perforada para una mayor durabilidad', '2020-11-17', '2021-03-03', '2021-03-03', 3),
      ('JORDAN 1 OBSIDIAN', '/images/products/obsidian.jpeg','Las zapatillas de color Obsidian, coinciden con los colores del equipo de la Universidad de Carolina del Norte, en donde Michael Jordan estudió y jugó antes de dar el salto a la NBA', '2020-08-27', '2021-03-03', '2021-03-03', 4),
      ('AIR JORDAN 1 RETRO HIGH Off-White CHICAGO','/images/products/retrohigh.jpeg ','Las zapatillas AIR JORDAN 1 RETRO HIGH Off-White CHICAGO son una de las zapatillas más vendidas de Nike en relación con la practica del baloncesto, desde sus orígenes siempre ha destacado por su gran versatilidad sobre la pista de basket', '2020-05-01', '2021-03-03', '2021-03-03', 5);
      
INSERT INTO comentarios (comentario, created_at, updated_at, user_id, product_id)
VALUES('Muy buenas zapatillas!','2020-03-02','2020-03-02', 1, 1),
	('Muy facheras!','2020-01-22','2020-01-22', 2, 2),
	('Se me rompieron al segundo dia! Muy mala calidad', '2020-01-24','2020-01-24',3,3),
	('No las recomiendo. Solo sirven para hacer fotos facheras', '2020-01-10','2020-01-10',4,4),
	('Las mejores lejos. Pero un poco caras', '2020-01-27','2020-01-27',5,5),
	('Muy buenas zapas. Se manchan rapido igual', '2020-01-07','2020-01-07',1,6),
	('Muy buenas para hacer deporte', '2020-01-05','2020-01-05',2,7),
	('El cuero es espectacular. Las super recomiendo', '2020-01-01','2020-01-01',3,8),
	('Estan increibles! Aunque un poco pesadas', '2020-01-29','2020-01-29',4,9),
	('Son muy duras', '2020-01-19','2020-01-19',5,10);
    
INSERT INTO comentarios (comentario, created_at, updated_at, user_id, product_id)
VALUES('Muy buenas zapatillas!','2020-03-02','2020-03-02', 2, 2),
	('Muy facheras!','2020-01-22','2020-01-22', 3, 3),
	('Se me rompieron al segundo dia! Muy mala calidad', '2020-01-24','2020-01-24',4,4),
	('No las recomiendo. Solo sirven para hacer fotos facheras', '2020-01-10','2020-01-10',5,5),
	('Las mejores lejos. Pero un poco caras', '2020-01-27','2020-01-27',1,6),
	('Muy buenas zapas. Se manchan rapido igual', '2020-01-07','2020-01-07',2,7),
	('Muy buenas para hacer deporte', '2020-01-05','2020-01-05',3,8),
	('El cuero es espectacular. Las super recomiendo', '2020-01-01','2020-01-01',4,9),
	('Estan increibles! Aunque un poco pesadas', '2020-01-29','2020-01-29',5,10),
	('Son muy duras', '2020-01-19','2020-01-19',1,1),
    ('Muy buenas zapatillas!','2020-03-02','2020-03-02', 3, 3),
	('Muy facheras!','2020-01-22','2020-01-22', 4, 4),
	('Se me rompieron al segundo dia! Muy mala calidad', '2020-01-24','2020-01-24',5,5),
	('No las recomiendo. Solo sirven para hacer fotos facheras', '2020-01-10','2020-01-10',1,6),
	('Las mejores lejos. Pero un poco caras', '2020-01-27','2020-01-27',2,7),
	('Muy buenas zapas. Se manchan rapido igual', '2020-01-07','2020-01-07',3,8),
	('Muy buenas para hacer deporte', '2020-01-05','2020-01-05',4,9),
	('El cuero es espectacular. Las super recomiendo', '2020-01-01','2020-01-01',5,10),
	('Estan increibles! Aunque un poco pesadas', '2020-01-29','2020-01-29',1,1),
	('Son muy duras', '2020-01-19','2020-01-19',2,2),
    ('Muy buenas zapatillas!','2020-03-02','2020-03-02', 3, 3),
	('Muy facheras!','2020-01-22','2020-01-22', 4, 4),
	('Se me rompieron al segundo dia! Muy mala calidad', '2020-01-24','2020-01-24',5,5),
	('No las recomiendo. Solo sirven para hacer fotos facheras', '2020-01-10','2020-01-10',1,6),
	('Las mejores lejos. Pero un poco caras', '2020-01-27','2020-01-27',2,7),
	('Muy buenas zapas. Se manchan rapido igual', '2020-01-07','2020-01-07',3,8),
	('Muy buenas para hacer deporte', '2020-01-05','2020-01-05',4,10),
	('El cuero es espectacular. Las super recomiendo', '2020-01-01','2020-01-01',5,10),
	('Estan increibles! Aunque un poco pesadas', '2020-01-29','2020-01-29',1,1),
	('Son muy duras', '2020-01-19','2020-01-19',2,2);