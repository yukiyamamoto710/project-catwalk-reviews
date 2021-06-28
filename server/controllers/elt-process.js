\COPY review (id, product_id,rating,date,summary,body,recommend,reported,reviewer_name,reviewer_email,response,helpfulness) FROM '/Users/yukiyamamoto/Documents/Immersive/reviewsAPI/raw-data/reviews.csv' DELIMITER ',' CSV HEADER;

\COPY characteristics (id, product_id, name) FROM '/Users/yukiyamamoto/Documents/Immersive/reviewsAPI/raw-data/characteristics.csv' DELIMITER ',' CSV HEADER;

\COPY photos (id, review_id, url) FROM '/Users/yukiyamamoto/Documents/Immersive/reviewsAPI/raw-data/reviews_photos.csv' DELIMITER ',' CSV HEADER;

\COPY characteristic_reviews (id, characteristic_id, review_id, value) FROM '/Users/yukiyamamoto/Documents/Immersive/reviewsAPI/raw-data/characteristic_reviews.csv' DELIMITER ',' CSV HEADER;

SELECT MAX(id)+1 FROM review;
CREATE SEQUENCE review_id_sequence START 5774953;

SELECT MAX(id)+1 FROM characteristics;
CREATE SEQUENCE characteristics_id_sequence START 3347680;

SELECT MAX(id)+1 FROM photos;
CREATE SEQUENCE photos_id_sequence START 2742541;

SELECT MAX(id)+1 FROM characteristic_reviews;
CREATE SEQUENCE characteristic_reviews_id_sequence START 19327576;

CREATE INDEX product_id_index ON review(product_id);
CREATE INDEX photos_review_index ON photos(review_id);
CREATE INDEX characteristics_product_id_index ON characteristics(product_id);
CREATE INDEX char_reviews_review_index ON characteristic_reviews(review_id);
CREATE INDEX char_reviews_char_index ON characteristic_reviews(characteristic_id);
