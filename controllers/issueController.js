const mongoose = require("mongoose");
const Repository = require("../models/repoModel");
const User = require("../models/userModel");
const Issue = require("../models/issueModel");

async function createIssue (req, res)  {
    const {title, description} = req.body;
    const {id } = req.params;

    try{
        const issue = new Issue({
        title,
        description,
        repository: id,
    });
    await issue.save();

    res.send(201).json(issue);
} catch (err) {
    console.error("Error during issue creation : ", err.message);
      res.status(500).send("Server error");
  }
}

async function updateIssueById  (req, res)  {
    const { id} = req.params;
    const { title, description, status} = req.body;
    try{
    const issue = await Issue.findById(id);
    if(!issue){
        return res.status(404).json({error: "Issue not round!"});
    }
    issue.title = title;
    issue.description = description;
    issue.status = status;

    await issue.save();
    res.json ({message: "Issue Updated"});
    }catch (err) {
    console.error("Error during issue updation : ", err.message);
      res.status(500).send("Server error");
  }
}

async function deleteIssueById  (req, res)  {
    const { id } = req.params;

    try{
       const issue = Issue.findByIdAndDelete(id);
       if(!issue){
        return res.status(404).json({error: "Issue not round!"});
    }
    res.json ({message: "Issue deleted"});
    } catch (err) {
        console.error("Error during issue delete : ", err.message);
          res.status(500).send("Server error");
  }
}

async function getAllIssues  (req, res)  {
    const {id } =req.params;
    try{
   const issues = Issue.find({ repository: id});

   if(!issues){
    return res.status(404).json({error: "Issue not round!"});
}
    }catch (err) {
        console.error("Error during issue fetching : ", err.message);
          res.status(500).send("Server error");
  }
}

async function getIssueById  (req, res)  {
    const { id} = req.params;
    
    try{
    const issue = await Issue.findById(id);
    if(!issue){
        return res.status(404).json({error: "Issue not round!"});
    }
    
    res.json (issue);
    }catch (err) {
    console.error("Error during issue updation : ", err.message);
      res.status(500).send("Server error");
  }
}

module.exports = {
    createIssue,
    updateIssueById,
    deleteIssueById,
    getAllIssues,
    getIssueById,

};