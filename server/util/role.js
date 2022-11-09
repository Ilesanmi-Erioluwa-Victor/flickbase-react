const accessControl = require("accesscontrol");

let grantObject = {
  admin: {
    test: {
      "create:any": ["*"],
      "read:any": ["*"],
      "update:any": ["*"],
      "delete:any": ["*"],
    },
  },
  user: {},
};

const role = new accessControl(grantObject);

module.exports = { role };
