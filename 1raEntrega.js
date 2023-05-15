class ProductManager {
  #products;
  static idCounter = 0;
  constructor(title, description, price, thumbnail, code, stock) {
    this.#products = [];
    this.title = title;
    this.description = description;
    this.price = price;
    this.thumbnail = thumbnail;
    this.code = code;
    this.stock = stock;
  }
  addProduct(title, description, price, thumbnail, code, stock) {
    if (
      title == undefined ||
      description == undefined ||
      price == undefined ||
      thumbnail == undefined ||
      code == undefined ||
      stock == undefined
    )
      return console.log("Todos los campos son obligatorios");
    if (this.#products.find((p) => p.code === code))
      return console.log("El código ingresado ya se encuentra en uso");
    const newProduct = {
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
      id: ++ProductManager.idCounter,
    };
    this.#products.push(newProduct);
    return console.log("Producto agregado con exito ");
  }
  getProducts() {
    return console.log(this.#products);
  }
  getProductById(pid) {
    const productFound = this.#products.find((p) => p.id === pid);
    if (productFound) {
      console.log(productFound);
    } else {
      console.log("El id producto no existe");
    }
  }
}
const productManager = new ProductManager();

productManager.addProduct(
  "RTX 3060",
  "Placa de video",
  "12000",
  "not image",
  "1",
  5
);
productManager.addProduct(
  "I9 13900k",
  "Procesador para gaming",
  "25000",
  "not image",
  "2",
  5
);
productManager.addProduct(
  "Logitech C920",
  "WebCam",
  "130000",
  "not imageg",
  "2",
  5
);
productManager.addProduct(
    "Logitech C920",
    "WebCam",
    "130000",
    "not imageg",
    "3",
    5
);

productManager.getProductById(2);
productManager.getProducts();