
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
      
  }
  