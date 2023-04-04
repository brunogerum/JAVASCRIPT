class Cursos{

static cursos = ['Javascript','HTML','CSS','Java','C#','React','C++']

// static carros = ['Polo','Golf','Onix','Cruze','Argo','Palio']

constructor(){}

static getTodosCursos=()=>{
    return this.cursos
}

static getCurso=(i_curso)=>{
    return this.cursos[i_curso]
}

static addCurso =(novoCurso)=>{
    this.cursos.push(novoCurso)
}

static apagarCurso =()=>{
    this.cursos=[]

}
}

// const getTodosCursos=()=>{
//     return cursos
// }

// export default function getTodosCursos(){
//         return cursos
//     }

// function getCurso(i_curso){
//         return cursos[i_curso]
//     }

//    export default getTodosCursos

export default Cursos//,carros,cursos,getCurso}
