

const filterOptions = document.querySelectorAll('.filter-option');

filterOptions.forEach((option) => {
    option.addEventListener('click', (event) => {
        if (option.classList.contains('selected')) {
            option.classList.remove('selected');
            option.classList.add('deselected');
        } else {
            option.classList.add('selected');
            option.classList.remove('deselected');
        }
    });
});

document.getElementById('clear-filters').addEventListener('click', () => {
    filterOptions.forEach((option) => {
        option.classList.remove('selected');
        option.classList.remove('deselected');
    });
});
