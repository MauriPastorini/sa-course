var Cat = require('../models/cats.js');

const fetch = async (id) => {
    return await Cat.findById(id)
}

const save = async (cat) => {
    const newCat = new Cat();
    newCat.name = cat.name;
    newCat.age = cat.age;
    newCat.owner = cat.owner;
    return await newCat.save()
}

const list = async () => {
    return await Cat.find()
}

module.exports = {
    fetch,
    save,
    list
}