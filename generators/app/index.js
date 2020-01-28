'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  async prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the spectacular ${chalk.red('generator-kkito-ts-generator')} generator!`)
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
    return this.props

  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath('package.json'),
      this.props
    );
  }

  install() {
      if (this.props.install) {
        this.installDependencies();
      }
  }
};
