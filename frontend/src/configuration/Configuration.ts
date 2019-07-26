import ResourceApiService from '../services/ResourceApi.service';

import App from '../components/app/App';
import Homepage from '../components/pages/homepage/Homepage';
import Container from '../container/Container';

export function createContainer(): Container {
    const container = new Container();
    // components
    container.register('App', (c) => App(c.resolve('Homepage')));
    container.register('Homepage', () => Homepage());
    // services
    container.register('ResourceApiService', () => new ResourceApiService());
    return container;
}
