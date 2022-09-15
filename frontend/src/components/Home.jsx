import { useCallback, useState } from 'react';

import Modal from './Modal'

const Home = () => {
  const [url, setUrl] = useState('');
  const [show, setShow] = useState(false);

  const handleCreateChanel = useCallback(() => {
    setShow(true);
  });

  return (
    <div>
      <div className="home__container">
        <h2>URL</h2>

        <form className="form">
          <label htmlFor="Provide a URL">
            <input
              type="url"
              name="url"
              id="url"
              className="form__input"
              required
              value={url}
              onChange={({ target }) => setUrl(target.value)}
            />
          </label>
        </form>

        {show && <Modal url={url} />}

        <button
          className="createChannelBtn"
          onClick={handleCreateChanel}
        >
          Browser
        </button>
      </div>
    </div>
  );
};

export default Home;
