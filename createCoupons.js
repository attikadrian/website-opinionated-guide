const axios = require("axios");
const countryPrices = require("./components/data/prices.json");

const makeCoupons = async () => {
  const prices = countryPrices.map(async (country) => {
    try {
      const name = country.country.split(" ").join("").toUpperCase();
      const url = "";
      const a = await axios({
        url,
        method: "POST",
        data: JSON.stringify({
          vendor_id: 115612,
          vendor_auth_code: "",
          coupon_code: "ILOVE" + name,
          coupon_type: "checkout",
          discount_type: "percentage",
          discount_amount: country.discount - 10,
          allowed_uses: 99999999999999,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(a.data);

      await Promise.all(prices);
    } catch (e) {
      console.log(e);
    }
  });
};

makeCoupons();
