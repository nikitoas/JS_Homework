function Cat(name) {
    this.name = name;

    var foodAmount = 50;
    
    var formatFoodAmount = function() { 
        return foodAmount + 'гр.';
    }

    this.dailyNorm = function (installReceiveAmount) {
        if (!arguments.length) return formatFoodAmount();
        
        if (installReceiveAmount > 50 && installReceiveAmount < 100) {
            installReceiveAmount = foodAmount ;
        } else {
            throw new Error('Incorrect amount of food entered!');
        } 
    }
  
    this.feed = function () { 
        return 'Насыпаем в миску ' + formatFoodAmount.call(this) + ' корма';
    }
}

var cat = new Cat('Барсик');
console.log(cat.name);
console.log(cat.feed());

// console.log(cat.dailyNorm());
// console.log(cat.dailyNorm(35));
// console.log(cat.dailyNorm.call(70));
// console.log(cat.dailyNorm.call(this, 110));


