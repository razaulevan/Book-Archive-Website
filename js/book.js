
//input book name
const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    //clear values 
    searchField.value = '';
    document.getElementById('num-of-book').textContent = '';
    document.getElementById('search-result').textContent = '';
    document.getElementById('error-msg').textContent = '';
    // === condition
    if (searchText === '') {
        document.getElementById('error-msg').textContent = ' Please type the book name you are looking for!';

    }
    else {
        const url = ` https://openlibrary.org/search.json?q=${searchText} `;

        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResult(data));
    };
    const displaySearchResult = book => {
        const bookNum = document.getElementById('num-of-book');
        const searchResult = document.getElementById('search-result');

        const books = book.docs;


        bookNum.innerHTML = ` <h3> Total Number Of Books: ${books.length}/${book.numFound} </h3>`;
        books.forEach(book => {

            // get book data from the url
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
        
        <div class="card h-100">
   <div>
   <img class="card-img-top" alt="..." src=" https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg ">
   </div>
            <div class="card-body">
            <h5 class="card-title"><Name:${book.title}</h5>
                <h5 class="card-title">Author:${book.author_name ? book.author_name : ""}</h5>
                <h5 class="card-title">Publisher:${book.publisher ? book.publisher[0] : ""}</h5>
                <h5 class="card-title"> Publishing Year:${book.first_publish_year ? book.publish_year[0] : ""}</h5>
                
            </div>
        </div>
        `;
            searchResult.appendChild(div);

        })


    }

}

