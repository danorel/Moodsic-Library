const version = process.env.APP_VERSION || 0;
const PREFIX = `MY_APP_v${version}::`;

export function set<T = object>(key: string, value: T): void {
    if (typeof window === 'undefined' || !localStorage) {
        return;
    }

    try {
        const serializedValue = JSON.stringify(value);
        localStorage.setItem(PREFIX + key, serializedValue);
    } catch (error) {
        throw new Error('Store serialization failed');
    }
}

export function get<T = object>(key: string): T | undefined {
    if (typeof window === 'undefined' || !localStorage) {
        return;
    }

    try {
        const serializedValue = localStorage.getItem(PREFIX + key);
        if (serializedValue == null) {
            return;
        }
        return JSON.parse(serializedValue);
    } catch (error) {
        throw new Error('Store deserialization failed');
    }
}
