## Project 2

[Project]
(https://safe-castle-33189.herokuapp.com)

#### Technologies used

HTML, CSS, JavaScript, EJS, MongoDb, MongoDB Atlas, Mongoose, Heroku, Bootstrap, Express, Express-Sessions, Method-Override, Bcrypt, Dotenv.

#### Approach Taken

For this app I wanted to create a place where someone could create a collection of all the movies they own. I also wanted to have something that would let you track if that movie was lent out to someone and who that someone was.

The database is on MongoDB Atlas and the app is hosted by Heroku. Express and Method-Override are used for the routes along with Mongoose to send and receive documents to the MongoDB database. Mongoose Schemas were used to set up Movie and User models. Initially, there weren't any users and all movies were available to anyone that had access to the site. I used express-sessions to set up a log in process and establish a session for a unique user. From there I modified the Movies Model to include a user id for the user that created that movie. Mongoose then only returns movies that have the current users id. There are key value pairs for 'lent out' and 'lent out to' to help keep track of if someone has borrowed that movie and who they are.

Bootstrap was used for the styling along with custom css to change a few things like background colors and font colors.

#### Unsolved Problems

The biggest thing I would want to add is a search bar linked to a movie api so that when a user is creating a movie they can get all the info filled in. Most of the info is easily available on the back of a Blu-ray case but the movie poster image is what would be hardest to get. A user would have to copy a image address link and add that to the document to get the movie poster. I dont think too many people would know how to do that. Another option would be to have movies already included in the database and just have them somehow connected to a user.

The way it is set up now there will be a lot of repeat documents in the database and would eventually cause storage issues.

I would also like to add a tv section.
