(function(){
'use strict';



angular.module('app').controller('favController', favController);

favController.$inject = ['sp'];
function favController(sp){
    var vm = this;

    var favorites = sp.getUserStorage('favorites', _spPageContextInfo.webAbsoluteUrl);
    //favorites.ensureStorage();
    
    vm.toggleList = function(){
        if(vm.favorites){

        }
        else{
            vm.getAll();
        } 

        jQuery('.fav-list').slideToggle();
    }

    vm.remove = function(item){
        var index = vm.favorites.indexOf(item);
        if (index > -1) {
            vm.favorites.splice(index, 1);
        }
        
        vm.touched = true;
    }

    vm.getAll = function(){
        favorites.get('value')
        .then(function(value){
            if(value && value.Value){
                vm.favorites = JSON.parse(value.Value);
            }
        });
    }

    function find(value, title){
        for(var i=0;i<value.length;i++){
            if (value[i].title == title){
                return value[i];
            }
        }
        return null;
    }

    vm.save = function(){
        favorites.put('value', vm.favorites)
        .then(function(result){
            toastr.success('Saved')
        });
        vm.toggleList();     
        vm.touched = false;
    }

    vm.favor = function(){
        favorites.get('value')
        .then(function(value) {
            if(value && value.Value){
                value = JSON.parse(value.Value);

                if(find(value,document.title)){
                    return;
                }                
            }
            else{
                value = [];
            }
            if(document.title){
                var favTitle = document.title;
            }
            else{
                var favTitle = jQuery("#DeltaPlaceHolderPageTitleInTitleArea").text();
            }
            
            value.push({
                title: favTitle,
                url:location.href.replace('#','')
            })
           
            favorites.put('value', value)
            .then(function(result){
                toastr.success(favTitle + "<br/>added to favorites")
                vm.favorites = value;
                
            });            

        });
    }
}
}())