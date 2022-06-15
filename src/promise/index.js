const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!')
        }else {
            reject('Woooops!')
        }
    })
}

somethingWillHappen()
.then(response => console.log(response))
.catch(err => console.error(err))

const somethingWillHappen2 = () => new 
Promise((resolve, reject) => true ? 
setTimeout(() => resolve('True'), 5000) : 
reject(error)
);

somethingWillHappen2()
.then(response => console.log(response))
.catch(err => console.error(err));


Promise.all([somethingWillHappen(),somethingWillHappen2()])
.then(response => {
    console.log('Array of results', response);
})
.catch(err => {
    console.error(err);
})