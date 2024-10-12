import profile from '../assets/images/profile.png'
export default function Header(){


    return(
        <div className='flex justify-between my-6'>
            <h1 className='text-4xl'>Knoledge cafe</h1>
            <img src={profile}alt="" />
        </div>
    )
}