(async () => {
    const mysql = require('mysql2/promise')
    const cfg = {
        host: 'rm-wz9q21u7sw6665w73so.mysql.rds.aliyuncs.com',
        user: 'root',
        password: "",
        database: "test"
    }
    const connection = await mysql.createConnection(cfg);
    // console.log('conn:',connection)
    let ret = await connection.execute
    (`CREATE TABLE IF NOT EXISTS test (
    id INT NOT NULL AUTO_INCREMENT,
    message VARCHAR(45) NULL,
    PRIMARY KEY (id))`
    )
    
    
})()