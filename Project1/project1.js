// <!-- JavaScript for Star Rating -->
document.querySelectorAll('.star-rating .bi').forEach(star => {
    star.addEventListener('click', function () {
        let rating = this.getAttribute('data-value');
        document.getElementById('rating').value = rating;

        document.querySelectorAll('.star-rating .bi').forEach(star => {
            star.classList.remove('active');
        });

        for (let i = 0; i < rating; i++) {
            document.querySelectorAll('.star-rating .bi')[i].classList.add('active');
        }
    });

    star.addEventListener('mouseover', function () {
        let hoverValue = this.getAttribute('data-value');

        document.querySelectorAll('.star-rating .bi').forEach((s, index) => {
            if (index < hoverValue) {
                s.classList.add('hover-active');
            } else {
                s.classList.remove('hover-active');
            }
        });
    });

    star.addEventListener('mouseout', function () {
        document.querySelectorAll('.star-rating .bi').forEach(star => {
            star.classList.remove('hover-active');
        });
    });
});

// <!-- JavaScript for Validation and Redirect -->
function validateImmediate(input, errorElement) {
    // Check if input is only spaces or empty
    if (!input.value.trim()) {
        errorElement.textContent = "This field cannot be empty or contain only spaces.";
        input.classList.add('is-invalid'); // Add a visual cue for invalid input
        return false;
    } else {
        errorElement.textContent = "";
        input.classList.remove('is-invalid'); // Remove the visual cue once valid
        return true;
    }
}

function validateAuthor(input, errorElement) {
    // Check if input contains numbers
    if (/\d/.test(input.value)) {
        errorElement.textContent = "Author name cannot contain numbers.";
        input.classList.add('is-invalid'); // Add a visual cue for invalid input
        return false;
    } else {
        return validateImmediate(input, errorElement); // Call the general validation for other checks
    }
}

// Add input event listeners to validate immediately when typing
document.getElementById('bookTitle').addEventListener('input', function () {
    validateImmediate(this, document.getElementById('titleError'));
});

document.getElementById('author').addEventListener('input', function () {
    validateAuthor(this, document.getElementById('authorError')); // Use the new author validation
});

document.getElementById('review').addEventListener('input', function () {
    validateImmediate(this, document.getElementById('reviewError'));
});

// Prevent submission if there are only spaces or no stars selected
document.getElementById('reviewForm').addEventListener('submit', function (event) {
    let titleInput = document.getElementById('bookTitle');
    let authorInput = document.getElementById('author');
    let reviewInput = document.getElementById('review');
    let ratingValue = document.getElementById('rating').value;

    // Validate inputs before submission
    let isTitleValid = validateImmediate(titleInput, document.getElementById('titleError'));
    let isAuthorValid = validateAuthor(authorInput, document.getElementById('authorError')); // Validate author
    let isReviewValid = validateImmediate(reviewInput, document.getElementById('reviewError'));

    // Validate rating
    if (ratingValue == 0) {
        document.getElementById('ratingError').textContent = "Please select a rating.";
    } else {
        document.getElementById('ratingError').textContent = "";
    }

    // Check for validity
    if (!isTitleValid || !isAuthorValid || !isReviewValid || ratingValue == 0) {
        event.preventDefault(); // Stop form from submitting
    } else {
        // Redirect to typ1.html after successful validation
        setTimeout(() => {
            window.location.href = 'typ1.html';
        }, 0);
    }
});