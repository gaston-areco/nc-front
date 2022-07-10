import Members from '../Members';
import MembersView from '../Views/MembersView';
import AccessDenied from '@/components/AccessDenied';

const MembersRoute =
  {
    path: '/',
    meta: {
      name: 'Inicio'
    },
    component: Members,
    children: [
      {
        path: '/',
        component: MembersView,
        meta: {name: 'Members'}
      }, {
        path: '/access-denied',
        component: AccessDenied,
        meta: {name: 'Access denied'}
      }
    ]
  };

export default MembersRoute;
