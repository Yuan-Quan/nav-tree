import * as React from 'react';
import Autocomplete from "@mui/material/Autocomplete"
import TextField from "@mui/material/TextField"
import { useContext } from "react";
import { AppContext } from "../App";

interface TreeItem {
    label: string,
    isRoot: boolean,
    target: string,
    children?: TreeItem[]
}

export const SearchBar = () => {
    const {searchTerm, setSearchTerm} = React.useContext(AppContext);
    
    const handleSearchChange = (event: any) => {
        setSearchTerm(event.target.value);
    }

    return (
        <div>
            <Autocomplete
              id="main-search-box"
              freeSolo
              options={[]}
              renderInput={(params) => <TextField {...params} label="Search" />}
              onInputChange={handleSearchChange}
            />
        </div>
    )
}