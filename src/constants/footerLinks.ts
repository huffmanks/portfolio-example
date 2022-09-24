export interface IFooterLink {
    id: number
    path: string
    text: string
    label?: string
}

export interface IFooterCol {
    id: number
    heading: string
    links: IFooterLink[]
}

export const footerLinks: IFooterCol[] = [
    {
        id: 1,
        heading: 'Features',
        links: [
            {
                id: 11,
                path: '/about',
                text: 'About Us',
            },
            {
                id: 12,
                path: '/projects',
                text: 'Our Projects',
            },
            {
                id: 13,
                path: '/why',
                text: 'Why Us',
            },
            {
                id: 14,
                path: '/blog',
                text: 'Latest Blog',
            },
        ],
    },
    {
        id: 2,
        heading: 'Support',
        links: [
            {
                id: 21,
                path: '/privacy-policy',
                text: 'Privacy Policy',
            },
            {
                id: 22,
                path: '/faq',
                text: 'FAQ',
            },
            {
                id: 23,
                path: '/contact',
                text: 'Contact',
            },
        ],
    },
    {
        id: 3,
        heading: 'Contact Us',
        links: [
            {
                id: 31,
                path: '#',
                text: '767 5th Street, 21st Floor,',
            },
            {
                id: 32,
                path: '#',
                text: 'New York, USA',
            },
            {
                id: 33,
                path: 'mailto:hello@qpox.com',
                text: 'hello@qpox.com',
                label: 'Mail us: ',
            },
            {
                id: 34,
                path: 'tel:0998-3829-3920',
                text: '0998 3829 3920',
                label: 'Call us: ',
            },
        ],
    },
]
