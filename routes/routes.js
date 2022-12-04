const Router = require("express");
const router = new Router();
const meetupRouter = require("./meetupRouter");
const userRouter = require("./userRouter");
const authRouter = require("./authRouter");

router.use("/meetup", meetupRouter);
router.use("/user", userRouter);
router.use("/auth", authRouter);

module.exports = router;
