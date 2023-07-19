// import db configuration
import db from '../connectmysql.js'
// import encryption library
import bcrypt from 'bcrypt'

// User register authentication controller
export const register = (req, res) => {
    //Check the username is exists, we use "?"" instead of "req.body.username" for security at sql query
    const querystring = "SELECT * FROM users WHERE username = ?" 

    //Get username data while registrations 
    db.query(querystring, [req.body.username], (err, data) =>{
        // if there is any error happen, show server error 500
        if(err) return res.status(500).json(err)
        // if the username exist then give response 'user already exists!'
        if(data.length) return res.status(409).json('user already exists!')

        // if username is not exist, Create a new user
        // Hash password
        const salt = bcrypt.genSaltSync(10)
        const hashedPassword = bcrypt.hashSync(req.body.password, salt)

        // For new user "insert" a new user data into "users" table
        const querystring = "INSERT INTO users(`username`, `email`, `password`, `name`) VALUE (?)"

        //get "users" data and put into array
        const dbVales = [
            req.body.username,
            req.body.email, 
            hashedPassword, 
            req.body.name
        ]

        //Execute "querystring" and insert user data into table, if any error happen show, 500 server error
        db.query(querystring, [dbVales], (err, data) =>{
            if(err) return res.status(500).json(err)
            return res.status(200).json('user has been created')
        })
    })
}




export const login = (req, res) => {

}




export const logout = (req, res) => {

}