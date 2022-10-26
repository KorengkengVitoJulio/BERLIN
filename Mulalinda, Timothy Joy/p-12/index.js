function fizzBuzz(n) {
    // Write your code here
    for (let i = 1 ; i <= n ; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz');
        } else if (i % 3 === 0) {
            console.log('Fizz');
        } else if (i % 5 === 0) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }
}fizzBuzz(15);


function fizzBuzz(number) {
    // Write your code here
     for (let i = 1 ; i <= number ; i++) {
        if (i % 15 === 0) {
            console.log('FizzBuzz');
        } else if (i % 3 === 0) {
            console.log('Fizz');
        } else if (i % 5 === 0) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }
}


//WEEKDAY TEST
return function getText(target) {
    return weekdays[target] || (function () {
        throw new Error(`Invalid weekday number`)
    }());
}


// COUNTRY CODES
async function getCountryName(code) {
    // write your code here
    // API endpoint: https://jsonmock.hackerrank.com/api/countries?page=<PAGE_NUMBER>
    
    let axios = require("axios");

  async function getData(pageNr) {
    const url = `https://jsonmock.hackerrank.com/api/countries?page=${pageNr}`;

    const response = await axios.get(url);
    const data = response.data;

    const currentPage = Number(data.page);
    const totalPages = Number(data.total_pages);

    let countryName = null;

    data.data.forEach(country => {
      if (country.alpha2Code === code) countryName = country.name;
    });

    if (!countryName && currentPage < totalPages) {
      return await getData(currentPage + 1);
    } else {
      return countryName;
    }
  }

  return await getData(0);
}
getCountryName("AF");

//JAVASCRIPT INTERMEDIATE
//PARKING LOT
class ParkingLot {
    slots = [];
  
    constructor(parkingSize) {
      this.slots = new Array(parkingSize).fill(null);
    }
  
    park(carId) {
      console.log(`Parking car: ${carId}`);
      if (this.slots.every((slot) => slot !== null)) {
        return false;
      }
  
      for (let i = 0; i <= this.slots.length; i++) {
        const slot = this.slots[i];
  
        if (slot === null) {
          this.slots[i] = carId;
          return true;
        }
      }
    }
  
    remove(carId) {
      console.log(`Leaving car: ${carId}`);
      if (this.slots.every((slot) => slot !== carId)) {
        return false;
      }
  
      for (let i = 0; i <= this.slots.length; i++) {
        const slot = this.slots[i];
  
        if (slot === carId) {
          this.slots[i] = null;
          return true;
        }
      }
    }
  
    getSlots() {
      console.log(`Parking slots: ${this.slots}`);
      return this.slots;
    }
  
    getSize() {
      console.log(`Parking size is: ${this.slots.length}`);
      return this.slots.length;
    }
  
    getAvailable() {
      const availableSlots = this.slots.filter((s) => s === null).length;
      console.log(`Available parking slots: ${availableSlots}`);
      return availableSlots;
    }
  
    isFull() {
      return this.getAvailable() === 0;
    }
  }
  
  export default ParkingLot;

  
  //EMPLOYEE INHERITAMCE

  function Employee(title) {
    this.title = title;
    this.setTitle = function(td){
        this.title = td
    }
    this.getTitle = function(){
        return this.title;
    }
}
Employee.prototype.setTitle = function(td){
    this.title = td;
}
Employee.prototype.setTitle = function(){
    return this.title;
}

function Engineer(title, isManager) {
    Employee.call(this, title);
    this.isManager = isManager;
    this.setIsManager = function(iso) {
        this.isManager = iso;
    } 
    this.getIsManager = function(){
        return this.isManager;
    }
}

Engineer.prototype.setIsManager = function(td){
    this.isManager = td;
}
Engineer.prototype.getIsManager = function(){
    return this.isManager;
}
