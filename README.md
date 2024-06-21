## Landing-strapi

### Configure Strapi
in strapi folder
install dependencies

    npm i
rename .env.exemple to .env and set databases variables :

    HOST=0.0.0.0
    
    PORT=1337
    
    APP_KEYS="toBeModified1,toBeModified2"
    
    API_TOKEN_SALT=tobemodified
    
    ADMIN_JWT_SECRET=tobemodified
    
    TRANSFER_TOKEN_SALT=tobemodified
    
    # Database
    
    DATABASE_CLIENT=postgres
    
    DATABASE_HOST=127.0.0.1
    
    DATABASE_PORT=5432
    
    DATABASE_NAME=tobemodified
    
    DATABASE_USERNAME=tobemodified
    
    DATABASE_PASSWORD=tobemodified
    
    DATABASE_SSL=false
    
    JWT_SECRET=tobemodified
finally, make 

    npm run develop

### Configure the Web
in web folder make

    npm i
    npm run dev
