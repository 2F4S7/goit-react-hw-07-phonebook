import React from 'react';
import Loader from 'react-loader-spinner';
import styles from './Loader.module.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const AppLoader = () => {
  return (
    <div className={styles.Loader}>
      <Loader
        style={styles}
        type="Puff"
        color="#a3a7ad"
        height={400}
        width={400}
      />
    </div>
  );
};

export default AppLoader;
