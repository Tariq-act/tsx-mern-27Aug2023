import axios from 'axios';
import { useEffect, useState } from 'react';

const useHomeWorld = (initialUrl: string) => {
  const [homeWorld, setHomeWorld] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const fetchData = async (url: string) => {
    setIsLoading(true);
    try {
      const response = await axios.get(url);
      const jsonData = await response.data;
      setHomeWorld(jsonData);
    } catch (error) {
      setIsLoading(false);
      setError('Species Does not exist.');
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData(initialUrl);
  }, [initialUrl]);

  return { homeWorld, error, isLoading };
};

export default useHomeWorld;
