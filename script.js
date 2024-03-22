document.addEventListener("DOMContentLoaded",() => {
    alert("Welcome to my personal page!");
})

document.addEventListener("DOMContentLoaded", function() {
    const commentText = document.getElementById("comment-text");
    const commentsSection = document.getElementById("comments-section");
    const submitButton = document.getElementById("submit-comment");

    submitButton.addEventListener("click", function(event) {
        event.preventDefault();
        const comment = commentText.value;
        const newComment = document.createElement("div");
        newComment.textContent = comment;
        commentsSection.appendChild(newComment);
        commentText.value = "";
    });
});


