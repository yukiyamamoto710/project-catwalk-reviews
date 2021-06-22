CREATE TABLE review (
 review_id BIGSERIAL,
 rating SMALLINT,
 summary VARCHAR(60),
 recommended BOOLEAN,
 response VARCHAR,
 helpfulness SMALLINT,
 body VARCHAR(1000),
 date DATE,
 id_reviewer INTEGER,
 id_product INTEGER,
 id_page INTEGER
);


ALTER TABLE review ADD CONSTRAINT review_pkey PRIMARY KEY (review_id);

CREATE TABLE reviewer (
 id BIGSERIAL,
 name VARCHAR(60),
 email VARCHAR(60)
);


ALTER TABLE reviewer ADD CONSTRAINT reviewer_pkey PRIMARY KEY (id);
ALTER TABLE reviewer ADD CONSTRAINT reviewer_pkey PRIMARY KEY ();

CREATE TABLE product (
 id BIGSERIAL,
 page SMALLINT
);


ALTER TABLE product ADD CONSTRAINT product_pkey PRIMARY KEY (id);

CREATE TABLE product-reviewer (
 id BIGSERIAL,
 id_reviewer INTEGER,
 id_product INTEGER
);


ALTER TABLE product-reviewer ADD CONSTRAINT product-reviewer_pkey PRIMARY KEY (id);

CREATE TABLE photos (
 id BIGSERIAL,
 url VARCHAR,
 review_id_review INTEGER
);


ALTER TABLE photos ADD CONSTRAINT photos_pkey PRIMARY KEY (id);

CREATE TABLE characteristics (
 id BIGSERIAL,
 characteristics VARCHAR,
 value DECIMAL,
 review_id_review INTEGER
);


ALTER TABLE characteristics ADD CONSTRAINT characteristics_pkey PRIMARY KEY (id);

CREATE TABLE reported (
 id BIGSERIAL,
 review_id_review INTEGER
);


ALTER TABLE reported ADD CONSTRAINT reported_pkey PRIMARY KEY (id);

CREATE TABLE page (
 id BIGSERIAL,
 count SMALLINT DEFAULT 5
);


ALTER TABLE page ADD CONSTRAINT page_pkey PRIMARY KEY (id);

ALTER TABLE review ADD CONSTRAINT review_id_reviewer_fkey FOREIGN KEY (id_reviewer) REFERENCES reviewer(id);
ALTER TABLE review ADD CONSTRAINT review_id_product_fkey FOREIGN KEY (id_product) REFERENCES product(id);
ALTER TABLE review ADD CONSTRAINT review_id_page_fkey FOREIGN KEY (id_page) REFERENCES page(id);
ALTER TABLE product-reviewer ADD CONSTRAINT product-reviewer_id_reviewer_fkey FOREIGN KEY (id_reviewer) REFERENCES reviewer(id);
ALTER TABLE product-reviewer ADD CONSTRAINT product-reviewer_id_product_fkey FOREIGN KEY (id_product) REFERENCES product(id);
ALTER TABLE photos ADD CONSTRAINT photos_review_id_review_fkey FOREIGN KEY (review_id_review) REFERENCES review(review_id);
ALTER TABLE characteristics ADD CONSTRAINT characteristics_review_id_review_fkey FOREIGN KEY (review_id_review) REFERENCES review(review_id);
ALTER TABLE reported ADD CONSTRAINT reported_review_id_review_fkey FOREIGN KEY (review_id_review) REFERENCES review(review_id);