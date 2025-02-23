export interface Route {
  subHeader?: string;
  name: string;
  href: string;
  icon?: string;
  children?: Route[];
}

export const routes: Route[] = [
  {
    subHeader: 'HOME',
    name: 'Dashboard',
    href: '/dashboard',
    icon: 'dashboardIcon',
  },
  {
    subHeader: 'APP',
    name: 'Ecommerce',
    href: '/ecommerce',
    icon: 'ecommerceIcon',
    children: [
      {
        name: 'AddProduct',
        href: '/dashboard/ecommerce/addProduct',
        icon: 'icon',
      },
      {
        name: 'checkout',
        href: '/dashboard/ecommerce/checkout',
        icon: 'icon',
      },
      {
        name: 'details',
        href: '/dashboard/ecommerce/details',
        icon: 'icon',
      },
      {
        name: 'editProduct',
        href: '/dashboard/ecommerce/editProduct',
        icon: 'icon',
      },
      {
        name: 'list',
        href: '/dashboard/ecommerce/list',
        icon: 'icon',
      },
      {
        name: 'shop',
        href: '/dashboard/ecommerce/shop',
        icon: 'icon',
      },
    ],
  },
  {
    name: 'Blog',
    href: '/blog',
    icon: 'blogIcon',
    children: [
      {
        name: 'details',
        href: '/dashboard/blog/details',
        icon: 'icon',
      },
      {
        name: 'post',
        href: '/dashboard/blog/post',
        icon: 'icon',
      },
    ],
  },
  {
    name: 'profile',
    href: '/dashboard/userProfile/profile',
    icon: 'icon',
  },

  {
    name: 'email',
    href: '/dashboard/email',
    icon: 'icon',
  },
  {
    name: 'calender',
    href: '/dashboard/chat',
    icon: 'icon',
  },
  {
    name: 'kanban',
    href: '/dashboard/kanban',
    icon: 'icon',
  },
  {
    name: 'chat',
    href: '/dashboard/chat',
    icon: 'icon',
  },
  {
    name: 'notes',
    href: '/dashboard/notes',
    icon: 'icon',
  },
  {
    name: 'contact Table',
    href: '/dashboard/contactTable',
    icon: 'icons',
  },
  {
    name: 'contact List',
    href: '/dashboard/contactList',
    icon: 'icons',
  },
  {
    name: 'invoices',
    href: '/dashboard/invoices',
    icon: 'icon',
  },

  {
    subHeader: 'PAGES',
    name: 'pricing',
    href: '/dashboard/pricing',
    icon: 'contactIcon',
  },
  {
    name: 'FAQ',
    href: '/dashboard/faq',
    icon: 'contactIcon',
  },
  {
    name: 'Widgets',
    href: '/widgets',
    icon: 'ecommerceIcon',
    children: [
      {
        name: 'appswidgets',
        href: '/dashboard/widgets/appswidgets',
        icon: 'icon',
      },
      {
        name: 'banners',
        href: '/dashboard/widgets/banners',
        icon: 'icon',
      },
      {
        name: 'cards',
        href: '/dashboard/widgets/cards',
        icon: 'icon',
      },
      {
        name: 'datawidgets',
        href: '/dashboard/widgets/datawidgets',
        icon: 'icon',
      },
      {
        name: 'feedwidgets',
        href: '/dashboard/widgets/feedwidgets',
        icon: 'icon',
      },
    ],
  },
];
