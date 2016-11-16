# linkshare

##USER
### REGISTRATION /users
The new user must register to the linkshare site by providing the following:
* name - string
* email - string
* password - string

### LOGIN /login
A user must log in to the site in order to post a link or a comment. Login by signing in as a user and password that is authenticated.

##POST
### POST LINK /post (Must be logged in)

Allows the user to post a link. Additional data/parameters are:
* title - string
* url - string
* url_img - string (if applicable)


##COMMENT
### COMMENT /comment (Must be logged in)

Allows the user to post a link. Additional data/parameters are:
* content - string

Following is a link to the linkshare database:
[linkshare](https://enigmatic-garden-47419.herokuapp.com/)
