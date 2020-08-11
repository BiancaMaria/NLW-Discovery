module.exports = async function(db, {proffyValue,classValue,classScheduleValues}){
    //inserir dados na table de proffys
    const insertedProffy =  await db.run(`
        INSERT INTO proffys (
            name, 
            avatar,
            whatsapp,
            bio
        ) VALUES (
            "${proffyValue.name}",
            "${proffyValue.avatar}",
            "${proffyValue.whatsapp}",
            "${proffyValue.bio}"
            );
    `)

    //captura o último id que foi gerado na tabela proffy
    const proffy_id = insertedProffy.lastID

    //inserir na table de classes(aulas)
    const insertedClass = await db.run(`
    INSERT INTO classes (
        subject, 
        cost,
        proffy_id
        
    ) VALUES (
        "${classValue.subject}",
        "${classValue.cost}",
        "${proffy_id}"
        );
    `)    

    //captura o último id que foi gerado na tabela class
    const class_id = insertedClass.lastID
 
    
    //inserir na table de class_schedule(horarios)
    const insertedAllClassScheduleValues = classScheduleValues.map((classScheduleValue)=>{
        return db.run(`
        INSERT INTO class_schedule (
            class_id, 
            weekday,
            time_from,
            time_to
            
        ) VALUES (
            "${class_id}",
            "${classScheduleValue.weekday}",
            "${classScheduleValue.time_from}",
            "${classScheduleValue.time_to}"
        );        
    `)
})
    
    //aqui vou executar todos os db.runs() das classes schedules
    await Promise.all(insertedAllClassScheduleValues)
}