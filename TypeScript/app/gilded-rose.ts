export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {

      this.items[i].sellIn = changeSellIn(this.items[i].name, this.items[i].sellIn);

      this.items[i].quality = changeQuality(this.items[i].name, this.items[i].sellIn, this.items[i].quality);

    }
    
    return this.items;
  }
}


function changeSellIn(name: string, sellIn: number) : number {
  switch (name) {
    case "Sulfuras, Hand of Ragnaros":
      break;
    default:
      sellIn = incrementWithMultiplier(sellIn, -1, 1);
  }
  return sellIn;
}

function changeQuality(name: string, sellIn: number, quality: number) : number {

  let multiplier:number = 1;
  if (sellIn < 0) {
    multiplier = 2;
  }

  //remove this if don't want 'conjured' feature
  if (name.startsWith("Conjured")) {
    multiplier *= 2;
  }

  switch (name) {
    case "Aged Brie":
      quality = incrementWithMultiplier(quality, 1, multiplier);
      break;
    case "Sulfuras, Hand of Ragnaros":
      break;
    case "Backstage passes to a TAFKAL80ETC concert":
      if (sellIn < 0) {
        quality = 0;
      } else if (sellIn < 5) {
        quality = incrementWithMultiplier(quality, 3, multiplier);
      } else if (sellIn < 10) {
        quality = incrementWithMultiplier(quality, 2, multiplier);
      } else {
        quality = incrementWithMultiplier(quality, 1, multiplier);
      }
      break
    default:
      quality = incrementWithMultiplier(quality, -1, multiplier);
  }

  quality = checkOrMakeQualityWithinLimits(name, quality);

  return quality;
}

function checkOrMakeQualityWithinLimits (name: string, quality: number) : number {
  if (quality < 0) {
    quality = 0;
  }
  if (quality > 50 && name !== "Sulfuras, Hand of Ragnaros") {
    quality = 50;
  }
  return quality;
}

function incrementWithMultiplier (variable: number, increment: number, multiplier: number) {
  return variable + increment * multiplier;
}