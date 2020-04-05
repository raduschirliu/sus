import React, { useState, ChangeEvent, ReactNode } from 'react';
import { Button, TextField } from '@material-ui/core';
import styles from './shortener.module.scss';
import api from '../../api/api';
import Link from '../../models/link';

const Shortener = () => {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const shorten = (): void => {
    api.shorten(url)
      .then((res: any) => {
        setShortUrl(res.id);
      })
      .catch(err => {
        setShortUrl("");
        console.error(err);
      });
  }

  const reset = (): void => {
    setShortUrl('');
    setUrl('');
  }

  const displayContent = (): ReactNode => {
    if (shortUrl === '') return null;
    const fullShortUrl = window.location + shortUrl

    return (
      <>
        <h3>Your converted URL:</h3>
        <a href={fullShortUrl}>{fullShortUrl}</a>
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