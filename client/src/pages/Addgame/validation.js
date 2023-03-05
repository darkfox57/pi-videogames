const regexImg = /^(https?|ftp):\/\/[^\s\/$.?#].[^\s]*\.(jpg|jpeg|png|gif)$/
const regexRating = /^(?!0\d)\d{1,5}(\.\d{1,2})?$/

export function validate(input) {
 let errors = {}

 switch (true) {
  case input.name.length === 0:
   errors.name = 'you must insert a name'
   break
  case !regexImg.test(input.image):
   errors.image = 'you must insert a valid image'
   break
  case input.description.length === 0:
   errors.description = 'you must insert a description'
   break
  case input.launchDate.length === 0:
   errors.launchDate = 'you must insert a valid date'
   break
  case !regexRating.test(input.rating):
   errors.rating = 'you must insert a valid rating'
   break
  case input.genres.length === 0:
   errors.genres = 'you must select at least 1 genre'
   break
  case input.platforms.length === 0:
   errors.platforms = 'you must select at least 1 platform'
   break
  default:
   break
 }

 return errors
}