module.exports = {


  friendlyName: 'Removebooks',


  description: 'Removebooks something.',


  inputs: {

    selectedItems: {

      type: 'ref',
      required: true,

    },

  },


  exits: {

  },


  fn: async function (inputs, exits) {

    var result = await Book.destroy({
      id: {
        in: inputs.selectedItems,
      },
    }).fetch();

    return exits.success({
      result: result
    });

  }


};
