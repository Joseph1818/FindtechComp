import React from 'react'
import { Placeholder } from 'semantic-ui-react'
import SearchIcon from '@mui/icons-material/Search';

interface searchBarProps  {
  placeholder: string;
  data: any;
}

const SearchBar : React.FC<searchBarProps> = ({placeholder,data}) => {
  return (

    <div className='input'>
      <div className='searchInputs'>
        <input type='text' placeholder={placeholder}/>
        <div className='searchIcon'><SearchIcon/></div>
      </div>
      <div className='dataResults'></div>
    </div>
  
  )
}

export default SearchBar