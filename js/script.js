// function getUser (callback){
//     setTimeout(() =>{
//         const user = {id:1, name:"Alex"};
//         console.log("1. User received!")
//         callback(user)
//     }, 1000)
// }
//
// function getPosts (userId, callback){
//     setTimeout(() =>{
//         const posts = [
//             {id: 101, title: "First Post"},
//             {id: 102, title: "Second Post"}
//         ];
//         console.log("2. Posts received!");
//         callback(posts);
//     }, 1000);
// }
//
// function getComments (postId, callback){
//     setTimeout(() =>{
//         const comments = [
//             {id: 1001, title: "First Comment"},
//             {id: 1002, title: "Second Comment"}
//         ];
//         console.log("3. Comments received!");
//         callback(comments);
//     }, 1000);
// }
// getUser((user) => {
//     console.log("User:", user);
//     getPosts(user.id, (posts) => {
//         console.log("Posts:", posts);
//         getComments(posts[0].id, (comments) =>{
//             console.log("Displaying comments:", comments);
//         });
//     });
// });
// // Promise
// const myPromise = new Promise((resolve, reject) => {
//     console.log("I'm from Promise");
//     setTimeout(() => {
//         const success = true;
//         if (success) {
// resolve ("Data received");
//         } else {
//             reject("Error");
//         }
//     }, 2000)
// });
//
// console.log(myPromise);
//
// myPromise
//     .then((result) => {
//         console.log("Result:", result);
//     })
//     .catch((err) => {
//             console.log("Error:", err);
//     })
//     .finally(() => {
//         console.log("Finished...");
//     });

function getUserP() {
    //..
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = {id: 1, name: "Alex"};
            const success = true

            if (success) {
                console.log("1. User received!");
                resolve(user)
            } else {
                reject("Not found");
            }
        }, 1000)
    })
}


// const userResult = getUserP();
// console.log("UserResult:", userResult)
// userResult.then((data) => console.log(data));

function getPostsP(userId) {
    //...
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const posts = [
                {id: 101, title: "First Post"},
                {id: 102, title: "Second Post"}
            ];
            const success = true

            if (success) {
                console.log("2. Posts received!");
                resolve(posts)
            } else {
                reject("Posts not received");
            }
        }, 1000);
    })
}

function getCommentsP(postId) {
    //...
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const comments = [
                {id: 1001, title: "First Comment"},
                {id: 1002, title: "Second Comment"}
            ];
            const success = true

            if (success) {
                console.log("3. Comments received!");
                resolve(comments)
            } else {
                reject("Comments not received");
            }
        }, 1000);
    });
}

getUser((user) => {
    console.log("User:", user);
    getPosts(user.id, (posts) => {
        console.log("Posts:", posts);
        getComments(posts[0].id, (comments) =>{
            console.log("Displaying comments:", comments);
        });
    });
});
getUserP()
    .then(user => {
        console.log("User:", user);
        return getPostsP(user.id);
    })
    .then(posts => {
        console.log("Posts:", posts);
        return getCommentsP(posts[0].id);
    })
    .then(comments => {
        console.log("Comments:", comments);
    })
    .catch(err => {
        console.log("Error:", err);
    })
