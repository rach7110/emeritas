//You ‘import’ modules that you need to use in this file, then you ‘export’ modules, functions, or variables that you want to be able to use in other files.
import Ember from 'ember';

// What does Ember.Controller mean? (so below)
export default Ember.Controller.extend({
  name: "Rachel"
});

//Everything in Ember is an extension of Ember.Object, a class that contains all of the secret sauce that makes Ember Ember. Most notably, Ember.Objects have the ability to observe property changes and bind those changes between your data layer and your template layer really easily, which Plain Old Javascript Objects (POJOs) can’t do.

//Ember.Controller is a specific type of Ember.Object for Ember Controllers.
