export interface ITreeItemProps {

}

export const TreeItemDisplay = (props: any) => {
    return(
        <div>
            <a target="_top" href={props.url}>{props.label}</a>
        </div>
    )
}