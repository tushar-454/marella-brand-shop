import { MdOutlineCollectionsBookmark } from 'react-icons/md';
import bannerImg from '../../../assets/banner.png';
const Banner = () => {
  return (
    <div className='bg-white border-gray-200 dark:bg-gray-900/90'>
      <div className='max-w-screen-xl mx-auto p-4'>
        <div className='flex flex-col-reverse md:flex-row gap-10 md:gap-5 justify-center items-center'>
          <div className='bannerContent w-full md:w-1/2 space-y-5'>
            <h1 className='text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r to-[#FAB72E] from-[#10DFF0]'>
              Get Ready to Shine
            </h1>
            <p className='text-3xl dark:text-slate-200'>
              Shop From{' '}
              <span className='text-4xl text-transparent bg-clip-text bg-gradient-to-r to-[#14ff43] from-[#FAB72E]'>
                Marella
              </span>
              , All Premium Collections Here.
            </p>
            <div className='customButton'>
              <button>
                <span className='relative text-xl flex gap-2 justify-center items-center'>
                  Our Collection <MdOutlineCollectionsBookmark />
                </span>
              </button>
            </div>
          </div>
          <div className='bannerImg w-full md:w-1/2'>
            <img src={bannerImg} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
