import { Router } from 'express';
import { Post } from '../../../db/models';
import authCheck from '../../middlewares/authCheck';

const indexRouter = Router();

indexRouter.get('/', async (req, res) => {
  const posts = await Post.findAll({ include: 'author' });
  res.render('Layout', { posts });
});

indexRouter.get('/search', async (req, res) => {
  res.render('Layout');
});

indexRouter.get('/signup', authCheck(false), (req, res) => res.render('Layout'));

indexRouter.get('/login', authCheck(false), (req, res) => res.render('Layout'));

indexRouter.get('/account', authCheck(true), (req, res) => res.render('Layout'));

export default indexRouter;
