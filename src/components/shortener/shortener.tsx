import React, { useState, ChangeEvent } from 'react';
import { Button, TextField, CircularProgress } from '@material-ui/core';
import styles from './shortener.module.scss';
import api from '../../api/api';
import Link from '../../models/link';

const LinkContent = ({ shortUrl, onReset }: { shortUrl: string; onReset: Function }) => {
  if (shortUrl === '') return null;
  const fullShortUrl = window.location + shortUrl

  return (
    <>
      <h3>Your converted URL:</h3>
      <a href={fullShortUrl}>{fullShortUrl}</a>
      <Button color='primary' onClick={() => onReset()}>Clear</Button>
    </>
  );
};

const Shortener = () => {
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const shorten = (): void => {
    setLoading(true);

    api.shorten(url)
      .then((res: Link) => {
        setShortUrl(res.id);
      })
      .catch(err => {
        setShortUrl("");
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  const reset = (): void => {
    setShortUrl('');
    setUrl('');
    setLoading(false);
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
          <div className={styles.loader}>
            {loading && <CircularProgress />}
          </div>
          
          <LinkContent shortUrl={shortUrl} onReset={reset} />
        </div>
      </div>
    </div>
  );
}

export default Shortener;