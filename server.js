import { express } from 'express';

const app = express();

const start = async () => {
  try {
    app.listen(8800, () => {
      console.log(`server is running at port 8800`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
