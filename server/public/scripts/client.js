$(document).ready(onReady);

function onReady() {
    $('.operButton').on('click', function() {
        var firstValue = $('#firstNumber').val();
        var secondValue = $('#secondNumber').val();
        var operator = $(this).data('oper')
        calculation(firstValue, secondValue, operator);
    })
}

// math function for server req
function calculation(x, y, oper) {
    var mathQuery = {
        firstNum: x,
        secondNum: y,
        operator: oper
    }
    $.ajax({
        method: 'POST',
        url: '/math',
        data: mathQuery,
        success: function(response) {
            console.log('Suceessful POST');
            getMath();
        },
        error: function(error) {
            console.log('error in POST', error)
        }
    })
}

function getMath() {
    $.ajax({
        method: 'GET',
        url: '/math',
        success: function(response) {
            console.log('Sucessful GET', response);
            $('#result').text(response.result);
        },
        error: function(error) {
            console.log('error in GET', error);
        }
    })
}