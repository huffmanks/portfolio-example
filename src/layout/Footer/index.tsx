import { footerLinks } from '../../constants/footerLinks'

import FooterCol from './FooterCol'

const Footer = () => {
    return (
        <div className='p-10 bg-gray-300'>
            <div className='grid grid-cols-[325px_auto] justify-between gap-12 mb-10'>
                <div>
                    <div className='mb-10 text-6xl text-black'>
                        <div className='mb-2'>
                            Let&rsquo;s <span className='text-orange-400 underline'>work</span>
                        </div>
                        <div>together</div>
                    </div>
                    <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime modi at rerum commodi explicabo numquam?</p>
                </div>
                <div className='flex basis-full gap-12'>
                    {footerLinks.map((col) => (
                        <FooterCol key={col.id} {...col} />
                    ))}
                </div>
            </div>
            <div className='py-8 text-gray-600 text-center border-t-2'>Copyright &copy; Funflow 2022. All rights reserved</div>
        </div>
    )
}

export default Footer
