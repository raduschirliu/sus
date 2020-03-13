import React, { useState, ChangeEvent, ReactNode } from 'react';
import { Button, TextField } from '@material-ui/core';
import styles from './shortener.module.scss';

const Shortener = () => {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const shorten = (): void => {
    setShortUrl('asdf');
  }

  const reset = (): void => {
    setShortUrl('');
    setUrl('');
  }

  const displayContent = (): ReactNode => {
    if (shortUrl === '') return null;

    return (
      <>
        <h3>Your converted URL:</h3>
        <a href={shortUrl}>{shortUrl}</a>
        <Button color='primary' onClick={reset}>Clear</Button>
      </>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Simple Url Shortener</h1>
      <div className={styles.urlInput}>
        <TextField
          className={styles.urlField}
          value={url}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setUrl(e.target.value)}
          variant='outlined'
          label='Enter your URL'
        />
        <Button variant='contained' color='primary' onClick={shorten}>Shorten</Button>

        <div className={styles.urlResult}>
          {displayContent()}
        </div>
      </div>
    </div>
  );
}

export default Shortener;