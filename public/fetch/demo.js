/*  In this simple example, we first fetch the resource which returns a promise.
        Then we call response.json() which also returns a promise.
     */
     loadBooks();
    function loadBooks() {
        var display = document.getElementById('display');
        display.innerHTML = '<ul>';
        fetch('https://fetch-csorenson.c9users.io/api/books/').then( function(response) {
            return response.json();
        }).then(function(data) {
            data.forEach(function(row){
              display.innerHTML += '<li>' + row.title + ' - ' + row.author + '</li>';
            });
            display.innerHTML += '</ul>';
        });
    }