interface fakeEmail {
    randomString: string
}

export const fakeEmail = (randomString: fakeEmail) => {
    var chars = 'abcdefghijklmnopqrstuvwxyz1234567890'; 
    var string = ''; 
    for (let index = 0; index < 15; index++) {
        string += randomString.randomString[Math.floor(Math.random() * randomString.randomString.length)];  
    }
    return `${string}@fake.com`;
}
