import express from 'express';
import morgan from 'morgan';
import path from 'path';
import session from 'express-session';
import fileStore from 'session-file-store';
import indexRouter from './routes/render/indexRouter';
import jsxRender from './utils/jsxRender';
import apiPostRouter from './routes/api/apiPostRouter';
import postRouter from './routes/render/postRouter';
import authRouter from './routes/api/authRouter';

const FileStore = fileStore(session);
const PORT = 3000;
const app = express();
const sessionConfig = {
  name: 'user_sid', // Имя куки для хранения id сессии. По умолчанию - connect.sid
  secret: process.env.SESSION_SECRET ?? 'oh_klahoma', // Секретное слово для шифрования, может быть любым
  resave: false, // Пересохранять ли куку при каждом запросе
  store: new FileStore(), // Место хранения сессий
  saveUninitialized: false, // Создавать ли сессию без инициализации ключей в req.session
  cookie: {
    maxAge: 1000 * 60 * 60 * 12, // Срок истечения годности куки в миллисекундах
    httpOnly: true, // Серверная установка и удаление куки, по умолчанию true
  },
};

app.engine('jsx', jsxRender);
app.set('view engine', 'jsx');

app.set('views', path.join(__dirname, 'components'));

app.use(session(sessionConfig));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use((req, res, next) => {
  res.locals.path = req.originalUrl;
  res.locals.user = req.session?.user;
  next();
});

app.use('/', indexRouter);
app.use('/posts', postRouter);
app.use('/api/post', apiPostRouter);
app.use('/api/auth', authRouter);

app.listen(PORT, () => {
  console.log('Server start on', PORT);
});
