const groupsDAO = require("../dao/groups");
class GroupsService {
   getAllGroups() {
      return groupsDAO.getAllGroups();
   }
   getGroupsByID(id) {
      return groupsDAO.getGroupsByID(id);
   }
}

module.exports = new GroupsService();
