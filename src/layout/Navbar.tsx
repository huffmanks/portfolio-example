import { BiMenuAltLeft } from 'react-icons/bi'

import IconButton from '../components/IconButton'

const Navbar = () => {
    return (
        <div className='py-8 px-16'>
            <div className='flex justify-between items-center gap-6'>
                <button className='group flex justify-center items-center gap-2'>
                    <span className='text-sm uppercase leading-none'>Menu</span>
                    <BiMenuAltLeft className='text-2xl group-hover:fill-orange-400' />
                </button>
                <div className='text-2xl'>Funflow</div>
                <div className='flex gap-4'>
                    <IconButton path='https://facebook.com' icon='FaFacebookF' />
                    <IconButton path='https://dribbble.com' icon='FaDribbble' />
                    <IconButton path='https://instagram.com' icon='FaInstagram' />
                </div>
            </div>
        </div>
    )
}

export default Navbar
