import React from 'react';
import Row from 'react-bootstrap/Row';
import PostForm from '../UI/PostForm';
import usePost from '../../customHooks/usePost';
import PostItem from '../UI/PostItem';

export default function PostPage({ posts, user }) {
  const { postSubmitHandler, allPosts, handleError, deletePostHandler } = usePost(posts);

  return (
    <>
      <PostForm user={user} postSubmitHandler={postSubmitHandler} />
      <Row className="mt-4">
        {allPosts.map((post) => (
          <PostItem
            user={user}
            post={post}
            key={post.id}
            handleError={handleError}
            deletePostHandler={deletePostHandler}
          />
        ))}
      </Row>
    </>
  );
}
