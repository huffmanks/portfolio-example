import { footerLinks } from '../../constants/footerLinks'

import FooterCol from './FooterCol'

const Footer = () => {
    return (
        <div className='p-10 bg-gray-300'>
            <div className='w-full grid lg:grid-cols-[325px_auto] justify-between gap-12 mb-10'>
                <div className='text-center lg:text-left'>
                    <div className='mb-10 text-6xl text-black'>
                        Let&rsquo;s <span className='text-orange-400 underline'>work</span> <span className='lg:block lg:mt-2'>together</span>
                    </div>
                    <p className='text-gray-600 px-2 sm:px-10 lg:px-0'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime modi at rerum commodi explicabo numquam?</p>
                </div>
                <div className='flex flex-col sm:flex-row basis-full sm:justify-center gap-x-12 gap-y-6 text-center sm:text-left'>
                    {footerLinks.map((col) => (
                        <FooterCol key={col.id} {...col} />
                    ))}
                </div>
            </div>
            <div className='py-8 text-gray-600 text-center border-t border-gray-500'>Copyright &copy; Funflow 2022. All rights reserved</div>
        </div>
    )
}

export default Footer
