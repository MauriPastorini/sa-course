import {
    userInfo
} from "os";

(async () => {
    const prom1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Promise 1')
            resolve("DATA");
        }, 6000)
    })
    const prom2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Promise 2')
            resolve();
        }, 4000)
    })
    const prom3 = new Promise((resolve, reject) => {
        setTimeout(function prom3Fun() {
            console.log('Promise 3')
            resolve();
        }, 3000)
    })
    const prom4 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Promise 4')
            resolve({
                key: 'data'
            });
        }, 10000)
    });


    // const prom5 = async function test() {
    //     if(salioAlgoMal) throw new Error('TODO MAL')
    //     return 'Termine';
    // }
    // const prom5V2 = function test() {
    //     return new Promise((resolve, reject) => { return resolve('Termine')});
    // }
    // try{
    //     const data = await prom5;
    // }catch(err){
    //     console.log(err);
    // }

    // prom5V2().then((data)=> {
    //     console.log(data)
    // })
    // prom5V2().catch((err)=> {
    //     console.log("error: ", err)

    // })

    const promArr = [prom1, prom2, prom3, prom4];
    await Promise.race(promArr);
    console.log('Finish');
})()




User.find({
    id: 1
}, (err, data) => {
    if (err) console.error("ERROR")
    console.log(data); //Imprime el usuario
    User.find({
        id: 1
    }, (err, data) => {
        if (err) console.error("ERROR")
        console.log(data); //Imprime el usuario
        User.find({
            id: 1
        }, (err, data) => {
            if (err) console.error("ERROR")
            console.log(data); //Imprime el usuario
            User.find({
                id: 1
            }, (err, data) => {
                if (err) console.error("ERROR")
                console.log(data); //Imprime el usuario
                User.find({
                    id: 1
                }, (err, data) => {
                    if (err) console.error("ERROR")
                    console.log(data); //Imprime el usuario
                })
            })
        })
    })
})


const data = await User.find({
    id: 1
});
console.log(data);
const data = await User.find({
    id: 1
});
const data = await User.find({
    id: 1
});
const data = await User.find({
    id: 1
});
const data = await User.find({
    id: 1
});
const data = await User.find({
    id: 1
});
const data = await User.find({
    id: 1
});
const data = await User.find({
    id: 1
});
const data = await User.find({
    id: 1
});