import express from 'express';

import { Post } from '../../../db/models';


const postRouter = express.Router();


postRouter.get('/', async (req, res) => {
    try {
        const posts = await Post.findAll();
        res.render('Layout', { posts });
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: 'Server error' });
    }
});


export default postRouter;