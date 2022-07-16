//Another Quality Modpack 3
const RemoveCategoriesREI = [
  'reliquary:alkahestry_crafting',
  'reliquary:alkahestry_charging'
]
 onEvent('rei.remove.categories', event => {
  RemoveCategoriesREI.forEach(function(category,i){
     event.yeet(category)
   })
  });