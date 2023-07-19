// import db configuration
import db from '../connectmysql.js'
// import encryption library
import bcrypt from 'bcrypt'
// Import jsonwebtoken
import jwt from 'jsonwebtoken'

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



// User Login authentication controller
export const login = (req, res) => {
    const querystring = "SELECT * FROM users WHERE username = ?"

    db.query(querystring, [req.body.username], (err, data)=>{
        // if there is any error happen, show server error 500
        if(err) return res.status(500).json(err)
        // if the username do not exist, show error 404
        if(data.length === 0) return res.status(404).json('user not found!')

        // For check user password, get user data, decrypt password, compare password of specific and first data of the array  
        const checkPassword = bcrypt.compareSync(req.body.password, data[0].password)

        // If password does not match, then show error 400
        if (!checkPassword) return res.status(400).json('wrong password or username')

        // json web token 
        const token = jwt.sign({id: data[0].id}, "secretkey")

        // separate password and others data of the user with destructing
        const {password, ...others} = data[0]

        // Get access token with cookie and response user data (others data, except password)
        res.cookie("accessToken", token, {
            httpOnly: true,
        }).status(200).json(others)
    })
}



// User logout authentication controller
export const logout = (req, res) => {
    res.clearCookie("accessToken", {
        secure: true,
        sameSite: "none"
    }).status(200).json("user has been logged out")
}