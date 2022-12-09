module.exports = {


  friendlyName: 'Savebook',


  description: 'Savebook something.',


  inputs: {

    id: {
      type: 'string',
    },

    name: {
      type: 'string',
    },

    title:{
      type: "string",
      
    },

    cost:{
      type: "string",
    
    },

    visibility:{ // 0 - Unpublish 1 - Publish  
      type: "number",
      
    },

  },


  exits: {

  },


  fn: async function (inputs,exits) {


    await Book.findOrCreate({
      id: inputs.id
    }, {
      name:inputs.name,
      title: inputs.title,
      visibility: inputs.visibility,
      cost: inputs.cost,
    
    })
    .exec(async (err, record, wasCreated) => {

      if (err) {

        return this.res.serverError(err);
      }

      if (wasCreated) {

        return exits.success({
          data: record,
          error_status: record ? 0 : 1
        });

      } else { // UPDATE

        var updatedObj = await Book.updateOne({
            id: inputs.id
          })
          .set({
            name:inputs.name,
            title: inputs.title,
            visibility: inputs.visibility,
            cost: inputs.cost,
          });

        return exits.success({
          data: updatedObj,
          error_status: updatedObj ? 0 : 1
        });

      }

    });

  }


};
