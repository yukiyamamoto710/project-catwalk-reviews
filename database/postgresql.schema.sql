CREATE DATABASE reviews;

CREATE TABLE review (
 id BIGSERIAL,
 rating SMALLINT DEFAULT 0,
 summary VARCHAR(60),
 recommend BOOLEAN DEFAULT 'false',
 response VARCHAR,
 helpfulness SMALLINT DEFAULT 0,
 body VARCHAR(1000),
 date BIGINT,
 reviewer_id INTEGER,
 product_id INTEGER,
 reported BOOLEAN DEFAULT 'false'
);
ALTER TABLE review ADD CONSTRAINT review_pkey PRIMARY KEY (id);


CREATE TABLE reviewer (
 id BIGSERIAL,
 name VARCHAR(60),
 email VARCHAR(60)
);
ALTER TABLE reviewer ADD CONSTRAINT reviewer_pkey PRIMARY KEY (id);


CREATE TABLE photos (
 id BIGSERIAL,
 url VARCHAR,
 review_id INTEGER
);
ALTER TABLE photos ADD CONSTRAINT photos_pkey PRIMARY KEY (id);


CREATE TYPE features AS ENUM ('Size', 'Width', 'Comfort', 'Quality', 'Length', 'Fit');
CREATE TABLE characteristics (
 id BIGSERIAL,
 name features,
 product_id INTEGER
);


ALTER TABLE characteristics ADD CONSTRAINT characteristics_pkey PRIMARY KEY (id);

CREATE TABLE characteristics_reviews (
 id BIGSERIAL,
 value DECIMAL,
 characteristic_id INTEGER,
 review_id INTEGER
);
ALTER TABLE characteristics_reviews ADD CONSTRAINT characteristics_reviews_pkey PRIMARY KEY (id);


ALTER TABLE review ADD CONSTRAINT review_reviewer_id_fkey FOREIGN KEY (reviewer_id) REFERENCES reviewer(id);
ALTER TABLE photos ADD CONSTRAINT photos_review_id_fkey FOREIGN KEY (review_id) REFERENCES review(id);
ALTER TABLE characteristics_reviews ADD CONSTRAINT characteristics_reviews_characteristic_id_fkey FOREIGN KEY (characteristic_id) REFERENCES characteristics(id);
ALTER TABLE characteristics_reviews ADD CONSTRAINT characteristics_reviews_review_id_fkey FOREIGN KEY (review_id) REFERENCES review(id);