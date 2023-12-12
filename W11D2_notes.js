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
typeValidation: Helps us enforce data types on our tables
logging: Defaults to true and prints our SQL to the terminal


File types:
    Migrations
        For making changes to the DB structure
        Table names = Plural, Capitalized, PascalCase
            Table: Users
        CLI Commands:
            npx dotenv sequelize db:migrate
                Run all migration files that haven't been ran
            npx dotenv sequelize db:migrate:undo
                Rolls back the most recent migration
            npx dotenv sequelize db:migrate:undo:all
                Rolls back all migrations
        Important Notes:
            Every migration file has 2 parts: an "up" and a "down"
                The "down" should directly undo the "up"
            Migrations don't only create/edit our tables, the also act as version control for our DB
            All of our conditions like "unique" and "not null" are represented as key-value pairs in the column objects
            The Sequelize Meta table's job is to track the migration files that have been executed

    Models
        Class representations of each table, with built-in query methods
        Model names = Capitalized, PascalCase, SINGULAR
            Model: User
        CLI Commands:
            npx sequelize model:generate --name <Name> --attributes <table attributes>
        Important Notes:
            We do not have to add an "id" attribute. Sequlize will add that for us in models we generate.
            We are switching from snake_case to camelCase for our column names
            When we generate a model, a corresponding migration is also created
            Make sure that any changes we make to migrations, such as adding constraints, we need to add those changes to the model as well

    Seeders
        For inserting initial starter data into the DB

    There are 2 types of commands:
        Commands that create files
        Commands that interact with the DB
            These require us to add "dotenv" to the command
    

*/