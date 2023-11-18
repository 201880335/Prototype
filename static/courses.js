document.addEventListener('DOMContentLoaded', function () {
    var pythonCodeTextarea = document.getElementById('pythonCode');
    var checkAnswerBtn = document.getElementById('check-answer-btn');
    var experienceBar = document.querySelector('.progress-bar');
    var experienceText = document.querySelector('.experience-text');

    // Handle Tab in textarea
    pythonCodeTextarea.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            e.preventDefault();
            var start = this.selectionStart;
            var end = this.selectionEnd;

            // Set textarea value to: text before caret + tab + text after caret
            this.value = this.value.substring(0, start) + '    ' + this.value.substring(end);

            // Put caret at right position again
            this.selectionStart = this.selectionEnd = start + 4;
        }
    });

    // Check Answer
    checkAnswerBtn.addEventListener('click', function(e) {
        e.preventDefault();
        var code = pythonCodeTextarea.value;

        // Check if the code matches the expected pattern
        var correctAnswerPattern = /def add_two\(x, y\):\s*return x \+ y/;
        if (correctAnswerPattern.test(code)) {
            alert('Correct Answer!');
            experienceBar.style.width = '100%';
            experienceText.textContent = 'Experience: 100/100 - Level Up!';
        } else {
            alert('Incorrect Answer. Try again.');
        }
    });
});