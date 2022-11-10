const accessControl = require("accesscontrol");

const allRights = {
  "create:any": ["*"],
  "read:any": ["*"],
  "update:any": ["*"],
  "delete:any": ["*"],
};

let grantObject = {
  admin: {
    test: allRights,
  },
  user: {
    test: {
      "read:any": ["*"],
    },
  },
};

const role = new accessControl(grantObject);

module.exports = { role };
