import path from 'path';
import express from 'express';
import morgan from 'morgan';
import { api } from './api/api';

const NODE_ENV = process.env.NODE_ENV || 'development';
const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use(morgan('common'));
app.use(api);

if (NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, '../../client/build')));
	app.get("/*", (request, response) => {
		response.sendFile(path.join(__dirname, '../../client/build/index.html'));
	});
}

app.listen(PORT, () => {
	console.info(`Server listening at port ${PORT}.`);
});
