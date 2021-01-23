import { createConnection } from 'typeorm'

createConnection().then(() => console.log('Conectado com sucesso ao banco de dados')).catch(error => console.log(error))
