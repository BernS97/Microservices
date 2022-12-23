const properties = require("../package.json");

const about = {
    get: (req, res, callback) => {
        const aboutInfo ={
            name: properties.name,
            description: properties.description,
            author: properties.author,
            layout: 'layout.njk',
            title: 'About'
        }
        callback(false, aboutInfo);
    }
};
module.exports = about
