/**
 * @param {string} text
 */
function copy(text) {
    /* Create textarea element and give it the text as innerText */
    const textarea = document.createElement('textarea');
    textarea.innerHTML = text;

    /* Add the element to the DOM */
    document.body.appendChild(textarea);

    /* Select the the textarea text */
    textarea.select();
    textarea.setSelectionRange(0, 99999); /* For mobile devices */

    /* Execute copy command to copy the selected text */
    document.execCommand('copy');

    /* Finally, remove the textarea element from DOM */
    textarea.remove();
}

module.exports = copy;
