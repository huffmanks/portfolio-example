import { FaFacebookF, FaDribbble, FaInstagram } from 'react-icons/fa'

const icons = { FaFacebookF, FaDribbble, FaInstagram }

interface IProps {
    path: string
    icon: keyof typeof icons
}

const IconButton = ({ path, icon }: IProps) => {
    const Icon = icons[icon]

    return (
        <a href={path} className='group rounded-full border border-gray-300 shadow-sm cursor-pointer transition-all duration-300 hover:bg-orange-400 hover:border-transparent hover:scale-105'>
            <button className='flex justify-center items-center p-1.5'>
                <Icon className='text-xs transition-all duration-300 group-hover:fill-white' />
            </button>
        </a>
    )
}

export default IconButton
