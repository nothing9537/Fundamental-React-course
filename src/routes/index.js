import About from './../Components/pages/About';
import Posts from './../Components/pages/Posts';
import PostIdPage from './../Components/pages/PostIdPage';
import Login from '../Components/pages/Login';

export const privateRoutes = [
    { path: "/about", component: About, exact: true },
    { path: "/posts", component: Posts, exact: true },
    { path: "/posts/:id", component: PostIdPage, exact: false }
]

export const publicRoutes = [
    { path: "/login", component: Login, exact: true },
]