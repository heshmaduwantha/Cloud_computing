module.exports = {


  friendlyName: 'View bookitem',


  description: 'Display "Bookitem" page.',

  inputs: {

    id: {
      type: 'string'
    },

  },

  exits: {

    success: {
      viewTemplatePath: 'pages/bookitem'
    }

  },


  fn: async function (inputs,exits) {

    var filter = {};
    var data = undefined;
 
    if (inputs.id) {

      filter = {
        id: inputs.id
      };

      data = await Book.findOne(filter);

    }


    return exits.success({
      data: data,
    });

  }


};
