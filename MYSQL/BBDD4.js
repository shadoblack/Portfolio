let mysql = require("mysql2");
let connection = mysql.createConnection(
    {
        host    :   "localhost",
        user    :   "root",
        password:   "mysql",
        database:   "codenotch_2",   
    }

)

connection.connect(function(error){
    if(error){
        console.log(error);

}else{
    console.log("conexion correcta.");
}
});

//reto1
//Obtén los nombres y apellidos de los alumnos y los nombres de las asignaturas en las que
//están apuntados.
let params=[]
let sql= "SELECT first_name,last_name,title FROM codenotch_2.students " +
"JOIN codenotch_2.marks ON(codenotch_2.students.student_id=codenotch_2.marks.student_id)" +
"JOIN codenotch_2.subjects ON(codenotch_2.subjects.subject_id=codenotch_2.marks.subject_id)"
connection.query(sql,params, (err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("reto 1");
        console.log(result);
    }
});

//reto2
//Obtén todos los nombres y apellidos de los profesores y los nombres de las asignaturas que imparten.

params=[]
sql= "SELECT first_name,last_name,title FROM codenotch_2.teachers "   +
"JOIN codenotch_2.subject_teacher ON(codenotch_2.subject_teacher.subject_id)" +
"JOIN codenotch_2.subjects ON(codenotch_2.subjects.title + codenotch_2.subjects.subject_id) LIMIT 30 "
connection.query(sql,params, (err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("reto 2");
        console.log(result);
    }
});

//reto3
//Obtén el número total de alumnos por asignatura, el nombre de la asignatura y el nombre y apellidos del profesor que la imparte.

params=[]
sql= "SELECT t.first_name,t.last_name,s.title,COUNT(st.student_id) AS total_alumnos FROM codenotch_2.teachers AS t " +
"JOIN codenotch_2.subject_teacher AS sbt ON(sbt.teacher_id = t.teacher_id) " +
" JOIN codenotch_2.subjects AS s ON(sbt.subject_id = s.subject_id) " +
" JOIN codenotch_2.grupos AS g ON(g.group_id = sbt.group_id) " +
 "JOIN codenotch_2.students AS st ON(st.group_id = g.group_id) " +
 "GROUP BY s.subject_id "
connection.query(sql,params, (err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("reto 3");
        console.log(result);
    }
});



connection.end();
