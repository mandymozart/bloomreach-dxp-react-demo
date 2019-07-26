import Container from './Container';
import NoDefinitionFound from './NoDefinitionFound';

it('should fail to resolve a service if none are registered', () => {
    const container = new Container();

    const expected = new NoDefinitionFound('No value registered for id \'non existent\'');
    expect(() => container.resolve('non existent')).toThrow(expected);
});

it('should resolve a registered string', () => {
    const container = new Container();
    container.register('registered', () => 'value');

    const result = container.resolve('registered');

    expect(result).toBe('value');
});

it('should resolve a registered service', () => {
    const container = new Container();
    container.register('registered', () => new Container());

    const result = container.resolve<Container>('registered');

    expect(result.constructor.name).toBe('Container');
});

it('should resolve a registered service and cache the value on first construction', () => {
    const container = new Container();
    container.register('registered', () => new Container());

    const result1 = container.resolve('registered');
    const result2 = container.resolve('registered');

    expect(result1).toBe(result2);
});

it('should resolve a registered prototype service and not cache the value on first construction', () => {
    const container = new Container();
    container.registerPrototype('registered', () => new Container());

    const result1 = container.resolve<Container>('registered');
    const result2 = container.resolve<Container>('registered');

    expect(result1).not.toBe(result2);
    expect(result1.constructor.name).toBe('Container');
    expect(result2.constructor.name).toBe('Container');
});

it('should resolve a value recursively', () => {
    const container = new Container();
    container.register('key', () => 'value');
    container.register('appender', (c) => c.resolve('key') + 'value');

    const result = container.resolve('appender');

    expect(result).toBe('valuevalue');
});
