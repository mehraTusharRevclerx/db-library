
//! insert()____remove()____update()_____view()_____get()________first()________
class Db {
    constructor(arr) {
      this.arr = arr
    }
    insert = (newObj) => {
      if(typeof newObj === "object"){
        this.arr.push(newObj); 
        return this
      }
    };
    get = (objKey) =>{
        for (let i = 0; i < this.arr.length; i++) {
          Object.values(this.arr[i]).find(e =>{
             if(e == objKey){
               console.log(Object.values(this.arr[i]))
              //  return Object.values(this.arr[i]);
             }
            });    
        }
      }
    
    
      first = () =>{
        return this.arr[0]
      }

            
      
      last = () =>{
        return this.arr[this.arr.length-1]
      }

      remove = () =>{
        // console.log(this.arr)  
        return this.arr.slice(0,0);
      }

  }
  