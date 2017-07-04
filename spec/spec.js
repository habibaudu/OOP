(function(){
  'use strict';

  const chai = require("jasmine"); 

  const Car = require('../vehicle.js');

  describe("Test cases For the Car() class which inherite from a Vehicle class",()=> {
      it("should return 'Vehicle_Name' if no name is specified",()=> {
       
        const honda= new Car();
        expect(honda.name).toEqual("Vehicle_Name");
      });   

      it("should return 'Vehicle_Model' if no Model is specified",()=> {
       
        const honda= new Car();
        expect(honda.model).toEqual("Vehicle_Model");
      });

      it(" 'honda' should be an instance of 'Car' ",()=> {
       
        const honda= new Car("Civic","honda");
        expect(honda instanceof Car ).toBe(true);
      });

       it(" 'honda' should be an Object ",()=> {
       
        const honda= new Car("Civic","honda");
        expect(typeof honda === "object").toBeTruthy();
      });

       it("if Car name is 'porshe' or 'Eagle' number of doors should be 2",()=> {
       
        const porshe= new Car("porshe");
        const Eagle= new Car("Eagle");
        expect(porshe.numOfDoors).toEqual(2);
        expect(Eagle.numOfDoors).toEqual(2);
      });

       it("if Car name is 'Tacoma' or 'Fiesta' number of doors should be 4",()=> {
       
        const Tacoma= new Car("Tacoma");
        const Fiesta= new Car("Fiesta");
        expect(Fiesta.numOfDoors).toEqual(4);
        expect(Tacoma.numOfDoors).toEqual(4);
      });

       it("if Car name is 'Fiat' or 'Mandiesel' type should be 'Trailer'",()=> {
       
        const Fiat= new Car("Fiat");
        const Mandiesel= new Car("Mandiesel");
        expect(Mandiesel.type).toEqual("Trailer");
        expect(Fiat.type).toEqual("Trailer");
      });
       it("if Car name is 'Fiat' or 'Mandiesel' number of wheels should be 10",()=> {
       
        const Fiat= new Car("Fiat");
        const Mandiesel= new Car("Mandiesel");
        expect(Mandiesel.numOfWheels).toEqual(10);
        expect(Fiat.numOfWheels).toEqual(10);
      });

       it("The else block should kick in for type,numOfWheels and numOfDoors if vehicle name isn't specified",()=> {
       
        const Noname= new Car();
        expect(Noname.type).toEqual("Vehicle_type");
         expect(Noname.numOfWheels).toEqual(4);
          expect(Noname.numOfDoors).toEqual(4);
      });

       it("expect the type of engineON to be Boolean",()=> {
       
        const honda= new Car("honda");
        expect(honda.engineON).toEqual(jasmine.any(Boolean));
      });

       it("when startENGINE is called engineON should be true",()=> {
       
        const honda= new Car("honda");
        honda.startENGINE();
        expect(honda.engineON).toBeTruthy();
      });

       it("when stopENGINE is called engineON should be false",()=> {
       
        const honda= new Car("honda");
        honda.stopENGINE();
        expect(honda.engineON).toBeFalsy();
      });

       it("without calling Accelerate() speed should be 0km/h",()=> {
       
        const honda= new Car("honda");
        expect(honda.speed).toEqual("0 km/h");
      });

        it("After calling Accelerate() speed should be 240km/h",()=> {
       
        const honda= new Car("honda");
        honda.Accelerate();
        expect(honda.speed).toEqual("240km /h");
      });
	  
	  it("Testing for polymorphism",()=> {
       
        const Fiesta= new Car("Fiat");
        const porshe= new Car("porshe");
        expect(Fiesta instanceof Car).toBe(true);
        expect(porshe instanceof Car).toBe(true);
      });

    
    
  });
})();