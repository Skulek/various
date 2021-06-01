const yargs = require("yargs");
var argv = require("yargs/yargs")(process.argv.slice(2))
  .default("t", "feature")
  .choices("t", ["feature", "bug"])
  .demandOption("n", "branch name is required").argv;
let branchName = argv.n;
branchName = branchName.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, "");
branchName = branchName.replace(/\s+/g, "-");
branchName = argv.t + "/" + branchName;
console.log(branchName);
