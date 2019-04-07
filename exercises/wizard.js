class Wizard {
  constructor(wizard) {
    this.name = wizard.name;
    this.isRested = true;
    if (wizard.bearded === undefined) {
      this.bearded = true;
    }else{
      this.bearded = false;
    }
    this.spellCounter = 0;
  }

  incantation(spell) {
    var upperSpell = spell.toUpperCase();
    return upperSpell;
  }
  cast() {
    this.spellCounter++;
    if (this.spellCounter >= 3) {
      this.isRested = false;
      return "I SHALL NOT CAST!";
    }
    return 'MAGIC BULLET';
  }
}

module.exports = Wizard