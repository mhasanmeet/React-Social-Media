import db from '../connectmysql.js'

const getPosts = (req, res) =>{
    // const queryString = `SELECT p.*, u.uid AS uid, name, profilePic FROM posts AS JOIN users AS u ON (u.uid = p.puid )`
    const queryString = `SELECT p.*, u.uid AS uid, name, profilePic FROM posts AS p JOIN users AS u ON (u.uid = p.puid))`

    db.query(queryString, (err, data) =>{
        if(err) return res.status(500).json(`${err}, something error`)
        return res.status(200).json(data)
    })
}

export default getPosts