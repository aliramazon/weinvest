export type IconName =
    | 'companies'
    | 'account'
    | 'dashboard'
    | 'due-documents'
    | 'documents'
    | 'funds'
    | 'members';

export interface IconProps {
    name: IconName;
    height?: string;
    width?: string;
    color: string;
}
