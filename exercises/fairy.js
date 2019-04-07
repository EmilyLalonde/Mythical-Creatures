class Fairy {
  constructor(name, dust, obj) {
    this.name = name;
    this.dust = dust || 10;
    this.disposition = 'Good natured';
    this.humanWards = [];
    this.counter = 0;
    this.clothes = {
      dresses: ['Iris']
    }

  }
  receiveBelief() {
    this.dust++;
  }
  believe() {
    this.dust += 10;
  }
  makeDresses(flowers) {
    this.clothes.dresses = this.clothes.dresses.concat(flowers);
  }
  provoke() {
    this.disposition = 'Vengeful';
  }
  replaceInfant(infant) {
    if (this.disposition === 'Vengeful') {
      infant.disposition = 'Malicious';
      this.humanWards.push(infant);
      this.counter++;
    }else{
      return infant;
    }
    if(this.counter >= 3) {
      this.disposition = 'Good natured';
    }
  }
}

module.exports = Fairy
