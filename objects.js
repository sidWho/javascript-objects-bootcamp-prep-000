var meals = {breakfast : 'oatmeal'}

var deserts = new Object({sweet : 'icecream'});

var drinks = {
  soda : 'Coke', 
  juice: 'apple',
  energy: 'redbull'
}

var make = "Honda"
var cars = {[make] : 'civic' }

var playlist = {artist: 'Song Title'}

function updatePlaylist(obj, key, value) {
  obj.key = value
  return obj
}

