// ** icon imports
import arrow from 'src/assets/images/sliderArrow.png'


const HoverCard = ({heading, date, description})=>{
    return (
        <div className='flex'>
            <div className="w-[350px] h-[120px] flex flex-col p-2 bg-white">
        <div className="flex justify-between items-center border-b pb-2">
            <div className='w-[70%]'>
                <h2>{heading}</h2>
            </div>
            <div>
                <p className="text-xs"> {date}</p>
            </div>

        </div>
        <div className="pt-2">
        <p className="text-xs ">{description}</p>
        </div>
        </div>
        <div>
            <img src={arrow} alt='arrow' className='bg-red-500 ml-4'/>
        </div>
        </div>
    )
}
export default HoverCard;