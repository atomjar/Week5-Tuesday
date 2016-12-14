module.exports.color = function color (tempy) {
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
