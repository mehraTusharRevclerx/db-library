# Db library

## Library Methods

- db(arr) => user will provide json file or objects of array for creating a new database.

- insert() => user will able to use this method for inserting new data to database. user should be able to chain this method to main function.

- remove(index,first,last) => user can delete all the database with this function call without any parameters. if user will provide parameters to the function call they can delete the first and last object in the database or by index of the object they wish to delete.

- update() => user can update their existing data in the database with the help of update function.

- find(objkey) => user will provide the object key, in return they will get the object if the object key is in the database.

- view() => user will be able to view the database (still more to understand working of view).

- first() => user will get the first object in the database.

- last() => user will get the last object in the database.

- start() => user will be able to return the result from the specific index.

- join() => user will be able to join two diff database.

### queries :(

- how return will work in find method and what does return do behind the scene. dig deeper into return.

- how can i structure my library in best possible way.

- how do i chain methods.

- how can i test my library for diff test cases.

- serious bug (if user didnt pass an array of object nothing will work)-----will fix this later till then working with array of obejcts.
