import express from 'express';
import fs from 'fs/promises';
import sharp from 'sharp';
import upload from '../../middlewares/multerMid';
import { Post } from '../../../db/models';
import authCheck from '../../middlewares/authCheck';
import checkAuthor from '../../middlewares/checkAuthor';

const { Op } = require('sequelize');

const apiPostRouter = express.Router();

apiPostRouter.get('/search', async (req, res) => {
  try {
    const { text } = req.query;
    const posts = await Post.findAll({
      where: { description: { [Op.like]: `%${text}%` } },
      include: 'author',
    });
    res.json(posts);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Server error' });
  }
});

apiPostRouter.post('/', authCheck(true), upload.single('file'), async (req, res) => {
  console.log(req.body);
  try {
    // проверяем наличие файла
    if (!req.file) {
      return res.status(400).json({ message: 'File not found' });
    }

    // создаем имя файла с расширением webp и привязкой к дате
    const name = `${Date.now()}.webp`;
    // создаем буфер с помощью sharp
    const outputBuffer = await sharp(req.file.buffer).webp().toBuffer();
    // создаем файл с помощью fs
    await fs.writeFile(`./public/img/${name}`, outputBuffer);
    // создаем пост в бд
    const post = await Post.create({
      description: req.body.description,
      img: name,
      authorId: req.session.user.id,
    });
    const postWithAuthor = await Post.findOne({ where: { id: post.id }, include: 'author' });
    // отправляем пост
    res.json(postWithAuthor);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Server error' });
  }
});

apiPostRouter.delete('/:id', checkAuthor, async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);
    fs.unlink(`./public/img/${post.img}`).catch((e) => console.log(e));
    if (!post) {
      res.status(404).json({ message: 'Post not found' });
    }
    await post.destroy();
    res.json({ message: 'Post deleted' });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Server error' });
  }
});
export default apiPostRouter;
