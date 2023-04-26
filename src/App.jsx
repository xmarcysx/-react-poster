import { useState } from 'react';

import PostsList from './components/PostsList';
import MainHeader from './components/MainHeader';

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function showModalHandler() {
    setModalIsVisible(true);
  }

  function hideModalHandler() {
    setModalIsVisible(false);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostsList
          onStopPosting={hideModalHandler}
          modalIsVisible={modalIsVisible}
        />
      </main>
    </>
  );
}

export default App;
