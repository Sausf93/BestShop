/**
 * Product object
 * @param  {string} img Image
 * @param  {string} title Titulo
 * @param  {string} subtitle Description or subtitle
 * @param  {string} price Price
 * @param  {string} from Source
 * @param  {string} link Link to product page
 */
function Product(img, title, subtitle, price, from, link) {
    this.id = Math.random()
        .toString(36)
        .substring(3);
    this.img = img;
    this.title = title;
    this.subtitle = subtitle;
    this.price = price;
    this.from = from;
    this.link = link;

}