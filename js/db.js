"use strict";

class Db {
  constructor(arr) {
    this.arr = arr;
  }

  insert = (newObj) => {
    // if (typeof newObj === "object") {
    //   this.arr.push(newObj);
    // }
    typeof newObj === "object" && this.arr.push(newObj);
  };

  find = (objKey) => {
    for (let i = 0; i < this.arr.length; i++) {
      Object.values(this.arr[i]).find((e) => {
        e == objKey && console.log(this.arr[i]);
        // return this.arr[i];
      });
    }
  };

  first = () => {
    // console.log(this.arr)
    // if(this.arr.length !== 0 ){
    //   return this.arr[0]
    // }
    return this.arr.length !== 0 && this.arr[0];
  };

  last = () => {
    return this.arr.length !== 0 && this.arr[this.arr.length - 1];
  };

  remove = () => {
    // console.log(this.arr)
    //   while (this.arr.length) {
    //     this.arr.pop();
    // }
    return this.arr.length !== 0 && (this.arr.length = 0);
  };
}
