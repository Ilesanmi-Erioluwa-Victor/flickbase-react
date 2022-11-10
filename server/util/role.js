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
  user: {
    test: {
      "read:any": ["*"],
    },
  },
};

const role = new accessControl(grantObject);

module.exports = { role };
