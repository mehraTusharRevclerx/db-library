"use strict"

async function fetchJson() {
        const response = await fetch("/assets/people.json");
        if (!response.ok) {
          const message = `An error has occured: ${response.status}`;
          throw new Error(message);
        }
        const people = await response.json()
        console.log(people);

        const db = new Db(people)
        console.log(db)

        db.insert(newObj2);

        const remove = db.remove()
        console.log(remove)

        const first = db.first()
        console.log(first)

        const last = db.last()
        console.log(last)

        const firstname = db.get("arun")
        console.log(firstname)
        
      }
      fetchJson().catch(error => {
        error.message;
      });

let newObj = [{firstName: 'Jgaoe', lastName: 'Jacksgaon', gender: 'male', age: 28, number: '7334282382'},{firstName: 'Jgae', lastName: 'Jcsgaon', gender: 'male', age: 23, number: '7334285382'}]
let newObj2 = {firstName: 'gea', lastName: 'Jack', gender: 'male', age: 22, number: '73322582382'};