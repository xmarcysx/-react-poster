import { useState } from 'react';

import classes from './NewPost.module.css';

function NewPost(props) {
  const [enteredBody, setEnteredBody] = useState();
  const [enteredAuthor, setEnteredAuthor] = useState();

  function changeBodyHandler(event) {
    setEnteredBody(event.target.value);
  }

  function changeAuthorHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();

    const postData = {
      title: enteredAuthor,
      body: enteredBody,
    };
    props.onSubmit(postData);
    props.onClose();
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={changeAuthorHandler} />
      </p>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeBodyHandler} />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={props.onClose}>
          Cancel
        </button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
