export class Hero {
  id: number;
  name: string;
  realName: string;
  powers?: string;
  abilities?: string;
  imgPath?: string;
  avatarPath?: string;

  constructor(name: string, realName?: string, powers?: string, abilities?: string, imgPath?: string, avatarPath?: string) {
    this.name = name;
    this.realName = realName;
    this.powers = powers;
    this.abilities = abilities;
    this.imgPath = imgPath;
    this.avatarPath = avatarPath;
  }
}
