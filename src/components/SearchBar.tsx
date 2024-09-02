import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

interface DataItem {
  name: string;
  suburb: string;
  email: string;
  phoneNum: string;
  physicalAdress: string;
  link: string,
}

interface SearchBarProps {
  placeholder: string;
  data: DataItem[]; 
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder, data }) => {
  return (
    <div className='input'>
      <div className='searchInputs'>
        <input type='text' placeholder={placeholder} />
        <div className='searchIcon'>
          <SearchIcon />
        </div>
      </div>
      <div className='dataResult'>
        {data.map((value, key) => (
          <div className="" key={key}>
            <p className='dataItem'>{value.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
