# Hi there, I'm Axel Avila 👋 

[![website](./src/components/Logo/globe.png)](http://axdev.me#gh-dark-mode-only) Personal Website

## I'm a Husband, Gamer, Runner and Developer!!

- 🌱 I’m currently learning everything 🤣
- 👯 I’m looking to collaborate with other content creators
- 🥅 2022 Goals: Learn more about ReactJs
- ⚡ Fun fact: I love to play Video Games

### Connect with me:

[![website](./src/components/Logo/globe.png)](http://axdev.me#gh-dark-mode-only)
&nbsp;&nbsp;
[![website](./src/components/Logo/linkedin.png)](https://www.linkedin.com/in/axel-fernando-%C3%A1vila-fernandez-817b03a7/)


### Languages and Tools:

<img align="left" alt="Visual Studio Code" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" style="padding-right:10px;" />
<img align="left" alt="HTML5" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" style="padding-right:10px;" />
<img align="left" alt="CSS3" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" style="padding-right:10px;" />
<img align="left" alt="JavaScript" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" style="padding-right:10px;" />
<img align="left" alt="React" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" style="padding-right:10px;" />
<img align="left" alt="Node.js" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" style="padding-right:10px;" />
<img align="left" alt="MySQL" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" style="padding-right:10px;" />
<img align="left" alt="PostgreSql" width="26px" src="./src/components/Logo/PostgreSQL_logo.3colors.svg" style="padding-right:10px;" />
<img align="left" alt="Git" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" style="padding-right:10px;" />
<img align="left" alt="GitHub" width="26px" src="https://user-images.githubusercontent.com/3369400/139447912-e0f43f33-6d9f-45f8-be46-2df5bbc91289.png" style="padding-right:10px;" />
<img align="left" alt="Terminal" width="26px" src="./src/components/Logo/right-arrow-angle-and-horizontal-down-line-code-signs.png" />


<br />
<br />

---

### <img align="left" alt="Visual Studio Code" width="26px" src="./src/components/Logo/blueprint.png" style="padding-right:10px;" />  Face Detection Project

The project is about an app to detect faces on photos, we use an API name Clarifai to detect faces on each photo with FACE_DETECT_MODEL. We also create a Sign-In section where the user can register and keep track of their work. We create a Database on Postgres where we store user information all secure with bcrypt using hash and securing also the database name using environment variable so is not showing on the source code, to connect the database with use Knex on the Back-End. On the part of the API key, we also use the environment variable so the key is not showing up on the source code. The NodeJS app was deployed on Heroku and the Front-End app too so to connect with the Back-End with use Fetch. The database also was made on Heroku. The principal technology we use is ReactJS we create different components and then imported them to the app.js, we use react-router and state, and for the style, we use the tachyons package and react particles js. On the Back-End side, we use ExpressJS to connect the server with the Front-End, and to make the code more simple and clean we create controllers and then used them on the server.js file.


How to use:

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
To start with the project please follow the steps bellow:
- Clone this repo
- Run `npm install`
- Run `npm start`

<br />


 File structure of the project
-

> Folder structure options and naming conventions for software projects

### Top-level directory layout
> Front-End

    .
    ├── node_modules              # Modules files
    ├── public                    # Manifest files
    ├── src                       # Source files (alternatively `lib` or `app`)
    ├── .gitignore                # Automated tests (alternatively `spec` or `tests`)
    ├── package-lock.json
    ├── package.json              # Library information
    └── README.md

> Back-End

    .
    ├── controllers               # Controllers files
    ├── node_modules              # Modules files   
    ├── package-lock.json           
    ├── package.json              # Library information
    ├── README.md                 
    └── server.js                 # Server connections



### Dependencies
| command                              | description                                                                           |
| ------------------------------------ | ------------------------------------------------------------------------------------- |
| npm create-react-app                 | It sets up your development environment so that you can use the latest JavaScript     |
| npm install clarifai                 | install the necessary resource to use Clarifai API                                    |
| npm install react-tilt               | tilt hover effect on React components                                                 |
| npm install react-tsparticles        | Easily create highly customizable particles, confetti and fireworks animations and use them as animated backgrounds for your website                                |
| npm install serve                    | Static file serving and directory listing                                             |
| npm install tachyons                 | Functional CSS for humans                                                             |
| npm install --save-dev nodemon       | nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected. |
| npm install bcrypt-nodejs            | The bcrypt library on NPM makes it really easy to hash and compare passwords in Node  |
| npm install express                  | Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications                           |
| npm install cors                     | The cors npm module provides middleware that you can use in your request handlers     |
| npm install knex                     | A batteries-included SQL query & schema builder for PostgresSQL, MySQL, CockroachDB, MSSQL and SQLite3.                               |
| npm install pg                       | PostgreSQL client for node.js                                                         |