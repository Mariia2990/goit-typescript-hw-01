type User = {
    username: string;
    age: number;
    toggle: boolean;
    empty: null;
}

const user: User = {
    username: 'Max',
    age: 50,
    toggle: true,
    empty: null,
}


const callback: (a: number) => number = (a) => { return 100 + a };
