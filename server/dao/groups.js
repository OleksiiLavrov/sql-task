const db = require("../db/db");
class GroupsDAO {
   async getAllGroups() {
      return await db("groups");
   }
   async getGroupsByID(groupId) {
      return await db("groups").where("id_parent", groupId);
   }
}

module.exports = new GroupsDAO();
