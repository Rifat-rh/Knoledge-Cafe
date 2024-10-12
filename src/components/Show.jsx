import { FaBookmark } from 'react-icons/fa';

export default function Show ({block , bookHandle}){
    
    return(
        <div className='my-10'>
            
            <div className="max-w-4xl">
                <img className="w-full my-4" src= {block.author_cover} alt="" />
                <div className="flex justify-between">
                    <div className="flex justify-start">
                    <img  src= {block.author_img} alt="" />

                    <div className="my-8 mx-2">
                    <h1 className="text-4xl ">{block.author}</h1>
                    <h3> {block.publish_date} </h3>
                    </div>
                    </div>
                    <div className='flex py-16'>
                        <div >
                            {block.reading_time} min read
                        </div>
                        <div>
                            <button onClick={()=>bookHandle(block)}><FaBookmark></FaBookmark></button>
                        </div>
                    </div>

                </div>
                <h1 className='text-4xl pl-7'> {block.title} </h1>
                <button className='text-rose-900 pl-7'>Mark as read</button>
                
            </div>
            <div>
            
            </div>
            
        </div>
    )
}