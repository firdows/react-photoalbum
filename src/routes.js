import App from './pages/App';
import Home from './pages/Home';
import User from './pages/User';
import Albums from './pages/Albums/Albums';
import Photo from './pages/Albums/Photo';

const routes = [
    {
        path: '/',
        component: App,
        indexRoute: {
            component: Home
        },
        childRoutes: [
            {
                path: 'user',
                component: User
            },
            {
                path: 'albums/:id(/:title)',
                component: Albums
            },
            {
                path: 'album/photo/:albumId(/:title)',
                component: Photo
            }
        ]
    }
]

export default routes