import * as React from 'react';
import Autocomplete from "@mui/material/Autocomplete"
import TextField from "@mui/material/TextField"
import { useMemo } from "react";
import { AppContext } from "../App";
import { debounce } from 'lodash'

interface TreeItem {
    label: string,
    isRoot: boolean,
    target: string,
    children?: TreeItem[]
}

export const SearchBar = () => {
    const {searchTerm, setSearchTerm} = React.useContext(AppContext);
    const debouncedSetSearchTerm = useMemo(
        () => debounce(setSearchTerm, 200)
    , [])
    
    const handleSearchChange = (event: any) => {
        debouncedSetSearchTerm(event.target.value);
    }
    

    return (
        <div>
            <Autocomplete
              id="main-search-box"
              freeSolo
              options={[]}
              renderInput={(params) => <TextField {...params} label="搜寻" />}
              onInputChange={handleSearchChange}
            />
        </div>
    )
}