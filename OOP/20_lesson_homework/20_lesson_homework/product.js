var Product = (function () {
    ///////// ctor
    function Product(productName, price, expiryDate) {
        this.productName = productName;
        this.price = price;
        this.expiryDate = expiryDate;
    }
    Object.defineProperty(Product.prototype, "productName", {
        get: function () {
            return this._productName;
        },
        set: function (prop) {
            this._productName = prop;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (prop) {
            if (prop >= 0) {
                this._price = prop;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "expiryDate", {
        get: function () {
            return this._expiryDate;
        },
        set: function (prop) {
            this._expiryDate = prop;
        },
        enumerable: true,
        configurable: true
    });
    //////// func
    Product.prototype.toString = function () {
        return "Product name:&nbsp" + this.productName + ".<br/>Price:&nbsp" + this.price + "&nbspShekels.<br/>Expiry date:" + this.expiryDate + ".";
    };
    return Product;
}());
//# sourceMappingURL=product.js.map