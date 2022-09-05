import { footerLinks, IFooterCol } from '../../constants/footerLinks'

import FooterCol from './FooterCol'

const Footer = () => {
    return (
        <div className='p-10 bg-gray-300'>
            <div className='flex justify-evenly gap-6 mb-10'>
                <div>
                    <div className='text-xl'>
                        <div>
                            Let&rsquo;s <span className='text-orange-400 underline'>work</span>
                        </div>
                        <div>together</div>
                    </div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime modi at rerum commodi explicabo numquam?</p>
                </div>
                <div>
                    {footerLinks.map((col: IFooterCol) => (
                        <FooterCol key={col.id} col={col} />
                    ))}
                </div>
            </div>
            <div className='py-8 text-center border-t-2'>Copyright &copy; Funflow 2022. All rights reserved</div>
        </div>
    )
}

export default Footer
