const NUM = 45
interface Cat {
  name: String,
  gender: String
}

function touCat(cat: Cat) {
  console.log('miao~', cat.name)
}

touCat({
  name: 'tom',
  gender: 'male'
})
