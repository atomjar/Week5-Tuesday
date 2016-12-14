let $ = require('jquery')

$.get('http://tiy-orl-proxy.herokuapp.com/darksky/forecast/df63a1555fc626bf0afe58a0651806ad/28.5383355,-81.3792365').
then(function(response) {
    var temp = response.currently.temperature
    $('#temp').html(`${temp} °F`)

    function color(tempy) {
        tempy = temp
        if (tempy > 80) {
            return '#f44b42'
        } else if (tempy > 60 && tempy < 80) {
            return '#ffa38e'
        } else if (tempy < 60) {
            return '#85c6f7'
        } else if (tempy < 45) {
            return '#2e51b2'
        }
    }
    $("#change").css("background-color", color)
})



// var button = document.querySelector('#celButton')
// button.addEventListener("click", celsius)

// module.exports.celsius = function celsius (temper) {
//   temper = $('#temp').text()
//   return (5/9) * (temp - 32)
// }
// $('#cel').text(`${celsius} °C`)
