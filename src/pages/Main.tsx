import { PinnedItems } from "../components/PinnedItems"
import { SearchBar } from "../components/SearchBar"
import TreeDisplay from "../components/TreeDisplay"

export const Main = () => {
    return (
        <div>
            <h1>Better Navigation Tree!!</h1>
            <SearchBar />
            <PinnedItems />
            <TreeDisplay />             
        </div>
    )
}