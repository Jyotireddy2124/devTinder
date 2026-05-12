const adminAuth = (req, res,next) => {
    let token = "xyz"
    let isUserAuthenticated = token === "xyz";

    if(!isUserAuthenticated){
        res.status(401).send("unauthorized request")
    }else{
        next();
    }
};  

const userAuth = (req, res,next) => {
    let token = "xyz"
    let isUserAuthenticated = token === "xyz";

    if(!isUserAuthenticated){
        res.status(401).send("unauthorized request")
    }else{
        next();
    }
}; 

module.exports = {
    adminAuth,
    userAuth
}