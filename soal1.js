//modul luas
exports.luas = function(x,y){
    return x*y;
}

//modul keliling
exports.keliling = function(x,y){
    return (2*x)+(2*y);
}


console.log(this.luas(10,10));

console.log(this.keliling(5,4));