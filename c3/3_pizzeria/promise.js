(async () => {
    const prom1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Promise 1')
            resolve();
        }, 6000)
    })
    const prom2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Promise 2')
            resolve();
        }, 4000)
    })
    const prom3 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Promise 3')
            resolve();
        }, 3000)
    })
    const prom4 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Promise 4')
            resolve();
        }, 10000)
    })
    const promArr = [prom1, prom2, prom3, prom4];
    await Promise.race(promArr);
    console.log('Finish');
})()