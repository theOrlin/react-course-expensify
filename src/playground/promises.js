const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('This is the resolve function call.');
        reject('Something happened.');
    }, 2000);
});

console.log('before');

promise.then((data) => {
    console.log('1', data);
}, (error) => {
    console.log(error);
});

console.log('after');