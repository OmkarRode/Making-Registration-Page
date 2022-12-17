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
    },5000)
        
}

 async function createPost(post){
                                        posts.push(post);
                                        let error=false ;
                                        if(!error)
                                        {
                                            return true;
                                        
                                        }   
        
                                 };

async function deletePost(){
    posts.pop();
    let error=false ;
    if(!error)
    {
        return true;
    
    }   

}

function resolveFullFill()
{
    getPost();
    let time=new Date().getTime();
    console.log(`last active time : ${time}`)
}
await deletePost().then(getPost).catch(console.log('array is empty'));
createPost({title:'post first',body:'this is post first'}).then(resolveFullFill).catch(console.log('something errar'));
createPost({title:'post second',body:'this is post second'}).then(resolveFullFill).catch(console.log('something errar'));
createPost({title:'post third',body:'this is post third'}).then(resolveFullFill).catch(console.log('something errar'));
