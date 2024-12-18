import { useState, useEffect } from 'react';
import { loadFromStorage, saveToStorage } from '../utils/localStorage';

export const useLocalStorage = (key, defaultValue) => {
  const [data, setData] = useState(() => loadFromStorage(key, defaultValue));

  useEffect(() => {
    saveToStorage(key, data);
  }, [key, data]);

  return [data, setData];
};