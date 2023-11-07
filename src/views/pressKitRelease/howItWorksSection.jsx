import HowItWorksCard from './howItWorksCard'
import HowItWorksVideoCard from './howItWorksVideoCard'
import { ReactComponent as GoalIcon } from 'src/assets/icons/target.svg'
import { ReactComponent as ExecuteIcon } from 'src/assets/icons/shuttle.svg'
import { ReactComponent as FrameIcon } from 'src/assets/icons/review.svg'

const HowItWorksSection = () => {
  return (
    <div className='bg-[#161616]'>
      <div className='grid grid-cols-1 p-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 xl:grid-cols-2 xl:gap-20'>
        <div>
          <HowItWorksVideoCard />
        </div>
        <div className='grid gap-6'>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
            <HowItWorksCard
              heading='Define your goals'
              description='Outline brand identity and goals. Establish KPI’s and execution'
              icon={GoalIcon}
              num='1'
            />
            <HowItWorksCard
              heading='Let us execute'
              description="We’ll script, film, edit, and post all contents. You're welcome to be as involved as you like."
              icon={ExecuteIcon}
              num='2'
            />
          </div>
          <HowItWorksCard
            heading='Review and Analyze'
            description='Weekly updates / recaps for review. Summary of data including views, follows, and conversions'
            icon={FrameIcon}
            num='3'
          />
        </div>
      </div>
    </div>
  )
}

export default HowItWorksSection
