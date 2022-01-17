module.exports = {
    myLogger(){  
        return (req,res,next) => {
            console.log('LOGGED');
            next();
        }
    }
}