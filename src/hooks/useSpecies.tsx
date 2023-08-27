import axios from 'axios';
import { useEffect, useState } from 'react';

const useSpecies = (initialUrl: string) => {
  const [species, setSpecies] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const fetchData = async (url: string) => {
    setIsLoading(true);
    try {
      const response = await axios.get(url);
      const jsonData = await response.data;
      setSpecies(jsonData);
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

  return { species, error, isLoading };
};

export default useSpecies;
