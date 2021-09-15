class Earth {
   constructor(type, radius, age, weight){

      if (Earth.instance) {
         return Earth.instance;
      }

      Earth.instance = this;
      this.type = type;
      this.radius = radius;
      this.age = age;
      this.weight = weight;
      return this;
   }

   static cataclysmMaker() {
      return console.log('badabum');
   }

   say() {
      return console.log('Life go brr');
   }

}

const test = new Earth('Earth group', 6778, '4,543E9', '5,972E24');
const test2 = new Earth('test', 222, 22, 222);

Earth.cataclysmMaker();
console.log(test === test2)  //will return true
test.say();
test2.say();

