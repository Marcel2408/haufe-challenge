const app = require('./app');


const port = process.env.PORT || 4000;
app.listen(port, 'localhost', () => {
  console.log(`server listening at localhost:${port} ✈`);
});