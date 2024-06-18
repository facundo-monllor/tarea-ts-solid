(() => {
    // Ejemplo
    // Alumnos en clases segun su id, 
    // para saber si estuvieron presente o no
    const attendanceStudents = [
        { id: 1, p: false },
        { id: 2, p: false },
        { id: 3, p: true },
        { id: 4, p: false },
        { id: 5, p: false },
        { id: 7, p: true },
    ];

    // devolver un array con los ausentes
    const absentStudents = attendanceStudents.map((s) => s.p);

    class AbstractStudent { }
    class StudentMixin { }
    class StudentImplementation { }


    // Todo: Tarea

    // hoy
    const todayDate = new Date();

    // días transcurridos de la ultima modificación
    const daysSinceLastModification = 5;

    // número de archivos en un directorio 
    const numberOfFilesInDirectory = 50;

    // nombre
    const name = "ariel";

    // apellido
    const surname = "bernardo";

    // minimo de estudiantes para dar clases
    const minStudentsForClass = 6;
    //   maximo de estudiantes para dar clases
    const maxStudentsForClass = 50;
})();
