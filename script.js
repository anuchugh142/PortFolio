document.getElementById('readMoreBtn').addEventListener('click', function() {
    var moreContent = document.querySelector('.more-content');
    if (moreContent.style.display === 'none' || moreContent.style.display === '') {
        moreContent.style.display = 'block';
        this.textContent = 'Read Less';
    } else {
        moreContent.style.display = 'none';
        this.textContent = 'Read More';
    }
}
)

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
});

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Perform form submission logic here

    // Clear the form
    this.reset();

});
