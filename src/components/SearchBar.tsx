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
  const [wordEntered, setWordEntered] = useState<string>("");

  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord)
    const newFilter = data.filter((value) => {
      return value.suburb.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilterData([]);

    } else {
      setFilterData(newFilter);
    }
  };

  const clearInput = () => {
    setFilterData([]);
     setWordEntered("");
  };

  return (
    <div className="input">
      <div className="searchInputs">
        <input type="text" placeholder={placeholder} value={wordEntered} onChange={handleFilter} />
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
              <p className="dataItem">{value.suburb}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
