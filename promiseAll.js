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
const Promise1=Promise.resolve('hello word');
const Promise2=10;
const Promise3=new Promise((resolve,reject)=>setTimeout(resolve,2000,'Goodbye'));

const Promise4= fetch('https://jsonplaceholder.typicode.com/todos/1')  .then(res => res.json())

Promise.all([Promise1,Promise2,Promise3,Promise4]).then((values)=> console.log(values));

