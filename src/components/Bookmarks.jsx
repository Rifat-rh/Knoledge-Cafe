import Bookmark from "./Bookmark";

export default function Bookmarks ({bookmarks}){
    
    
    return (
        <div className="max-w-">
            <h1>Bookmarks Blog:{bookmarks.length} </h1>
            {
                bookmarks.map((bookmark,idx)=>(<Bookmark key={idx} bookmark={bookmark} ></Bookmark>))
            }
        </div>
    )
}