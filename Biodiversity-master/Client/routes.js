// routes.js

Router.configure({
	layoutTemplate : "ApplicationLayout"
});

Router.mapfunction(){

this.route('/',{
path: '/:_name' ,
template: "Animal",
waitOn: function(){
	    return Meteor.subscribe("animals", this.params._name);
	},
data: function(){
	var name = this.params._name;
	Session.set("currentAnimal", SpeciesSuite.findOne({category: name},{fields: {category:1}}));
}
}
});
});