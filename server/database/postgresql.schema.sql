CREATE DATABASE reviews;

CREATE TABLE review (
 id BIGSERIAL,
 product_id INTEGER,
 rating SMALLINT DEFAULT 0,
 date BIGINT,
 summary VARCHAR,
 body VARCHAR(1000),
 recommend BOOLEAN DEFAULT 'false',
 reported BOOLEAN DEFAULT 'false',
 reviewer_name VARCHAR(60),
 reviewer_email VARCHAR(60),
 response VARCHAR,
 helpfulness SMALLINT DEFAULT 0
);
ALTER TABLE review ADD CONSTRAINT review_pkey PRIMARY KEY (id);


CREATE TABLE photos (
 id BIGSERIAL,
 review_id INTEGER,
 url VARCHAR
);
ALTER TABLE photos ADD CONSTRAINT photos_pkey PRIMARY KEY (id);


CREATE TYPE features AS ENUM ('Size', 'Width', 'Comfort', 'Quality', 'Length', 'Fit');
CREATE TABLE characteristics (
 id BIGSERIAL,
 product_id INTEGER,
 name features
);
ALTER TABLE characteristics ADD CONSTRAINT characteristics_pkey PRIMARY KEY (id);


CREATE TABLE characteristic_reviews (
 id BIGSERIAL,
 characteristic_id INTEGER,
 review_id INTEGER,
 value DECIMAL
);
ALTER TABLE characteristic_reviews ADD CONSTRAINT characteristic_reviews_pkey PRIMARY KEY (id);


ALTER TABLE photos ADD CONSTRAINT photos_review_id_fkey FOREIGN KEY (review_id) REFERENCES review(id);
ALTER TABLE characteristic_reviews ADD CONSTRAINT characteristic_reviews_characteristic_id_fkey FOREIGN KEY (characteristic_id) REFERENCES characteristics(id);
ALTER TABLE characteristic_reviews ADD CONSTRAINT characteristic_reviews_review_id_fkey FOREIGN KEY (review_id) REFERENCES review(id);