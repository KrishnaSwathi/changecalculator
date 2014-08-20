var coins = [5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 5, 2, 1];

module.exports = {
  getChange: function(price, amountPaid){
    var change = [];
    var diff = amountPaid - price;

    // coins.forEach(function(eachCoin){
    //     if(eachCoin == diff)
    //       change.push(eachCoin);
    // });

    coins.forEach(function(eachCoin){

      if(diff != 0 && diff>=eachCoin){
          var times = Math.floor(diff/eachCoin);
          for(var i=0; i<times; i++){
            change.push(eachCoin);
          }
          diff = diff - (times * eachCoin);
      }
    });

    return change;
  }
};
