import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import Link from '../models/link';

const API_URL = process.env.REACT_APP_API_URL;
const REQUEST_CONFIG = {
  'Content-Type': 'application/json'
} as AxiosRequestConfig;

interface APIResponse {
  link: Link;
  error: string;
}

class Api {
  shorten(link: string): Promise<Link> {
    return new Promise<Link>((resolve, reject) => {
      axios.post(API_URL + 'link', {link}, REQUEST_CONFIG)
        .then((res: AxiosResponse<APIResponse>) => {
          let data = res.data;

          if (data == null || data.error != null) {
            reject(data.error);
          }

          resolve(data.link);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  getLink(id: string): Promise<Link> {
    return new Promise<Link>((resolve, reject) => {
      axios.get(API_URL + 'link?id=' + id)
        .then((res: AxiosResponse<APIResponse>) => {
          let data = res.data;

          if (data.error) {
            reject(data.error);
          }

          if (!data.link.link.startsWith('http')) {
            data.link.link = 'http://' + data.link.link;
          }

          resolve(data.link);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}

const api = new Api();
export default api;