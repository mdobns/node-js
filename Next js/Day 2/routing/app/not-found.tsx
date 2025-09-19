import './global.css'

export default function NotFound(){
    return (
        <div className="flex items-center justify-center grid ">
            <h2 className='text-5xl'>Page not found</h2>
            <p className='text-2xl'>Could not find the requested resources</p>
        </div>
    );
}