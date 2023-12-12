/*

Sequelize

To start with Sequelize, we have to install a couple packages
    npm install sequelize
    npm install sequelize-cli
Then we initialize Sequelize
    npx sequelize init

Migrations - Make changes to the DB
Seeders - Initial testing data
Models - Class representations of our tables

.sequelizerc file - Tell Sequelize how to organize when initiated

storage: Tells Sequelize where out actual DB is
dialect: Tells Sequelize which RDBMS we are using
benchmark: Basically just turns .timer on by default
logQueryParameters: Allows us to actually see the values when we make changes to our DB
logging: Defaults to true and prints our SQL to the terminal


*/