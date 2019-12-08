const axios = require('axios');
const express = require('express');
const fs = require('fs');
const exphbs = require('express-handlebars');
const path = require('path');

const getTextbookPublicKey = 'Yl8lgkJbZUoGo3A5GZGAmNZf5PCvM45n';
const getTextbookSecretKey = 'JLku2OLJXiVIQ4Wc';
const grantType = 'client_credentials';
const year = 2020;
const term = 'Winter';
let getTextbookAccessToken;
const params = new URLSearchParams();
const bodyParser = require('body-parser');
const app = express();
let results;
let textbookData = [];

app.engine(
  'handlebars',
  exphbs({
    defaultLayout: 'main'
  })
);
app.set('view engine', 'handlebars');

app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/home', (req, res) => {
  console.log('serving index.html');
  fs.readFile(path.join(__dirname + '/data/courseData.json'), 'utf-8', (err, data) => {
    if (err) console.log(err);
    else {
      res.status(200).send(JSON.parse(data));
    }
  })


})

app.get('/create_post/:isbn', (req, res) => {
  const isbn = req.params.isbn;
  res.sendFile(path.join(__dirname + '/public/create_post.html'));
});

app.get('/search/:course', async (req, res) => {
  const course = req.params.course;
  const inputIndex = course.match(/[0-9]/).index;
  const major = course.substring(0, inputIndex).trim();
  const courseNumber = course.substr(inputIndex, 3);

  results = await getTextbook(major, courseNumber);

  res.status(200);
  res.render('home', {
    results: results
  });
})

app.listen(3000, () => console.log('server is running on port 3000..'));

// Get access token
function getTextbook(subject, courseNumber) {
  console.log('fetching textbooks');
  params.append('client_id', getTextbookPublicKey);
  params.append('client_secret', getTextbookSecretKey);
  params.append('grant_type', grantType);
  return axios
    .post('https://api.oregonstate.edu/oauth2/token', params)
    .then((res) => {
      getTextbookAccessToken = 'Bearer ' + res.data.access_token;
      return axios
        .get('https://api.oregonstate.edu/v1/textbooks', {
          params: {
            academicYear: year,
            term: term,
            subject: subject,
            courseNumber: courseNumber
          },
          headers: {
            Authorization: getTextbookAccessToken
          }
        })
        .then((res) => {
          return res.data.data;
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
}
