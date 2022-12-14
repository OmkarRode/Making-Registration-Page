// console.log('person1: shows ticket');
// console.log('person2: shows ticket');

// const promiseWifeBringingTicks= new Promise((resolve,reject)=>{
// setTimeout(()=>{
//     resolve('ticket');
// },3000)
// });

// // promiseWifeBringingTicks.then((t)=>{
// //     console.log(`person3: shows ${t}`);
// // })

// const getPopcorn =promiseWifeBringingTicks.then(
//     (t)=>{
        // console.log('wife: I have the tics'); 
        // console.log('husband: we should go in');
        // console.log('wife: no i am hungry');
//         return new Promise((resolve,reject) => resolve(`${t} popcorn`));
//     }
// )

// const getButter =  getPopcorn.then(
//     (t)=>{
        // console.log('husband: i got some popcorn');
        // console.log('husband: we should go in');
        // console.log('wife: I need butter on my popcorn');
//         return new Promise((resolve,reject) => resolve(`${t} butter`));
//     }
// )
// getButter.then((t)=> console.log(`${t}`));
// console.log('person4: shows ticket');
// console.log('person5: shows ticket');


////////////////////////////////////////////////////////////////////////////////////////////////
console.log('person1: shows ticket');
console.log('person2: shows ticket');

const Premovie =async () => {
    const promiseWifeBringingTicks= new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject('ticket');
        },3000)
        });
        let ticket
        try{
            ticket = await promiseWifeBringingTicks;
        }catch(e)
        {
            ticket = `sad face`;
        }

        return ticket;
}


Premovie().then((m)=>{console.log(`person 3: shows ${m}`)});


console.log('person4: shows ticket');
console.log('person5: shows ticket');