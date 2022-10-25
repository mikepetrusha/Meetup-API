const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const userController = require('./controllers/userController');
require("dotenv").config();

passport.serializeUser(function (user, done) {
    done(null, user)
})

passport.deserializeUser(function (user, done) {
    done(null, user)
})

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/api/auth/google/callback",
},
    async function (accessToken, refreshToken, profile, done) {
        const { name, emails } = profile;
        const token = await userController.googleAuth(emails[0].value, profile.id)
        const user = {
            email: emails[0].value,
            firstName: name.givenName,
            lastName: name.familyName,
            //picture: photos[0].value,
            token: token,
        };
        return done(null, user);
    })

);