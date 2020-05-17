const connecction = require('../connection');
const queryString = require('querystring');


module.exports.findAll = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    const sql = "SELECT * FROM users";

    connecction.query(sql, (error, rows) => {       
        if (error) {
            console.log(error);
            callback({
                statusCode: 500,
                body: JSON.stringify(error)
            })
        } else {
            callback(null, {
                statusCode: 200,
                body: JSON.stringify({
                    todos: rows
                })
            })
        }
    });
};



module.exports.findOne = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    const sql = "SELECT * FROM users where id= ?";

    connecction.query(sql, [event.pathParameters.userID], (error, row) => {
        if (error) {
            console.log(error);
            callback({
                statusCode: 500,
                body: JSON.stringify(error)
            })
        } else {
            callback(null, {
                statusCode: 200,
                body: JSON.stringify({
                    todos: row
                })
            })
        }
    });
};


module.exports.create = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    const body = queryString.parse(event['body']);
    const data = {
        name: body.name
    };
    console.log(data);
    const sql = "INSERT INTO users SET ? ";

    connecction.query(sql, [data], (error, resul) => {
        if (error) {
            console.log(error);
            callback({
                statusCode: 500,
                body: JSON.stringify(error)
            })
        } else {
            callback(null, {
                statusCode: 200,
                body: JSON.stringify({
                    res: `Registro insertado con ID ${resul.insertId} `
                })
            })
        }
    });
};



module.exports.update = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    const body = queryString.parse(event['body']);
    const sql = 'UPDATE users SET name = ? WHERE id = ?';

    connection.query(sql, [body.name, event.pathParameters.userID], (error, result) => {
        if (error) {
            console.log(error);
            callback({
                statusCode: 500,
                body: JSON.stringify(error)
            })
        } else {
            callback(null, {
                statusCode: 200,
                body: JSON.stringify({
                    res: `Actualizado correctamente`
                })
            })
        }
    })
};



module.exports.delete = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    const sql = 'DELETE from users WHERE id = ?';

    connection.query(sql, [event.pathParameters.userID], (error, result) => {
        if (error) {
            callback({
                statusCode: 500,
                body: JSON.stringify(error)
            })
        } else {
            callback(null, {
                statusCode: 200,
                body: JSON.stringify({
                    res: `Eliminado correctamente`
                })
            })
        }
    })
};


