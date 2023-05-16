CREATE TABLE users(id INT NOT NULL AUTO_INCREMENT,
				   idUser INT NOT NULL,
				   pass VARCHAR (255) NOT NULL,
				   email VARCHAR (255) NOT NULL,
				   img VARCHAR (500),
				   first_name VARCHAR (50),
				   job_desk VARCHAR (50),
				   schedules DATE,
				   contact VARCHAR (50),
				   status VARCHAR (50),
                   PRIMARY KEY (id));

CREATE TABLE room( id INT NOT NULL AUTO_INCREMENT,
				   idRoom INT NOT NULL,	
				   img VARCHAR (500),
				   bed_type VARCHAR (500),
				   room_floor VARCHAR(500),
				   amenities VARCHAR (500),
				   rate INT,
				   status VARCHAR (50),
                   PRIMARY KEY (id));

CREATE TABLE booking(idBooking INT NOT NULL AUTO_INCREMENT,
				    guest VARCHAR (50),
				    order_date DATE,
				    check_in DATE,
				    check_out DATE,
				    special_request VARCHAR (50),
				    room_type VARCHAR (50),
				    status VARCHAR (50),
				    img VARCHAR(500),
                    PRIMARY KEY (idBooking));

CREATE TABLE reviews(id INT NOT NULL AUTO_INCREMENT, 
					date VARCHAR(100) NOT NULL, 
					name VARCHAR(255) NOT NULL, 
					email VARCHAR(255) NOT NULL, 
					phone VARCHAR(50),
					comment VARCHAR(500) NOT NULL,
					PRIMARY KEY (id)
					);
				   