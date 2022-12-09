module.exports = {


  friendlyName: 'Populate book',


  description: '',


  fn: async function () {

    var dataArray = [];

    for (let index = 0; index < 20; index++) {

      dataArray.push({
        name: 'Sample News - ' + (index + 1),
        title: 'Sample News - ' + (index + 1),
        cost: 'Subtitle' + (index + 1),
        visibility: 1,

      });

    }

    var createObjects = await Book.createEach(dataArray).fetch();
  }


};

