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
      "read:own": ["*", "!password", "!_id"],
      "update:own": ["*","!password", "!_id"],
    },
  },
};

const role = new accessControl(grantObject);

module.exports = { role };
