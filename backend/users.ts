export class User {
    constructor(public email: string,
        public name: string,
        private password: string) { }

    matches(another: User): boolean {
        return another !== undefined &&
            another.email === this.email &&
            another.password === this.password
    }
}

export const users: { [key: string]: User } = {
    'ana@gmail.com': new User('ana@gmail.com', 'Ana', 'ana123'),
    'fernando@gmail.com': new User('fernando@gmail.com', 'Fernando', 'fernando123')
}
