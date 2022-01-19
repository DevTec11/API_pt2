var books= {
    title: 'The Design of EveryDay Things',
    author: 'Don Norman',
    alreadyReady: false

},
var booksP={
    title: 'The Most Human Human' ,
    author: 'Brian Christian' ,
    alreadyReady: true 
}


for (var i = 0; i < books.length; i++) {
    var booksP= document.createElement('p');
    var bookDescription = document.createTextNode(bookss[i].title + 'by' + books[i].author);
    bookP.appendChild(bookDescription);
    document.body.appendChild(bookP);

}