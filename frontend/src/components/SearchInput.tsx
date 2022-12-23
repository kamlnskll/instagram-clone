import React, { useEffect, useState } from 'react'
import { searchUsers } from '../utils/axios/userAPIs';

type Props = {
onSearch: any
}

const SearchInput = ({onSearch}: Props) => {
    const DEBOUNCE_DELAY = 500;
    const [searchTerm, setSearchTerm] = useState('');
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
    const [results, setResults] = useState([]);
  
    useEffect(() => {
      const timerId = setTimeout(() => {
        setDebouncedSearchTerm(searchTerm);
      }, DEBOUNCE_DELAY);
  
      return () => {
        clearTimeout(timerId);
      };
    }, [searchTerm]);

    useEffect(() => { 
        searchUsers(debouncedSearchTerm).then(res => onSearch(res))
      }, [debouncedSearchTerm]);

      useEffect(() => {
        if (debouncedSearchTerm === '') {
          onSearch([]);
          return;
        }}, [debouncedSearchTerm])
      

return (
<form>
<input placeholder='Search' className='w-full py-2 mb-6 pl-4 outline-none bg-gray-200 border-none rounded-lg' value={searchTerm} onChange={e => setSearchTerm(e.target.value)}/>
<h1 className='absolute top-6 right-8 text-white bg-gray-300 border rounded-full px-1 text-xs cursor-pointer' onClick={() => setSearchTerm('')}>X</h1>
</form>

)

}
export default SearchInput