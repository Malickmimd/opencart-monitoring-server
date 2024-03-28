import mysql from "mysql"


 export const connection = mysql.createConnection({
  host: 'localhost',
  user: 'malick',
  password: 'passer',
  database: 'malick'
})
export const connectDB = async () => {

    try {       
        connection.connect()
        console.log('Connecté')
    }
    catch(error) {
        throw error
    }
}
