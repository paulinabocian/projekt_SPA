const key = "it_spa_cart";

export const cartManager = {
  addRes(item) {
    const cart = localStorage.getItem(key);
    let calculatedDays = localStorage.getItem("calculatedDays");
    let content;

    if (cart === null) {
      content = {
        [item.name]: { price: item.price, quantity: calculatedDays },
      };
    } else {
      content = JSON.parse(cart);
      if (item.name in content) {
        content[item.name].quantity += calculatedDays;
      } else {
        const newItem = {
          [item.name]: { price: item.price, quantity: calculatedDays },
        };

        Object.assign(content, newItem);
      }
    }

    localStorage.setItem(key, JSON.stringify(content));
  },
  addItem(item) {
    const cart = localStorage.getItem(key);
    let content;

    if (cart === null) {
      content = {
        [item.name]: { price: item.price, quantity: 1 },
      };
    } else {
      content = JSON.parse(cart);

      if (item.name in content) {
        content[item.name].quantity += 1;
      } else {
        const newItem = {
          [item.name]: { price: item.price, quantity: 1 },
        };

        Object.assign(content, newItem);
      }
    }

    localStorage.setItem(key, JSON.stringify(content));
  },

  removeItem(item) {
    const cart = localStorage.getItem(key);

    if (cart !== null) {
      const content = JSON.parse(cart);

      if (item.name in content) {
        if (content[item.name].quantity > 1) {
          content[item.name].quantity -= 1;
        } else {
          delete content[item.name];
        }
      }

      localStorage.setItem(key, JSON.stringify(content));
    }
  },

  getAllItems() {
    const cart = localStorage.getItem(key);

    if (cart === null) {
      return [];
    } else {
      const content = JSON.parse(cart);

      return Object.entries(content).map((entry) => {
        const [name, value] = entry;
        const { price, quantity } = value;

        return {
          name,
          price,
          quantity,
        };
      });
    }
  },

  getTotalPrice() {
    const cart = localStorage.getItem(key);

    if (cart === null) {
      return "0.00";
    } else {
      const content = JSON.parse(cart);

      return Object.values(content)
        .reduce(
          (totalPrice, item) => totalPrice + item.price * item.quantity,
          0
        )
        .toFixed(2);
    }
  },
};



