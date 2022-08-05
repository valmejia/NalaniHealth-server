const router = require("express").Router();
const authRoutes = require("./auth.routes");
const recipesRoutes = require('./Recipes.routes')
const FoodShopRoutes = require('./ListShop.routes')
const ProductsAmount = require('./ProductsAmount.routes')
const MealPlan = require('./MealPlan.routes')
const ToDoToday = require('./ToDoToday.routes')
/* GET home page */
router.get("/", (req, res, next) => {
  res.json("Nalani Health");
});

router.use("/auth", authRoutes);
router.use('/recipe', recipesRoutes)
router.use('/food', FoodShopRoutes)
router.use('/expenses', ProductsAmount)
router.use('/meal', MealPlan)
router.use('/toDo', ToDoToday)
module.exports = router;
