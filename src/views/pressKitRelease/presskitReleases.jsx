
// ** images imports
import img from 'src/assets/images/slide1.png'

// ** icon imports
import arrow from 'src/assets/icons/arrow1.svg'

// ** components imports 

const PressKitReleaseSec = ()=>{
    return (
        <section className='relative'>
        <div className="text-white p-[15px] sm:p-[40] md:p-[70] tablet:p-[120px] pt-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl tablet:text-5xl">Press Kit Release</h2>
            <p className="text-xs sm:text-xl md:text-2xl tablet:text-3xl text-justify mt-3">Your Story, Crafted into a Captivating Narrative The art of storytelling is at the heart of every successful press release. Our press release kit service is the epitome of professionalism and artistry, transforming your news into a compelling narrative that grabs the attention of media outlets and readers alike.</p>
        </div>
        <div className='w-full flex p-[15px] sm:p-[40] md:p-[70] tablet:p-[120px] pt-[0px]'>
            <div >
                <img src={img} alt='img' />
            </div>
            <div className=' text-white absolute left-[500px] mt-[20px]'>
                <div className='bg-[#242323] max-w-[450px] min-h-[200px]'>
                <p className='p-2'>Our team of experts understand the power of words. We create press release kits that not only inform but also captivate, ensuring your news stands out in a crowded media landscape. With elegant design and impactful content, our press release kits are your ticket to commanding attention. When your story deserves to be told, trust us to deliver it with grace, sophistication, and the finesse it deserves.</p>
                </div>
                <div>
                <button className='w-full flex justify-end gap-x-1 mt-[12px]'>
                  <p className='p-1'>conatct Us</p> <img src={arrow} alt='icon' />
                </button>
                </div>
            </div>
        </div>
        </section>
    )
}
export default PressKitReleaseSec;