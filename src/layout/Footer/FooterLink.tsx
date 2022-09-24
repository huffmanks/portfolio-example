import { Link } from 'react-router-dom'

import { IFooterLink } from '../../constants/footerLinks'

const FooterLink = (link: IFooterLink) => {
    return (
        <div className='mb-1 text-gray-600'>
            {link.label ? (
                <>
                    <span>{link.label}</span>
                    <a href={link.path} className='hover:text-orange-400 cursor-pointer'>
                        {link.text}
                    </a>
                </>
            ) : (
                <Link to={link.path} className='hover:text-orange-400 cursor-pointer'>
                    {link.text}
                </Link>
            )}
        </div>
    )
}

export default FooterLink
