import Autocomplete from "@mui/material/Autocomplete"
import TextField from "@mui/material/TextField"

interface TreeItem {
    label: string,
    isRoot: boolean,
    target: string,
    children?: TreeItem[]
}

export const SearchBar = () => {
    return (
        <div>
            <Autocomplete
              id="main-search-box"
              freeSolo
              options={[]}
              renderInput={(params) => <TextField {...params} label="Search" />}
            />
        </div>
    )
}