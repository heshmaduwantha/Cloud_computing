module.exports = {


  friendlyName: 'View booklist',


  description: 'Display "Booklist" page.',

  inputs:{

    name: {
      description: 'Search Name',
      type: 'string'
    },

    visibility: {
      description: 'Search Name',
      type: 'string'
    },
  

  },


  exits: {

    success: {
      viewTemplatePath: 'pages/booklist'
    }

  },


  fn: async function (inputs,exits) {


    // IF EMPTY ALL INPUTS IT MEANS DIRECT LIST
    if (_.isEmpty(inputs)) {

      delete this.req.session.bookfilterlist;

    }

    // var formatedLimit = await sails.helpers.limitPerPage(inputs.limit);
    // var formatedPage = await sails.helpers.parsePage(inputs.page);

    // VARIABLES
    var data = [];
    var filter = {};

    // SET FILTER
    if (typeof this.req.session.bookfilterlist !== "undefined") {

      if (this.req.session.bookfilterlist.name && (typeof inputs.name === 'undefined')) {

        inputs.name = this.req.session.bookfilterlist.name;

      }


      if (this.req.session.bookfilterlist.visibility && (typeof inputs.visibility === 'undefined')) {

        inputs.visibility = this.req.session.bookfilterlist.visibility;
  
      }

    }

    // SET FILTER VALUES
    Object.keys(inputs).forEach((name, i) => {

      var value = inputs[name];

      // NAME
      if (name == 'name' && value != '') {

        filter.name = {
          'contains': inputs.name
        };

      }

      if (name == 'visibility' && value != -1) {

        filter.visibility = inputs.visibility
  
      }

    });

    // FIND THE RECORDS

    var book = await Book.find({
      where: {visibility:1},
    });

    

    // RECORDS

    return exits.success({
      data: book,
      
    });

  }


};
