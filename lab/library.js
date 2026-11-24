// 1. Define an array named library
const library = [];

// 2. Implement addBook(title, author) to add a book object to the array
function addBook(title, author) {
    const book = { title, author };
    library.push(book);
    console.log(`Added: "${title}" by ${author}`);
}

// 3. Implement findBook(title) to search for a book object by title
function findBook(title) {
    const foundBook = library.find(
        (book) => book.title.toLowerCase() === title.toLowerCase()
    );
    return foundBook || null;
}

// 4. Test the functions
console.log("--- Adding Books to Library ---");
addBook("Clean Code", "Robert C. Martin");
addBook("The Pragmatic Programmer", "Andrew Hunt");
addBook("You Don't Know JS", "Kyle Simpson");

console.log("\n--- Current Library Collection ---");
console.log(library);

console.log("\n--- Searching for Books ---");
const search1 = findBook("Clean Code");
console.log("Search 'Clean Code':", search1 ? search1 : "Book not found");

const search2 = findBook("Eloquent JavaScript");
console.log("Search 'Eloquent JavaScript':", search2 ? search2 : "Book not found");
