import { Item, GildedRose } from '@/gilded-rose';
describe('Gilded Rose', () => {
  it('should foo', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('foo');
  });
});
describe('master test',  () => {
  it('When days = 2', () => {
    const items = [
      new Item("+5 Dexterity Vest", 10, 20), //
      new Item("Aged Brie", 2, 0), //
      new Item("Elixir of the Mongoose", 5, 7), //
      new Item("Sulfuras, Hand of Ragnaros", 0, 80), //
      new Item("Sulfuras, Hand of Ragnaros", -1, 80),
      new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),
      // this conjured item does not work properly yet
      new Item("Conjured Mana Cake", 3, 6)];
    
    
    const gildedRose = new GildedRose(items);
    
    let days: number = 2;
    if (process.argv.length > 2) {
        days = +process.argv[2];
      }
    
    for (let i = 0; i < days; i++) {
      gildedRose.updateQuality();
    }
    expect(gildedRose.items[0].name).toBe('+5 Dexterity Vest')
    expect(gildedRose.items[0].sellIn).toBe(8)
    expect(gildedRose.items[0].quality).toBe(18)
    expect(gildedRose.items[1].name).toBe('Aged Brie')
    expect(gildedRose.items[1].sellIn).toEqual(0)
    expect(gildedRose.items[1].quality).toBe(2)
    
    expect(gildedRose.items[2].name).toBe('Elixir of the Mongoose')
    expect(gildedRose.items[2].sellIn).toBe(3)
    expect(gildedRose.items[2].quality).toBe(5)
    
    expect(gildedRose.items[3].name).toBe('Sulfuras, Hand of Ragnaros')
    expect(gildedRose.items[3].sellIn).toBe(0)
    expect(gildedRose.items[3].quality).toBe(80)
    expect(gildedRose.items[4].name).toBe('Sulfuras, Hand of Ragnaros')
    expect(gildedRose.items[4].sellIn).toBe(-1)
    expect(gildedRose.items[4].quality).toBe(80)
    expect(gildedRose.items[5].name).toBe('Backstage passes to a TAFKAL80ETC concert')
    expect(gildedRose.items[5].sellIn).toBe(13)
    expect(gildedRose.items[5].quality).toBe(22)
    expect(gildedRose.items[6].name).toBe('Backstage passes to a TAFKAL80ETC concert')
    expect(gildedRose.items[6].sellIn).toBe(8)
    expect(gildedRose.items[6].quality).toBe(50)
    expect(gildedRose.items[7].name).toBe('Backstage passes to a TAFKAL80ETC concert')
    expect(gildedRose.items[7].sellIn).toBe(3)
    expect(gildedRose.items[7].quality).toBe(50)
    expect(gildedRose.items[8].name).toBe('Conjured Mana Cake')
    expect(gildedRose.items[8].sellIn).toBe(1)
    expect(gildedRose.items[8].quality).toBe(4)
  })
  it('When days = 5', () => {
    const items = [
      new Item("+5 Dexterity Vest", 10, 20), //
      new Item("Aged Brie", 2, 0), //
      new Item("Elixir of the Mongoose", 5, 7), //
      new Item("Sulfuras, Hand of Ragnaros", 0, 80), //
      new Item("Sulfuras, Hand of Ragnaros", -1, 80),
      new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),
      // this conjured item does not work properly yet
      new Item("Conjured Mana Cake", 3, 6)];
    
    
    const gildedRose = new GildedRose(items);
    
    let days: number = 5;
    if (process.argv.length > 2) {
        days = +process.argv[2];
      }
    
    for (let i = 0; i < days; i++) {
      gildedRose.updateQuality();
    }
    expect(gildedRose.items[0].name).toBe('+5 Dexterity Vest')
    expect(gildedRose.items[0].sellIn).toBe(5)
    expect(gildedRose.items[0].quality).toBe(15)
    expect(gildedRose.items[1].name).toBe('Aged Brie')
    expect(gildedRose.items[1].sellIn).toEqual(-3)
    expect(gildedRose.items[1].quality).toBe(8)
    
    expect(gildedRose.items[2].name).toBe('Elixir of the Mongoose')
    expect(gildedRose.items[2].sellIn).toBe(0)
    expect(gildedRose.items[2].quality).toBe(2)
    
    expect(gildedRose.items[3].name).toBe('Sulfuras, Hand of Ragnaros')
    expect(gildedRose.items[3].sellIn).toBe(0)
    expect(gildedRose.items[3].quality).toBe(80)
    expect(gildedRose.items[4].name).toBe('Sulfuras, Hand of Ragnaros')
    expect(gildedRose.items[4].sellIn).toBe(-1)
    expect(gildedRose.items[4].quality).toBe(80)
    expect(gildedRose.items[5].name).toBe('Backstage passes to a TAFKAL80ETC concert')
    expect(gildedRose.items[5].sellIn).toBe(10)
    expect(gildedRose.items[5].quality).toBe(25)
    expect(gildedRose.items[6].name).toBe('Backstage passes to a TAFKAL80ETC concert')
    expect(gildedRose.items[6].sellIn).toBe(5)
    expect(gildedRose.items[6].quality).toBe(50)
    expect(gildedRose.items[7].name).toBe('Backstage passes to a TAFKAL80ETC concert')
    expect(gildedRose.items[7].sellIn).toBe(0)
    expect(gildedRose.items[7].quality).toBe(50)
    expect(gildedRose.items[8].name).toBe('Conjured Mana Cake')
    expect(gildedRose.items[8].sellIn).toBe(-2)
    expect(gildedRose.items[8].quality).toBe(0)
  })
  it('When days = 10', () => {
    const items = [
      new Item("+5 Dexterity Vest", 10, 20), //
      new Item("Aged Brie", 2, 0), //
      new Item("Elixir of the Mongoose", 5, 7), //
      new Item("Sulfuras, Hand of Ragnaros", 0, 80), //
      new Item("Sulfuras, Hand of Ragnaros", -1, 80),
      new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),
      // this conjured item does not work properly yet
      new Item("Conjured Mana Cake", 3, 6)];
    
    
    const gildedRose = new GildedRose(items);
    
    let days: number = 10;
    if (process.argv.length > 2) {
        days = +process.argv[2];
      }
    
    for (let i = 0; i < days; i++) {
      gildedRose.updateQuality();
    }
    expect(gildedRose.items[0].name).toBe('+5 Dexterity Vest')
    expect(gildedRose.items[0].sellIn).toBe(0)
    expect(gildedRose.items[0].quality).toBe(10)
    expect(gildedRose.items[1].name).toBe('Aged Brie')
    expect(gildedRose.items[1].sellIn).toEqual(-8)
    expect(gildedRose.items[1].quality).toBe(18)
    
    expect(gildedRose.items[2].name).toBe('Elixir of the Mongoose')
    expect(gildedRose.items[2].sellIn).toBe(-5)
    expect(gildedRose.items[2].quality).toBe(0)
    
    expect(gildedRose.items[3].name).toBe('Sulfuras, Hand of Ragnaros')
    expect(gildedRose.items[3].sellIn).toBe(0)
    expect(gildedRose.items[3].quality).toBe(80)
    expect(gildedRose.items[4].name).toBe('Sulfuras, Hand of Ragnaros')
    expect(gildedRose.items[4].sellIn).toBe(-1)
    expect(gildedRose.items[4].quality).toBe(80)
    expect(gildedRose.items[5].name).toBe('Backstage passes to a TAFKAL80ETC concert')
    expect(gildedRose.items[5].sellIn).toBe(5)
    expect(gildedRose.items[5].quality).toBe(35)
    expect(gildedRose.items[6].name).toBe('Backstage passes to a TAFKAL80ETC concert')
    expect(gildedRose.items[6].sellIn).toBe(0)
    expect(gildedRose.items[6].quality).toBe(50)
    expect(gildedRose.items[7].name).toBe('Backstage passes to a TAFKAL80ETC concert')
    expect(gildedRose.items[7].sellIn).toBe(-5)
    expect(gildedRose.items[7].quality).toBe(0)
    expect(gildedRose.items[8].name).toBe('Conjured Mana Cake')
    expect(gildedRose.items[8].sellIn).toBe(-7)
    expect(gildedRose.items[8].quality).toBe(0)
  })
  it('When days = 20', () => {
    const items = [
      new Item("+5 Dexterity Vest", 10, 20), //
      new Item("Aged Brie", 2, 0), //
      new Item("Elixir of the Mongoose", 5, 7), //
      new Item("Sulfuras, Hand of Ragnaros", 0, 80), //
      new Item("Sulfuras, Hand of Ragnaros", -1, 80),
      new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),
      // this conjured item does not work properly yet
      new Item("Conjured Mana Cake", 3, 6)];
    
    
    const gildedRose = new GildedRose(items);
    
    let days: number = 20;
    if (process.argv.length > 2) {
        days = +process.argv[2];
      }
    
    for (let i = 0; i < days; i++) {
      gildedRose.updateQuality();
    }
    console.log(gildedRose)
    expect(gildedRose.items[0].name).toBe('+5 Dexterity Vest')
    expect(gildedRose.items[0].sellIn).toBe(-10)
    expect(gildedRose.items[0].quality).toBe(0)
    expect(gildedRose.items[1].name).toBe('Aged Brie')
    expect(gildedRose.items[1].sellIn).toEqual(-18)
    expect(gildedRose.items[1].quality).toBe(38)
    
    expect(gildedRose.items[2].name).toBe('Elixir of the Mongoose')
    expect(gildedRose.items[2].sellIn).toBe(-15)
    expect(gildedRose.items[2].quality).toBe(0)
    
    expect(gildedRose.items[3].name).toBe('Sulfuras, Hand of Ragnaros')
    expect(gildedRose.items[3].sellIn).toBe(0)
    expect(gildedRose.items[3].quality).toBe(80)
    expect(gildedRose.items[4].name).toBe('Sulfuras, Hand of Ragnaros')
    expect(gildedRose.items[4].sellIn).toBe(-1)
    expect(gildedRose.items[4].quality).toBe(80)
    expect(gildedRose.items[5].name).toBe('Backstage passes to a TAFKAL80ETC concert')
    expect(gildedRose.items[5].sellIn).toBe(-5)
    expect(gildedRose.items[5].quality).toBe(0)
    expect(gildedRose.items[6].name).toBe('Backstage passes to a TAFKAL80ETC concert')
    expect(gildedRose.items[6].sellIn).toBe(-10)
    expect(gildedRose.items[6].quality).toBe(0)
    expect(gildedRose.items[7].name).toBe('Backstage passes to a TAFKAL80ETC concert')
    expect(gildedRose.items[7].sellIn).toBe(-15)
    expect(gildedRose.items[7].quality).toBe(0)
    expect(gildedRose.items[8].name).toBe('Conjured Mana Cake')
    expect(gildedRose.items[8].sellIn).toBe(-17)
    expect(gildedRose.items[8].quality).toBe(0)
  })
})