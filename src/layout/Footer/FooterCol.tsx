import React from 'react'

import { IFooterLink, IFooterCol } from '../../constants/footerLinks'

import FooterLink from './FooterLink'

const FooterCol: React.FC<IFooterCol> = ({ col }) => {
    return (
        <div>
            <div className='mb-8 font-semibold'>{col.heading}</div>
            {col.map((link: IFooterLink) => (
                <FooterLink key={link.id} link={link} />
            ))}
        </div>
    )
}

export default FooterCol
