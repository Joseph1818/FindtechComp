import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

interface DataItem {
  name: string;
  suburb: string;
  email: string;
  phoneNum: string;
  physicalAddress: string;
  link: string;
}

interface SearchBarProps {
  placeholder: string;
  data: DataItem[];
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder, data }) => {
  const [filterData, setFilterData] = useState<DataItem[]>([]);
  const [wordEntered, setWordEntered] = useState<DataItem[]>([]);

  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchFilter = event.target.value;

    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchFilter.toLowerCase());
    });

    if (searchFilter === "") {
      setFilterData([]);
    } else {
      setFilterData(newFilter);
    }
  };

  const clearInput = () => {
    setFilterData([]);
  };

  return (
    <div className="input">
      <div className="searchInputs">
        <input type="text" placeholder={placeholder} onChange={handleFilter} />
        <div className="searchIcon">
          {filterData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearButton" onClick={clearInput} />
          )}
        </div>
      </div>

      {filterData.length !== 0 && (
        <div className="dataResult">
          {filterData.map((value, key) => (
            <div className="" key={key}>
              <p className="dataItem">{value.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
