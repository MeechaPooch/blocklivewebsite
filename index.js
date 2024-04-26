import express from 'express'
const app = express();
const port = 3000;

import reload from 'easy-livereload'
app.use(express.static('static'))
// app.use(reload({watchDirs:['/workspaces/blocklivewebsite/static']}));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});