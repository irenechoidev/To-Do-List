import { Navigate, Route } from 'react-router-dom';
import { isAuthenticated } from './isAuthenticated';

export const AuthenticatedRoute = (path, element) => {
    if (!isAuthenticated()) {
        element = <Navigate to = '/'/>
    }

    return <Route path={path} element={element} />
}

export const UnauthenticatedRoute = (path, element) => {
    if (isAuthenticated()) {
        element = <Navigate to = '/'/>
    }

    return <Route path={path} element={element} />
}