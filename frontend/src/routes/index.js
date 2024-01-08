import { v4 } from 'uuid';
import { MainLayout } from '~/layouts';
import { Report, Products, Orders } from '~/pages';

export const publicRoutes = [
    {
        id: v4(),
        layout: MainLayout,
        page: Report,
        path: '/',
    },
    {
        id: v4(),
        layout: MainLayout,
        page: Products,
        path: '/products',
    },
    {
        id: v4(),
        layout: MainLayout,
        page: Orders,
        path: '/orders',
    },
    {
        id: v4(),
        layout: MainLayout,
        page: Report,
        path: '/customers',
    },
];
