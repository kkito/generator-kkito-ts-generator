"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");

module.exports = class extends Generator {
  async prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the spectacular ${chalk.red(
          "generator-kkito-ts-generator"
        )} generator!`
      )
    );
    this.props = await this.prompt([
      {
        type: "input",
        name: "name",
        message: "Your project name",
        required: true
      },
      {
        type: "confirm",
        name: "install",
        message: "Would you like run npm install?",
        default: false
      }
    ]);

    this.log("app name", this.props.name);
    return this.props;
  }

  writing() {
    const files = [
      "__package.json",
      "README.md",
      ".gitignore",
      "src/index.ts",
      "tests/index.spec.ts",
      "tsconfig.json",
      "tslint.json"
    ];
    for (const f of files) {
      const target = f.replace("__", "");
      this.fs.copyTpl(
        this.templatePath(f),
        this.destinationPath(target),
        this.props
      );
    }
  }

  install() {
    if (this.props.install) {
      this.npmInstall();
      // This.installDependencies();
    }
  }
};
