import axios from 'axios';
import { useEffect, useState } from 'react'

// interface Props {
//   url: string;
// }
interface HookResult {
  data: any[]; // Modify this type based on your actual response structure
  isLoading: boolean;
  error: string | null;
  currentPage: number;
  nextPage: () => void;
  prevPage: () => void;
  searchPeople: (searchTerm: string) => void;
  totalPages: number;
}


const usePeopleList = (initialUrl: String): HookResult => {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  // const [count, setCount] = useState<number>(1); 
  const [totalPages, setTotalPages] = useState<number>(0);

  const fetchData = async (url: string) => {
    setIsLoading(true);
    try {
      const response = await axios.get(url)
      const jsonData = await response.data;
      setData(jsonData.results);
      // setCount(jsonData.count);
      setTotalPages(Math.ceil(response.data.count / 10));
      setError(null);
    } catch (error) {
      setError("An error occurred while fetching api.")
    } finally {
      setIsLoading(false);
    }

  }

  useEffect(() => {
    const url = `${initialUrl}/?page=${currentPage}`;
    fetchData(url);

  }, [currentPage, initialUrl])



  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }


  const searchPeople = (searchTerm: string) => {
    const searchUrl = `${initialUrl}/?search=${searchTerm}`;
    fetchData(searchUrl);
    setCurrentPage(1);
  };


  return { data, isLoading, error, currentPage, nextPage, totalPages, prevPage, searchPeople }

}

export default usePeopleList