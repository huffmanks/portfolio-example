import { FaFacebookF, FaDribbble, FaInstagram } from 'react-icons/fa'

const icons = { FaFacebookF, FaDribbble, FaInstagram }

interface IProps {
    path: string
    color: string
    icon: keyof typeof icons
}

const IconButton = ({ path, color, icon }: IProps) => {
    const Icon = icons[icon]

    const styles: INestedStyles = {
        link: {
            base: 'group rounded-full border cursor-pointer transition-all duration-300 hover:border-transparent hover:scale-105',
            light: 'border-gray-300 hover:bg-orange-400',
            dark: 'border-black hover:bg-white',
        },
        icon: {
            base: 'text-xs transition-all duration-300',
            light: 'group-hover:fill-white',
            dark: 'fill-black',
        },
    }

    return (
        <a href={path} className={`${styles.link.base} ${styles.link[color]}`}>
            <button className='flex justify-center items-center p-1.5'>
                <Icon className={`${styles.icon.base} ${styles.icon[color]}`} />
            </button>
        </a>
    )
}

export default IconButton
