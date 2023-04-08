// const janjian = new Promise((resolve, reject) => {
//     const num = 1;

//     if (num === 0) {
//         resolve("Berhasil")
//     } else {
//         reject("Gagal")
//     }
// })

// console.log(janjian);

// const url = 'https://jsonplaceholder.typicode.com/users';

// const data = fetch(url)
//     .then((result) => {
//         return result.json();
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.log(error.message, "error nih boss");
//     })

async function test() {
    try {
        const url = 'https://jsonplacdddeholder.typicode.com/users';
        const response = await fetch(url);
        const result = await response.json();
        console.log("Success:", result);
    } catch (error) {
        console.log("error nih bos", error.message);
    }
}

test()