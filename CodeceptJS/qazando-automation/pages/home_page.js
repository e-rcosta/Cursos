const { I } = inject();

module.exports = {

  button: {
    save: '~salvar'
  },

  checkLoginSucesss() {
    I.waitForElement(this.button.save, 5);
    I.seeElement(this.button.save);
  } 

}
