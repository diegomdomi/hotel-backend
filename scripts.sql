CREATE TABLE users(idUsers INT NOT NULL AUTO_INCREMENT,
				   first_name VARCHAR (50),
				   job_desk VARCHAR (50),
				   schedules DATE,
				   contact VARCHAR (50),
                   PRIMARY KEY (idUsers));

CREATE TABLE room(idRoom INT NOT NULL AUTO_INCREMENT,
				   img VARCHAR (500),
				   bed_type VARCHAR (500),
				   room_floor VARCHAR(500),
				   amenities VARCHAR (500),
				   rate INT,
				   status TINYINT(1)
                   PRIMARY KEY (idRoom));

CREATE TABLE booking(idBooking INT NOT NULL AUTO_INCREMENT,
				   guest VARCHAR (50),
				   order_date DATE,
				   check_in DATE,
				   check_out DATE,
				   special_request VARCHAR (50),
				   room_type VARCHAR (50),
				   status VARCHAR (50),
				   img VARCHAR(500),
                   PRIMARY KEY (idUsers));

				   