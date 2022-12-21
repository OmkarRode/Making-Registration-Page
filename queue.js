class Queue{
constructor(val)
{
    this.capacity=val;
    this.queue=[];
    this.min_pos=0;
    this.max_pos=0;
}

push(val){
    this.queue.push(val);
    this.max_pos++;
}

pop(){
    if(this.min_pos<this.max_pos)
    {
    this.queue[this.min_pos]=undefined;
    this.min_pos++;
    }
}

display(){
    console.log(this.queue);
}

isEmpty(){
    if(this.min_pos==this.max_pos)
    {
        return true;
    }
    return false;
}

isFull(){
    if(this.max_pos==this.capacity)
    {
        return true;
    }
    return false;
}
}

const que=new Queue(10);
que.push(10);
que.push(20);
que.pop();
que.display();
console.log(que.isEmpty());

