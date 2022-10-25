const Router = require("express");
const router = new Router();
const passport = require("passport");
require('../passport-setup')
const isLoggedIn = require('../middleware/isLoggedIn')

router.use(passport.initialize())
router.use(passport.session())

router.get("/", (req, res) => res.send("You are not logged in"));
router.get("/failed", (req, res) => res.send("You failed to login"));
router.get('/success', isLoggedIn, (req, res) => res.send({ token: req.user.token }));

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback',
    passport.authenticate('google', { failureRedirect: 'api/auth/failed' }),
    function (req, res) {
        res.redirect('/api/auth/success');
    });

router.get('/logout', (req, res, next) => {
    try {
        req.session.destroy()
        req.logout(function (err) {
            if (err) { return next(err); }
        });
        res.redirect('/api/auth')
    } catch (error) {
        console.log(error);
    }

})

module.exports = router;