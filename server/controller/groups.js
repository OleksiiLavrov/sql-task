const groupsService = require("../service/groups");

class GroupsController {
   async getAllGroups(req, res) {
      try {
         const groups = await groupsService.getAllGroups();
         res.status(201).json(groups);
      } catch (error) {
         console.error(error);
         res.status(500).json({ message: error.message });
      }
   }
   async getGroupsByID(req, res) {
      try {
         const { id } = req.params;
         const groups = await groupsService.getGroupsByID(id);
         res.status(201).json(groups);
      } catch (error) {
         console.error(error);
         res.status(500).json({ message: error.message });
      }
   }
}

module.exports = new GroupsController();
