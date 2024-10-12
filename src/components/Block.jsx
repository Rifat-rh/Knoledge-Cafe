import { useEffect, useState } from "react";
import Show from "./Show";


export default function Block({bookHandle}) {
  const [blocks, setblocks] = useState([]);
  useEffect(() => {
    fetch("block.json")
      .then((res) => res.json())
      .then((data) => setblocks(data));
  }, []);
  return (
    <div>
        {
            blocks.map( (block)=>(
                <Show key={block.id} block = {block} bookHandle={bookHandle} ></Show>
            )
              
            )
        }
    </div>
  )
}
