# Serverless crud with RDS Mysql-Server, AWS API Gateway

Is need to make sure you have an account for the AWS console and create database mysql-server.

## serverless-plugin-include-dependencies
    
    npm install --save mysql querystring serverless-offline
    npm install --save aws-sdk body-parser

## Change Config connection.js
    
    Modify connection data to MySQL

    Config vpc into serverless.yml: 
    
    vpc:
    securityGroupIds:
      - sg-0a9d372a5b2fe8bca
    subnetIds:
      - subnet-4d8c2f66
      - subnet-29bcf213


## Create table in database

create table users
(
	id int auto_increment,
	name nvarchar(100) null,
	constraint users_pk
		primary key (id)
);


## Serveless deploy to aws

    sls deploy


##  test endpoints


    curl --location --request POST 'https://gbf32wq0dd.execute-api.us-east-1.amazonaws.com/dev/users' \
    --header 'Content-Type: application/x-www-form-urlencoded' \
    --data-urlencode 'name=luis test'

    curl --location --request GET 'https://gbf32wq0dd.execute-api.us-east-1.amazonaws.com/dev/users'

    curl --location --request GET 'https://gbf32wq0dd.execute-api.us-east-1.amazonaws.com/dev/users/1'

