const posts=[
    {title:'post one',body:'this is first post' ,CreatedAt:new Date().getTime()},
    {title:'post two',body:'this is second post',CreatedAt:new Date().getTime()}
]

function getPost(flagid=0){
    setInterval(()=>{

        let output='';
        posts.forEach((post,index)=>{
            output+=`<li>${post.title} created ${parseInt((new Date().getTime()-post.CreatedAt)/1000)} second ago</li>`;
        }
        );
        document.body.innerHTML=output;
    },1000)
        
}

function setPost(post,callback){
    setTimeout(() => {
        posts.push({...post,CreatedAt:new Date().getTime()});
        callback();
    }, 2000);
}

function create4Post(post,callback)
{
    setTimeout(() => {
        posts.push({...post,CreatedAt:new Date().getTime()});
        callback();
    }, 6000);
}

getPost();
setPost({title:'post three',body:'this is post three'},getPost);
create4Post({title:'post four',body:'this is post three'},getPost);