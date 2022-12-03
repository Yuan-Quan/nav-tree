import Autocomplete from "@mui/material/Autocomplete"
import TextField from "@mui/material/TextField"

export const SearchBar = () => {
    return (
        <div>
            <Autocomplete
              id="main-search-box"
              freeSolo
              options={top100Films.map((option) => option.title)}
              renderInput={(params) => <TextField {...params} label="Search" />}
            />
        </div>
    )
}