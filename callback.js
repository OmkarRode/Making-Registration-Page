const posts=[
    {title:'post one',body:'this is first post' ,CreatedAt:new Date().getTime()},
    {title:'post two',body:'this is second post',CreatedAt:new Date().getTime()}
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

function setPost(post){
   return new Promise((resolve,reject)=>{
    setTimeout(() => {
        posts.push({...post,CreatedAt:new Date().getTime()});
       
        let error=true;
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

function deletePost(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
        if(posts.length!=0)
        {
            posts.pop();
            resolve()
        }
        else
        {
            reject('array is empty')
        }
    },1000);
    })
}

// setPost({title:'post three',body:'this is post three'}).then(getPost).catch(result => console.log( `${result}`));
deletePost().then(getPost).catch(result => console.log( `${result}`));
deletePost().then(getPost).catch(result => console.log( `${result}`));
deletePost().then(getPost).catch(result => console.log( `${result}`));

