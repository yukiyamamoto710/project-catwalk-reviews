CREATE TABLE review (
 id INTEGER,
 review_id INTEGER,
 rating SMALLINT DEFAULT 0,
 summary VARCHAR(60),
 recommended BOOLEAN DEFAULT 'false',
 response VARCHAR,
 helpfulness SMALLINT DEFAULT 0,
 body VARCHAR(1000),
 date DATE,
 id_reviewer INTEGER,
 id_product INTEGER,
 id_page INTEGER
);

ALTER TABLE review ADD CONSTRAINT review_pkey PRIMARY KEY (id);


CREATE TABLE reviewer (
 id INTEGER,
 name VARCHAR(60),
 email VARCHAR(60)
);

ALTER TABLE reviewer ADD CONSTRAINT reviewer_pkey PRIMARY KEY (id);
ALTER TABLE reviewer ADD CONSTRAINT reviewer_pkey PRIMARY KEY ();


CREATE TABLE product (
 id INTEGER,
 page SMALLINT
);

ALTER TABLE product ADD CONSTRAINT product_pkey PRIMARY KEY (id);


CREATE TABLE product-reviewer (
 id INTEGER,
 id_reviewer INTEGER,
 id_product INTEGER
);

ALTER TABLE product-reviewer ADD CONSTRAINT product-reviewer_pkey PRIMARY KEY (id);


CREATE TABLE photos (
 id INTEGER,
 url VARCHAR,
 id_review INTEGER
);

ALTER TABLE photos ADD CONSTRAINT photos_pkey PRIMARY KEY (id);

CREATE TYPE features AS ENUM ('Size', 'Width', 'Comfort', 'Quality', 'Length', 'Fit');
CREATE TABLE characteristics (
 id INTEGER,
 characteristics features,
 value DECIMAL,
 id_review INTEGER
);

ALTER TABLE characteristics ADD CONSTRAINT characteristics_pkey PRIMARY KEY (id);


CREATE TABLE reported (
 id BIGSERIAL,
 id_review INTEGER
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
ALTER TABLE photos ADD CONSTRAINT photos_id_review_fkey FOREIGN KEY (id_review) REFERENCES review(id);
ALTER TABLE characteristics ADD CONSTRAINT characteristics_id_review_fkey FOREIGN KEY (id_review) REFERENCES review(id);
ALTER TABLE reported ADD CONSTRAINT reported_id_review_fkey FOREIGN KEY (id_review) REFERENCES review(id);