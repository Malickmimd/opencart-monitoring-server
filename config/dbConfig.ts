import mysql from "mysql"


 export const connection = mysql.createConnection({
  host: '127.0.0.1',
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
