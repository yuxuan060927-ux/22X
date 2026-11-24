// CONTACT FORM: check the fields when the user clicks Send
const form = document.querySelector("#contact-form");
const thanks = document.querySelector("#form-thanks");
if (form) {
form.addEventListener("submit", function (event) {
event.preventDefault();
if (form.checkValidity()) {
thanks.classList.remove("d-none");
form.reset();
form.classList.remove("was-validated");
} else {
thanks.classList.add("d-none");
form.classList.add("was-validated");
}
});
}

// TOOLTIPS: Bootstrap only turns them on when you ask
const tips = document.querySelectorAll('[data-bs-toggle="tooltip"]');
tips.forEach(function (tip) {
new bootstrap.Tooltip(tip);
});

// BOOKING FORM: in the modal on the home page
const bookForm = document.querySelector("#book-form");
if (bookForm) {
bookForm.addEventListener("submit", function (event) {
event.preventDefault();
bookForm.classList.add("was-validated");
if (bookForm.checkValidity()) {
bookForm.innerHTML = '<p>Thank you! See you soon.</p>' +
'<button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>';
}
});
}

// BOOKING FORM: back to empty when the box closes
const bookModal = document.querySelector("#bookModal");
if (bookModal) {
const bookStart = bookForm.innerHTML;
bookModal.addEventListener("hidden.bs.modal", function () {
bookForm.innerHTML = bookStart;
bookForm.classList.remove("was-validated");
});
}