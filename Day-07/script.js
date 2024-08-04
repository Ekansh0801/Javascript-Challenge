//Activity - 1, 2 and 4

let obj = {
    title:"Harry Potter",
    Author:"JK Rowling",
    year: 1997,

    getTitleAuthor:function(){
        return this.title + "-By " + this.Author
    },
    updateYear:function(year){
        this.year = year;
    }
}

console.log(obj);

console.log(obj.title);
console.log(obj.Author);

console.log(obj.getTitleAuthor());
obj.updateYear(2007);
console.log(obj);

//Activity - 3
const library = {
    name: "City Library",
    books: [
      { 
        title: "1984", 
        author: "George Orwell", 
        year: 1949, 
        getDetails: function() {
          return `${this.title} (${this.year})`;
        }
      },
      { 
        title: "To Kill a Mockingbird", 
        author: "Harper Lee", 
        year: 1960, 
        getDetails: function() {
          return `${this.title} (${this.year})`;
        }
      },
      { 
        title: "The Great Gatsby", 
        author: "F. Scott Fitzgerald", 
        year: 1925, 
        getDetails: function() {
          return `${this.title} (${this.year})`;
        }
      }
    ]
  };
  
console.log(library);

console.log(library.name);
library.books.forEach(element => {
    console.log(element.title);
});


console.log(library.books[0].getDetails());
console.log(library.books[1].getDetails());
console.log(library.books[2].getDetails());


library.books.forEach((book, index) => {
    console.log(`Book ${index + 1}:`);
    for (let key in book) {
      if (typeof book[key] !== 'function') { // Skip function properties
        console.log(`${key}: ${book[key]}`);
      }
    }
    console.log("\n"); // Add a newline for better readability between books
  });

  library.books.forEach((book, index) => {
    console.log(`Book ${index + 1}:`);
    const keys = Object.keys(book);
    const values = Object.values(book);
  
    console.log("Keys:", keys);
    console.log("Values:", values);
    console.log("\n");
  });