setTimeout(function(){console.loge("done");}, 2000);
setTimeout(function(){console.log("finished");},3000);
// means wait for s seconds then run the function

// promises
// let myPromise((resolve,reject)=>{
//     let success=true;
//     if (success){
//         resolve("it worked");}
//         else{
//             reject("it failed");
//         }
    
    // });
    // let myPromise((resolve,reject)=>{
    //     let success=true;
    //     if (success){
    //         resolve("it worked");}
    //         else{
    //             reject("it didnt work");
    //         }
    //     });
    // .then(result=>console.log(result))
    // .catch(error=>console.log(error))
    
    function fetchData(){
        setTimeout(()=>{
            console.log("Data Fetched");},2000);
        
        }
        function proccessData(){
            console.log("Data processed");
        }
        fetchData(proccessData);

        async function fetchData(){{
            const res= await fetch("https://jsonplaceholder.typicode.com/posts/1");
            const data=await res.json();
            console.log(data);}
        }