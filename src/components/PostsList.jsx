import Post from './Post';
import { useState } from 'react';

import NewPost from './NewPost';
import Modal from './Modal';

import classes from './PostsList.module.css';

function PostsList(props) {
  const [posts, setPosts] = useState([]);

  function addPostHandler(postData) {
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  return (
    <>
      {props.modalIsVisible && (
        <Modal onClose={props.onStopPosting}>
          <NewPost onSubmit={addPostHandler} onClose={props.onStopPosting} />
        </Modal>
      )}
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.body} author={post.title} body={post.body} />
          ))}
        </ul>
      )}

      {posts.length === 0 && (
        <div>
          <h2>There are no posts yet!</h2>
        </div>
      )}
    </>
  );
}

export default PostsList;
