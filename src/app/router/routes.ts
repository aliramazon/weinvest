import { SideNavLinksGroupProps } from '../../components';
export const SIDE_NAV_LINKS_GROUPS: SideNavLinksGroupProps[] = [
    {
        links: [
            {
                to: '/',
                text: 'Dashboard',
                icon: 'dashboard'
            },
            {
                to: 'funds',
                text: 'Funds',
                icon: 'funds'
            },
            {
                to: 'companies',
                text: 'Companies',
                icon: 'companies'
            }
        ]
    },
    {
        groupName: 'Legal',
        links: [
            {
                to: 'documents',
                text: 'Archive',
                icon: 'documents'
            },
            {
                to: 'current-documents',
                text: 'Current Documents',
                icon: 'due-documents'
            }
        ]
    },
    {
        groupName: 'Settings',
        links: [
            {
                to: 'members',
                text: 'Users',
                icon: 'members'
            },
            {
                to: 'profile',
                text: 'Account Settings',
                icon: 'account'
            }
        ]
    }
];
