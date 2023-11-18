document.addEventListener('DOMContentLoaded', function () {
    $('#submitModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget);
        var challenge = button.data('challenge');
        var modal = $(this);
        modal.find('.modal-title').text('Submit Solution for ' + challenge.charAt(0).toUpperCase() + challenge.slice(1) + ' Challenge');
        modal.find('#challengeLevel').val(challenge);
    });

    var submitForm = document.getElementById('submitForm');
    submitForm.addEventListener('submit', function (e) {
        e.preventDefault();
        var challengeLevel = document.getElementById('challengeLevel').value;
        var solutionCode = document.getElementById('solutionCode').value;
        console.log('Challenge Level:', challengeLevel);
        console.log('Solution Code:', solutionCode);
        // Submit the solution to the server or handle it here
        alert('Solution submitted for the ' + challengeLevel + ' challenge!');
        $('#submitModal').modal('hide');
        submitForm.reset();
    });
});
