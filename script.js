function leapYear(año){
    if((año%4==0 && año%100 !=0) || año % 400 == 0){
        console.log("El año " + año + " es bisiesto.")
    }else{
        console.log("El año " + año + " no es bisiesto.")
    }
}

leapYear(2024);