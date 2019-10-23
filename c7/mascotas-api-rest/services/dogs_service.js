var Dog = require('../models/dogs.js');

const fetch = async (id) => {
    return await Dog.findById(id)
}

const save = async (dog) => {
    const newDog = new Dog();
    newDog.name = dog.name;
    newDog.age = dog.age;
    newDog.owner = dog.owner;
    return await newDog.save()
}

const list = async () => {
    return await Dog.find()
}

module.exports = {
    fetch,
    save,
    list
}