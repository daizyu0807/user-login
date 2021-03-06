# **user-login**

![GITHUB](https://github.com/daizyu0807/user-login/blob/9d5da07981d16dc456a335f401850ef16efcad74/user-login.jpg "login-in")
User Login with email & password.

![GITHUB](https://github.com/daizyu0807/user-login/blob/9d5da07981d16dc456a335f401850ef16efcad74/login-successful.jpg "login-succeed")
Login-successful: Welcome back, {name}!

![GITHUB](https://github.com/daizyu0807/user-login/blob/9d5da07981d16dc456a335f401850ef16efcad74/login-failed.jpg "login-failed")
Login-failed: wrong email or password

![GITHUB](https://github.com/daizyu0807/user-login/blob/9d5da07981d16dc456a335f401850ef16efcad74/logout-successful.jpg "logout-succeed")
Logout-successful: successfully logged out!

## **Getting Start**

### **Environment Setup**

* Node.js v14.16.0

* MongoDB v6.1.8

### **Installing**

1. Check requirement for environment setup.

2. Open your terminal and use 'git clone' to copy this project to local.

```
$ git clone https://github.com/daizyu0807/user-login.git
```

3. Connect MongoDB server.

```
$ cd ~/mongodb/bin/
```
```
$ ./mongod --dbpath /Users/[Users'name]/mongodb-data
```

4. Change directory to the project.

```
$ cd user-login
```

5. Install all dependencies.

```
npm install
```

6. Install nodemon package.

```
npm install -g nodemon 
```

7. Run server in localhost using following npm script.

```
npm run dev
```

9. If successful, `user-login is running on http://localhost:3000
mongodb connected` will appear in your terminal and you can open this URL to use the web application.


## **Devtools**

* Node.js 14.16.0

* Express 4.17.2

* Express-Handlebars ^6.0.2

* cookie-parser ^1.4.6

* Bootstrap 5.1.3

* mongoose 6.1.8
