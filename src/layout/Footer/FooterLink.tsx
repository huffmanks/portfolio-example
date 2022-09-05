import React from 'react'

import { Link } from 'react-router-dom'

import { IFooterLink } from '../../constants/footerLinks'

const FooterLink: React.FC<IFooterLink> = ({ link }) => {
    return (
        <div className='mb-4'>
            {link.label && <span>{link.label}</span>}
            <Link to={link.path} className='text-gray-300 hover:text-orange-400 cursor-pointer'>
                {link.text}
            </Link>
        </div>
    )
}

export default FooterLink
