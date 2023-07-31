import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_STORE } from '@src/config/env';

export const fetchData = (props: any) => {
  const [data, setData] = useState<any>([]);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    axios
      .get(`${API_STORE}${props.url}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  return { data, error };
};
