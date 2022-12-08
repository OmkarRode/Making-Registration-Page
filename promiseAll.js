const posts=[
]

function getPost(){
    setInterval(()=>{

        let output='';
        posts.forEach((post,index)=>{
            output+=`<li>${post.title} created ${parseInt((new Date().getTime()-post.CreatedAt)/1000)} second ago</li>`;
        }
        );
        document.body.innerHTML=output;
    },1000)
        
}

function createPost(post){
   return new Promise((resolve,reject)=>{
    setTimeout(() => {
        posts.push({...post,CreatedAt:new Date().getTime()});
       
        let error=false;
        if(!error)
        {
            resolve();
           
        }
        else
        {
            reject("something error here")
        }
        
    }, 2000);
    

   })
    
}

function resolveFullFill()
{
    getPost();
    let time=new Date().getTime();
    console.log(`last active time : ${time}`)
}

function deletePost(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
        if(posts.length!=0)
        {
            posts.pop();
            getPost();
            resolve()
        }
        else
        {
            reject('array is empty')
        }
    },5000);
    })
}
createPost({title:'post first',body:'this is post first'}).then(resolveFullFill).catch(result => console.log( `${result}`));
createPost({title:'post second',body:'this is post second'}).then(resolveFullFill).catch(result => console.log( `${result}`));
createPost({title:'post third',body:'this is post third'}).then(resolveFullFill).catch(result => console.log( `${result}`));
deletePost().then(getPost);
