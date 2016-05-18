# extragram
A quick mock of Instagram's user profile page

Not all features are fully implemented. Type username in the search bar to navigate to different profiles. Some test cases (users) are listed below:

| Username   | Description |
| :--------: | ----------- |
| `superman` | A properly populated profile |
| `batman`   | Some invalid images |
| `test0`    | User does not exist |
| `test1`    | User has no images posted |
| `test2`    | All images are invalid |

### Deployed version
This demo is deployed on Heroku at https://extragram.herokuapp.com/.

### Clone and run locally
You can also download this repo by following these steps:
```
$ git clone https://github.com/xxnatc/extragram.git
$ cd extragram
$ npm install
$ mkdir db
$ mongod --dbpath=./db --smallfiles
$ node server.js
```
