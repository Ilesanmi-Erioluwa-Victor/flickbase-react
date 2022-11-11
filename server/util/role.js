const accessControl = require("accesscontrol");

const allRights = {
  "create:any": ["*"],
  "read:any": ["*"],
  "update:any": ["*"],
  "delete:any": ["*"],
};

let grantObject = {
  admin: {
    profile: allRights,
  },
  user: {
    profile: {
      "read:own": ["*"],
      "update:own": ["*"],
    },
  },
};

const role = new accessControl(grantObject);

module.exports = { role };
