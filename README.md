# GymShark

![screenshot](https://github.com/KenYuChang/GymShark/blob/master/public/image/%E6%88%AA%E5%9C%96%202023-06-24%20%E4%B8%8B%E5%8D%889.47.53.png)

## About

---

Mocking the basic functions as below:

- admin content management and switch other users authority
- user profile
- social interaction: comment gym, favorite gym, user followship, category selected
- popular users list, popular gyms, newest gym and comments
  <br><br>


## Environment

---

- node v14.16.0
- nodemon
  <br><br>

## Installation and Execution

---

### 1. Git Clone to Local

```
 git clone https://github.com/KenYuChang//GymShark   # git clone
 cd GymShark                                         # enter project folder
 npm install                                         # install NPM Packages
```

### 2. Create Database in SQL WorkBench

```
create database GymList
```

### 3. Database Migration and Seeder

```
npx sequelize db:migrate    # model migration
npx sequelize db:seed:all   # generate seed
```

### 4. Create .env file for confidential (ref: .env.example)

```
IMGUR_CLIENT_ID= your password
```

### 5. Start Server (nodemon)

```
npm run dev
```

### 6. Terminal

```
app listening on port 3000!
```

<br>


### # Admin Account

account: root <br>
email: root@example.com <br>
password: 12345678 <br>

### # User Account

account: user1 <br>
email: user1@example.com <br>
password: 12345678 <br>
<br>

## Development Tools

---

- Node.js
- Express
- MySQL
- Sequelize
- handlebars
  <br><br>
  
