/**
 * Usage:
 *
 * const container = new Container()
 * container.register('otherService', (c) => new OtherService)
 * container.register('baseUrl', (c) => 'https://google.com')
 * container.register('service', (c) => new Service(c.resolve('otherService'), c.resolve('baseUrl'))
 *
 * const service = container.resolve('service', Service)
 * service.something()
 */
import NoDefinitionFound from './NoDefinitionFound';

export default class Container {
    public readonly singletonFactories = new Map<string, (container: Container) => unknown>();
    public readonly prototypeFactories = new Map<string, (container: Container) => unknown>();
    public readonly singletons = new Map<string, unknown>();

    /**
     * Values from the passed function will never be cached
     * @param id
     * @param value
     */
    public register<T>(id: string, value: (container: Container) => T): void {
        this.singletonFactories.set(id, value);
    }

    /**
     * Values generated passed function will not be cached
     * @param id
     * @param value
     */
    public registerPrototype<T>(id: string, value: (container: Container) => T): void {
        this.prototypeFactories.set(id, value);
    }

    /**
     * Resolve a value registered for an id
     * @param id
     */
    public resolve<T>(id: string): T {
        return this.getFromCacheOrBuild(id) as T;
    }

    private getFromCacheOrBuild(id: string): unknown {
        if (this.singletons.has(id)) {
            return this.singletons.get(id);
        } else {
            const singletonFactory = this.singletonFactories.get(id);
            const prototypeFactory = this.prototypeFactories.get(id);
            if (singletonFactory !== undefined) {
                const value = singletonFactory(this);
                this.singletons.set(id, value);
                return value;
            } else if (prototypeFactory !== undefined) {
                return prototypeFactory(this);
            } else {
                throw new NoDefinitionFound(`No value registered for id '${id}'`);
            }
        }
    }
}
