let routerServiceInstance = null;

const SIGN_IN = 'sign-in';
const SIGN_UP = 'sign-up';
const COURSE = 'course';
const PROFILE = 'profile';

const SEPARATOR = '/';

export default class RouterService {
    static factory() {
        if (routerServiceInstance === null) {
            routerServiceInstance = new RouterService();
        }

        return routerServiceInstance;
    }

    getSignInRoute = () => {
        return SEPARATOR + SIGN_IN;
    };

    getSignUpRoute = () => {
        return SEPARATOR + SIGN_UP;
    };

    getCourseRoute = () => {
        return SEPARATOR + COURSE;
    };

    getProfileRoute = () => {
        return SEPARATOR + PROFILE;
    };

    getHomeRoute = () => {
        return SEPARATOR;
    };
}

export const appRouter = RouterService.factory();