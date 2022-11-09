const accessControl = require("accesscontrol");

let grantObject = {
  admin: {
    "create:any": ["*"],
    "read:any": ["*"],
    "update:any": ["*"],
    "delete:any": ["*"],
  },
  user: {},
};

const role = new accessControl(grantObject);

module.exports = { role };
