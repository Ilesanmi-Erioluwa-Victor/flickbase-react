const accessControl = require("accesscontrol");

let grantObject = {
  admin: {},
  user: {},
};

const role = new accessControl(grantObject);
