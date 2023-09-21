class Player {
  name;
  health = 100;
  weapon = null;
  constructor (name) {
    this.name = name;
  }
  getWeapon (weapon) {
    if (this.weapon !== null) {
      console.log(`${this.name} уже держит оружие`)
    } else {
      this.weapon = weapon;
      console.log(`${this.name} взял оружие ${weapon.weaponName}`)
    }
  }
  makeDamage (player) {
    if (this.weapon === null) {
      console.log(`${this.name} не имеет оружия`)
    } else {
      console.log(`${this.name} стреляет в ${player.name}a и наносит ${this.weapon.weaponDamage} урона`)
    }
  }
  takeDamage (weapon) {
    if (this.health < 0) {
      console.log(`${this.name} был убит`)
    } else {
      this.health = this.health - this.weapon.weaponDamage;
      console.log(`${this.name} получил ${this.weapon.weaponDamage} уронов и осталось ${this.health}% здоровья`)
    }
  }
}
class Weapon {
  weaponName;
  weaponDamage;
  constructor (name, damage) {
    this.weaponName = name;
    this.weaponDamage = damage;
  }
}

const cop = new Player('Коп');
const terror = new Player('Террорист')
const scar = new Weapon('Scar-L', 64)
const p90 = new Weapon('P90', 39)
cop.getWeapon(scar)
terror.getWeapon(p90)

cop.makeDamage(terror)
terror.takeDamage(cop)

terror.makeDamage(cop)
cop.takeDamage(terror)
