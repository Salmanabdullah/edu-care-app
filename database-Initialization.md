## Database Initialization

JSON file was directly downloaded from open data portal and imported to mongoDB Atlas by following this steps:

    1. Open account in mongo atlas
    2. create a project
    3. create a cluster
    4. add database user
    5. go to Driver
    6. copy the connection string. (save this in your backend .env file under MONGO_URL)
    7. go to Database
    8. select Browse Collections tab
    9. select Add My Own Data
    10. create database
    11. insert document