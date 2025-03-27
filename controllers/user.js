const User = require("../Models/user.js");

module.exports.signupPage = (req, res) => {
    res.render("Users/signup.ejs");
}

module.exports.loginPage = (req, res) => {
    res.render("Users/login.ejs");
}

module.exports.signup = async (req, res, next) => {
    try {
        let { username, email, password } = req.body;
        const newUser = new User({ email, username });
        const registerUser = await User.register(newUser, password);
        req.login(registerUser, (err) => {
            if (err) {
                next(err);
            }
            req.flash("success", "Welcome to Wanderlust");
            res.redirect("/listing");
        })
    } catch (e) {
        req.flash("error", e.message);
        res.redirect("/signup");
    }
}

module.exports.login = async (req, res) => {
    req.flash("success", "Welcome to Wanderlust, You are logged In");
    let redirectlink = res.locals.redirectUrl || "/listing";
    res.redirect(redirectlink);
}

module.exports.logout = (req, res, next) => {
    req.logout((err) => {
        if (err) {
            next(err);
        }
        req.flash("success", "Logout sucessfull!");
        res.redirect("/listing");
    })
}