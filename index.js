import express from 'express';
import path from 'path';
import router from './routes/index.js';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.PORT ?? 3000;
const __dirname = path.resolve();
const swaggerDocument = YAML.load('./controllers/users.yaml');

mongoose
  .connect(
    'mongodb+srv://IvanR:ivanradchenko911S@cluster0.i9hmcak.mongodb.net/?retryWrites=true&w=majority',
  )
  .then(
    () => {
      console.log('Connected to database.');
    },
    (err) => {
      console.log('Error database connecting: ', err);
    },
  );

app.use(express.json());
app.use(router);

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

app.listen(PORT, () => {
  console.log(`Server has been started on port ${PORT}`);
});
