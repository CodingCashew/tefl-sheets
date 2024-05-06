const db = require("./SheetModel.js");

const sheetsController = {};

sheetsController.getSheets = (req, res, next) => {
  // const queryString = `SELECT * FROM sheets;`;

  // db.query(queryString)
  //   .then((data) => {
      res.locals.sheets = "hello world";
      // res.locals.sheets = data.rows;
      return next();
    // })
    // .catch((err) =>
    //   next({
    //     log: `Error in sheetsController.getSheets: ${err}`,
    //     message: { err: "Error getting sheets" },
    //   })
    // );
};

// TODO: handle search params; can I combine this with the above function?
// sheetsController.getSheets = (req, res, next) => {
//   const { keywords } = req.params;
//   const queryString = `SELECT * FROM sheets;`;

//   db.query(queryString)
//     .then((data) => {
//       res.locals.sheets = data.rows;
//       return next();
//     })
//     .catch((err) =>
//       next({
//         log: `Error in sheetsController.getSheets: ${err}`,
//         message: { err: "Error getting sheets" },
//       })
//     );
// };

module.exports = sheetsController;