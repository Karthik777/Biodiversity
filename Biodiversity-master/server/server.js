// server.js
Meteor.startup(function () {
       if (! Animals.findOne({category: 'Spider'})){
           var animals = [
        {path: '/Spiders/redback-spider.jpg', category: 'Spider', species: 'Redback'},
        {path: '/Spiders/australian-garden-spider.jpg', category: 'Spider', species: 'Australian Garden'},
        {path: '/Spiders/australian-tarantula.jpg', category: 'Spider', species: 'Australian Tarantula'},
        {path: '/Spiders/black-house-spider.jpg', category: 'Spider', species: 'Black House'},
        {path: '/Spiders/brown-recluse.jpg', category: 'Spider', species: 'Brown Recluse'},
        {path: '/Spiders/huntsman-spider.jpg', category: 'Spider', species: 'Huntsman'},
        {path: '/Spiders/mouse-spider.jpg', category: 'Spider', species: 'Mouse'},
        {path: '/Spiders/sydney-funnel-web.jpg', category: 'Spider', species: 'Sydney Funnel Web'},
        {path: '/Spiders/sydney-trapdoor-spider.jpg', category: 'Spider', species: 'Sydney Trapdoor'},
        {path: '/Spiders/white-tailed-spider.jpg', category: 'Spider', species: 'White Tailed'}
        
      ];
      animals.forEach(function (animal) {
        Animals.insert(animal);
      })

    }
    if (! Animals.findOne({category:'Frog'})){
           var animals = [
        {path: '/Spiders/redback-spider.jpg', category: 'Frog', species: 'Frog1'},
        {path: '/Spiders/australian-garden-spider.jpg', category: 'Frog', species: 'Frog2'},
        {path: '/Spiders/australian-tarantula.jpg', category: 'Frog', species: 'Frog8'},
        {path: '/Spiders/black-house-spider.jpg', category: 'Frog', species: 'Frog3'},
        {path: '/Spiders/brown-recluse.jpg', category: 'Frog', species: 'Frog4'},
        {path: '/Spiders/huntsman-spider.jpg', category: 'Frog', species: 'Frog5'},
        {path: '/Spiders/mouse-spider.jpg', category: 'Frog', species: 'Frog6'},
        {path: '/Spiders/sydney-funnel-web.jpg', category: 'Frog', species: 'Frog7'},
        {path: '/Spiders/sydney-trapdoor-spider.jpg', category: 'Frog', species: 'Frog9'},
        {path: '/Spiders/white-tailed-spider.jpg', category: 'Frog', species: 'Frog10'}
      ];
      animals.forEach(function (animal) {
        Animals.insert(animal);
      })

    }
    
    if(!SpeciesSuite.findOne({category: 'Spider'}))
    {
      var animalList = [
       {category:'Spider', species: {1:'Redback',2:'Australian Garden',3:'Australian Tarantula',4:'Black House',5:'Brown Recluse',6:'Huntsman',7:'Mouse',8:'Sydney Funnel Web',9:'Sydney Trapdoor',10:'White Tailed'}},
        ];
      animalList.forEach(function(animal){
        SpeciesSuite.insert(animal);
      })
      
    }


    if(!SpeciesSuite.findOne({category: 'Frog'}))
    {
      var animalList = [
       {category:'Frog', species: {1:'Redback',2:'Australian Garden',3:'Australian Tarantula',4:'Black House',5:'Brown Recluse',6:'Huntsman',7:'Mouse',8:'Sydney Funnel Web',9:'Sydney Trapdoor',10:'White Tailed'}},
       
      ];
      animalList.forEach(function(animal){
        SpeciesSuite.insert(animal);
      })
      
    }
   
   Meteor.publish("animals",function(name){
   	return SpeciesSuite.findOne({category: name},{fields: {category:1}});
   });
   
  });