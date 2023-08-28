import { Post } from '../../db/models';

export default async function checkAuthor(req, res, next) {
  const { id: postId } = req.params;
  const targetPost = await Post.findOne({ where: { id: postId } });
  if (targetPost.authorId === req.session?.user?.id) {
    return next();
  }
  return res.sendStatus(403);
}
