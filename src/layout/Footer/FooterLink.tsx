import { Link } from 'react-router-dom'

import { IFooterLink } from '../../constants/footerLinks'

const FooterLink = (link: IFooterLink) => {
    return (
        <div className='mb-1'>
            {link.label && <span>{link.label}</span>}
            <Link to={link.path} className='text-gray-600 hover:text-orange-400 cursor-pointer'>
                {link.text}
            </Link>
        </div>
    )
}

export default FooterLink
