const router = require("express").Router();
const authRoutes = require("./auth.routes");
const recipesRoutes = require('./Recipes.routes')
const FoodShopRoutes = require('./ListShop.routes')
/* GET home page */
router.get("/", (req, res, next) => {
  res.json("Nalani Health");
});

router.use("/auth", authRoutes);
router.use('/recipe', recipesRoutes)
router.use('/food', FoodShopRoutes)
module.exports = router;
