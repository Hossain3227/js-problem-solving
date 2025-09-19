// set an event handler

document.getElementById('btn-post-comment').addEventListener('click', function() {
    event.preventDefault();
    // console.log('post button clicked')
    // get the text written in comment
    const commentTextBox = document.getElementById('comment-text-box');
    // console.log(commentTextBox);
    
    const newComment = commentTextBox.value;
    // console.log(newComment);

    // get to parent node where to publish
    const commentContainer = document.getElementById('c-container')
    // console.log(commentContainer);

    // create a comment p and set innerText
    const commentElement = document.createElement('p');
    commentElement.classList.add('comment');
    commentElement.innerText = newComment;

    // append the new p tag to the parent node
    
    commentContainer.appendChild(commentElement);
    
    // clean the textarea
    commentTextBox.value='';    
    
})
