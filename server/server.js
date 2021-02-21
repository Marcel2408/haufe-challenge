const app = require('./app');
const DB = require('./models/index');

const PORT = process.env.PORT || 4000;

async function bootstrap() {
  await DB.connection.on('connected', () =>
    console.log('MongoDB is connected!')
  );
  app.listen(PORT, 'localhost', () => {
    console.log(`server listening at localhost:${PORT} ✈`);
  });
}

try {
  bootstrap();
} catch (error) {
  setImmediate(() => {
    console.error('Server Error:');
    console.error(error);
    process.exit(1);
  });
}
