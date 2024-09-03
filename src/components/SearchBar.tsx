import React, {useState} from 'react';
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

  const [filterData, setFilterData] = useState <DataItem[]>([]);

  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchFilter = event.target.value;

    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchFilter.toLowerCase());
    })

    if (searchFilter === ""){
      setFilterData([]);
    } else {
    setFilterData(newFilter);
    }
  
  }

  return (
    <div className='input'>
      <div className='searchInputs'>
        <input type='text' placeholder={placeholder} onChange={handleFilter} />
        <div className='searchIcon'>
          <SearchIcon />
        </div>
      </div>

      { filterData.length != 0 && ( <div className='dataResult'>
        {filterData.map((value, key) => (
          <div className="" key={key}>
            <p className='dataItem'>{value.name}</p>
          </div>
        ))}
      </div>)}
    
    </div>
  );
};

export default SearchBar;
