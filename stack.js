class Stack {
    
    constructor(s){
    this.array=[];
    this.top=-1;
    this.Maximum=s;
    }

    add(ele){
        return this.array[++this.top]=ele;
    }

    remove()
    {
        if(this.array.length>0)
        {
        return this.array[this.top--];
        }
    }

    peek()
    {
        if(this.array.length>0)
        {
        return this.array[this.array.length-1] ;
        }
    }

    top()
    {
        if(this.array.length>0)
        {
        return this.array[this.array.length-1] ;
        } 
    }

    isEmpty()
    {
        if(this.top==-1)
        {
        return true ;
        } 
        return false;
    }

    isFull()
    {
        if(this.top==this.Maximum-1)
        {
            return true;
        }
        return false;
    }

}

let st = new Stack();

st.add(5);
st.add(7);
st.add(4);
st.remove();
console.log(st.peek());
console.log(st.isEmpty());
console.log(st.isFull());
