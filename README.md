# Project Catwalk (System Design)

<!-- ABOUT THE APPLICATION -->
## About The Application

The backend for a pre-existing retail website. It is a fully functional API that can handle thousands of user interactions per second for the reviews section.

### Built/Tested with

* [PostgreSQL](https://www.postgresql.org/)
* [Node](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [Docker](https://www.docker.com/)
* [AWS EC2](https://aws.amazon.com/)
* [NGINX](https://www.nginx.com/)
* [k6](https://k6.io/)
* [Frisby](https://docs.frisbyjs.com/)
* [New Relic](https://newrelic.com/)
* [Loader.io](https://loader.io/)

<!-- USAGE EXAMPLES -->
## Process

- Seeded PostgreSQL with 10 million records and refactored the nested filter clause with aggregate functions and created alternative tables with indexes after performing the ETL process to optimize queries to take under 10ms
- Deployed the application using a microservice architecture where the server was dockerized for horizontal scaling
- Used Nginx as a load balancer to 3 server instances to sustain 1000 RPS with latency <1000ms and error rate <1%

<!-- GETTING STARTED -->
## Getting Started

1. Create PostgreSQL database according to ```server/database/postgresql.schema.sql```

2. Perform ETL using the commands at ```server/controllers/etl-process.js``` to seed 10 million rows of CSV data.

3. Create a docker image from the root directory and push it to Dockerhub
   ```sh
   docker build -t api-server .
   ```
   ```sh
   docker push yukiyamamoto710/api-server
   ```
4. Start AWS EC2 Ubuntu instances and tranfer data into one of the database instance using the following command
   ```sh
   scp -i <pem key> <path to CSV file in the local machine> ubuntu@<IP address>
   ```
5. Pull the server image from Dockerhub and run it in 3 instances
   ```sh
   sudo docker pull yukiyamamoto710/api-server
   ```
   ```sh
   sudo docker run -d -p 3000:3000 --name api-server yukiyamamoto710/api-server
   ```
6. Change IP addresses in ```nginx.conf```file found in the instance that runs NGINX


<!-- ROADMAP -->


<!-- CONTRIBUTING -->
<!-- ## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request -->



<!-- LICENSE -->
<!-- ## License

Distributed under the GG License. See `LICENSE` for more information. -->



<!-- CONTACT -->
## Contact
Yuki Yamamoto - (https://www.linkedin.com/in/yukiyamamoto1) - yukiyamamoto710@gmail.com

<!-- ACKNOWLEDGEMENTS -->



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
