const Database = require('./db')
//const createProffy = require('./createProffy')

Database.then(async(db)=>{
    const deletaSchedule = await db.all(`DELETE FROM class_schedule`)

    const deletaClasses = await db.all(`DELETE FROM * FROM classes`)

    const deletaProffys = await db.all(`DELETE FROM * FROM proffys`)
})