CREATE DATABASE reviews;

CREATE TABLE review (
 id SERIAL PRIMARY KEY,
 product_id INTEGER,
 rating SMALLINT DEFAULT 0,
 date BIGINT,
 summary VARCHAR,
 body VARCHAR(1000),
 recommend BOOLEAN DEFAULT 'false',
 reported BOOLEAN DEFAULT 'false',
 reviewer_name VARCHAR(60),
 reviewer_email VARCHAR(60),
 response VARCHAR DEFAULT NULL,
 helpfulness SMALLINT DEFAULT 0
);

CREATE TABLE photos (
 id SERIAL PRIMARY KEY,
 review_id INTEGER,
 url VARCHAR
);

CREATE TYPE features AS ENUM ('Size', 'Width', 'Comfort', 'Quality', 'Length', 'Fit');
CREATE TABLE characteristics (
 id SERIAL PRIMARY KEY,
 product_id INTEGER,
 name features
);

CREATE TABLE characteristic_reviews (
 id SERIAL PRIMARY KEY,
 characteristic_id INTEGER,
 review_id INTEGER,
 value SMALLINT
);

ALTER TABLE photos ADD CONSTRAINT photos_review_id_fkey FOREIGN KEY (review_id) REFERENCES review(id);
ALTER TABLE characteristic_review ADD CONSTRAINT characteristic_reviews_characteristic_id_fkey FOREIGN KEY (characteristic_id) REFERENCES characteristics(id);
ALTER TABLE characteristic_reviews ADD CONSTRAINT characteristic_reviews_review_id_fkey FOREIGN KEY (review_id) REFERENCES review(id);