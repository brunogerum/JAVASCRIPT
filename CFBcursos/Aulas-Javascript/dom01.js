const divc1 = document.getElementById('c1')
console.log(divc1)
console.log(divc1.id)
console.log(divc1.innerHTML)
divc1.innerHTML = 'Bruno'

const divc2 = document.getElementById('c2')
const divc3 = document.getElementById('c3')
const divc4 = document.getElementById('c4')
const divc5 = document.getElementById('c5')
const divc6 = document.getElementById('c6')

const arrayEle = [divc1,divc2,divc3,divc4,divc5,divc6]

//for(d of arrayEle){
    //d.innerHTML = 'Bruno'
//}

    // arrayEle.map((e)=>{  //arrayEle.map((e,i,a)) elemento, indice e array
    //     e.innerHTML = 'Bruno lindo'       
    //     console.log(e)              // percorre os elementos do array
    // })          

//console.log(arrayEle)


const colecaoHTML = [...document.getElementsByTagName('div')]


//console.log(colecaoHTML)

colecaoHTML.map((el)=>{
    console.log(el)
})