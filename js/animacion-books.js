const books = document.querySelectorAll('.book-info');
const windowHeight = window.innerHeight;

// Variable para guardar la dirección del scroll
let scrollDirection = 'down';

// Función para actualizar la dirección del scroll
function updateScrollDirection(event) {
  if (event.deltaY > 0) {
    scrollDirection = 'down';
  } else if (event.deltaY < 0) {
    scrollDirection = 'up';
  }
}

function animateBooks() {
  // Solo animamos los libros si el scroll es hacia abajo
  if (scrollDirection === 'down') {
    books.forEach(book => {
      const bookPosition = book.getBoundingClientRect().top;

      if (bookPosition - windowHeight <= 0) {
        book.classList.add('animate-slide-down');
        book.classList.remove('animate-slide-up');
      }
    });
  }
}

function animateBooksReverse() {
  // Solo animamos los libros si el scroll es hacia arriba
  if (scrollDirection === 'up') {
    books.forEach(book => {
      const bookPosition = book.getBoundingClientRect().top;

      if (bookPosition - windowHeight > 0) {
        book.classList.add('animate-slide-up');
        book.classList.remove('animate-slide-down');
      }
    });
  }
}

window.addEventListener('wheel', updateScrollDirection);
window.addEventListener('scroll', animateBooks);
window.addEventListener('scroll', animateBooksReverse);

// Llamamos a las funciones una vez para verificar si los elementos ya son visibles al cargar la página.
animateBooks();
animateBooksReverse();

