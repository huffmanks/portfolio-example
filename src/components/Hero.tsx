import Button from './Button'

const Hero = () => {
    return (
        <div className='grid grid-cols-2 items-end gap-12 pt-8 pb-16 pl-16'>
            <div className='flex flex-col items-end'>
                <div className='flex items-center gap-4 mb-12'>
                    <div className='w-10 border-t-2'></div>
                    <div className='text-lg'>&ldquo;We help people to reshape their business.&rdquo;</div>
                </div>

                <div className='flex flex-col gap-2'>
                    <div className='flex items-center gap-6'>
                        <div className='w-16 h-16 rounded-full border-2'>
                            <img className='rounded-full' src='../../design/spotlight.jpg' alt='spotlight' />
                        </div>
                        <div className='text-8xl'>We are</div>
                    </div>

                    <div className='flex items-end gap-4'>
                        <span className='text-5xl font-light text-orange-400 leading-tight'>web3</span>
                        <span className='text-8xl'>&</span>
                        <span className='text-5xl font-light text-orange-400 leading-tight'>nftbased</span>
                    </div>

                    <div className='flex items-center gap-6'>
                        <div className='text-8xl'>agency</div>
                        <div className='w-16 h-16 rounded-full border-2'>
                            <img className='rounded-full' src='../../design/spotlight.jpg' alt='spotlight' />
                        </div>
                    </div>

                    <div className='flex items-center justify-between gap-4'>
                        <Button color='primary' text='Let&rsquo;s talk' />
                        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ipsa quis iste non mollitia quod, cupiditate eligendi repellat.</div>
                    </div>
                </div>
            </div>

            <div className='flex justify-end'>
                <img className='' src='../../design/hero.png' alt='hero' />
            </div>
        </div>
    )
}

export default Hero
