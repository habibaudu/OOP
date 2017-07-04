//creating a vehicle class and leting it

 let Vehicle =
    class {
	   constructor(name,model)
	   {
	   	this.name=name || "Vehicle_Name"; 
	   	this.model=model || "Vehicle_Model";
	   	this.speed="0 km/h";

	   	if(this.name==="Blackbird" || this.name=== "Hayabusa")
	   	 {
	   	 	this.type="Motorcycle";
	   	 	this.numOfWheels=2;
	   	 	this.numOfDoors=0;
	   	 }else if(this.name ==="porshe" || this.name ==="Eagle")
	   	 {
	   	 	this.type="Car";
	   	 	this.numOfWheels=4;
	   	 	this.numOfDoors=2;

	   	 }
	   	 else if(this.name ==="Tacoma" || this.name ==="Fiesta")
	   	 {
	   	 	this.type="Car";
	   	 	this.numOfWheels=4;
	   	 	this.numOfDoors=4;

	   	 }else if(this.name ==="Fiat" || this.name ==="Mandiesel")
	   	 {
	   	 	this.type="Trailer";
	   	 	this.numOfWheels=10;
	   	 	this.numOfDoors=2;

	   	 }else{
	   	 	this.type="Vehicle_type";
	   	 	this.numOfWheels=4;
	   	 	this.numOfDoors=4;
	   	 }
	   }

	   Vehicle_Info(){
        console.log(`Vehicle_Name : ${this.name}`);
        console.log(`Vehicle_type : ${this.type}`);
        console.log(`Number of Wheels : ${this.numOfWheels}`);
        console.log(`Number of Doors : ${this.numOfDoors}`);
        console.log(`Default_speed : ${this.speed}`);

	   }

	   


}

 class Car extends Vehicle{  // displays inheritance
	constructor(name,model){
		super(name,model)
		this.engineON=false;
	}

	startENGINE(){
		 this.engineON=true;
		                            //when startENGINE() method is called engineON is set to true
		 return this.engineON;
	}

	stopENGINE(){
		if(this.engineON===false){
			console.log("Engine is already OFF");
			return;
		}else{
			this.engineON=false;
			
			return this.engineON;
		}
	}

	Accelerate(){
		
		this.speed="240km /h";  // if accelerate method is Called speed is increased to 240km/h
		console.log("SPEED is now"+this.speed);
	}


}
const Vehicle1= new Vehicle("Blackbird"); // displaying polymorphism
const Vehicle2= new Vehicle("porshe");

module.exports=Car;
