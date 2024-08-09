// //Activity - 1

// const promise1 = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         resolve('This is a success message after 2 seconds!!');
//     },2000);
// });

// promise1.then((result) => {
//     console.log(result);
// })
// .catch((error) => {
//     console.log('Error -> ',error);
// })

// const promise2 = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         reject(new Error('this is error message after 2 seconds!!'));
//     },2000);
// });

// promise2.then((result) => {
//     console.log(result);
// })
// .catch((error) => {
//     console.log(error.message);
// })

// //Activity - 2

// const fetchData = (url) => {
//     const prom = new Promise((resolve,reject) => {
//         setTimeout(() => {
//             resolve(`Data fetched from ${url}`);
//         },1000);
//     });
//     return prom;
// };

// fetchData('server1.com')
// .then((result) => {
//     console.log(result);
//     return fetchData('server2.com')
// })
// .then((result) => {
//     console.log(result);
//     return fetchData('server3.com')
// })
// .then((result) => {
//     console.log(result);
//     return fetchData('server4.com')
// })
// .then((result) => {
//     console.log(result);
// })
// .catch((error) => {
//     console.log(error.message);
// });


// //Activity - 3

// const promise3 = new Promise((resolve,reject) => {
//     resolve('yippie prmise resolved!!');
// })

// const promise4 = new Promise((resolve,reject) => {
//     reject(new Error('oops!!! Error occured'));
// })

// const promResolved = async(promise) => {
//     try{
//         const message = await promise;
//         console.log(message);
//     }
//     catch(error){
//         console.log(error.message);
//         // console.log(error.stack);
//     }
// }

// promResolved(promise3);
// promResolved(promise4);

// // const promiseGen = new Promise((resolve,reject) => {
// //     const hasError = false;
// //     if(hasError){
// //         reject(new Error('oops!! error occured'));
// //     }
// //     else{
// //         resolve('promise resolved successfully!!!');
// //     }
// // })

// // const handlePromise = async(promise) => {
// //     try{
// //         const result = await promise;
// //         console.log(result);
// //     }
// //     catch(error){
// //         console.log("Error: ",error.message);
// //     }
// // }

// // handlePromise(promiseGen);

//Activity - 4

// const handleAPI = async(api) => {
//     try{
//         const data = await fetch(api);
//         const json = await data.json();
//         console.log(json);
//     }
//     catch(error){
//         console.log("Error fetching data",error.message);
//     }
// }

// handleAPI('https://dummyapi.online/api/movies');

// const handleAPI2 = (api) => {
//     return fetch(api)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         return response.json(); // This also returns a promise
//       })
//       .then((json) => {
//         return json; // Resolve with the JSON data
//       })
//       .catch((error) => {
//         throw new Error(`Error fetching data: ${error.message}`);
//       });
//   };
  
//   // Usage
//   handleAPI2('https://dummyapi.online/api/movies')
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((error) => {
//       console.error(error.message);
//     });

// const promise1 = Promise.resolve('Promise 1 resolved');
// const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'Promise 2 resolved'));
// const promise3 = new Promise((resolve) => setTimeout(resolve, 200, 'Promise 3 resolved'));

// Promise.all([promise1, promise2, promise3])
//   .then((values) => {
//     console.log('All promises resolved:', values);
//   })
//   .catch((error) => {
//     console.error('One or more promises rejected:', error);
//   });

const promise1 = new Promise((resolve) => setTimeout(resolve, 100, 'Promise 1 resolved'));
const promise2 = new Promise((resolve) => setTimeout(resolve, 50, 'Promise 2 resolved'));
const promise3 = new Promise((resolve) => setTimeout(resolve, 150, 'Promise 3 resolved'));

Promise.race([promise1, promise2, promise3])
  .then((value) => {
    console.log('First promise resolved:', value);
  })
  .catch((error) => {
    console.error('First promise rejected:', error);
  });