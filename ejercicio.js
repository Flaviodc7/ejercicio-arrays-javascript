function insertIntoVec_ids(original, news){
    let result = [...original]
    if (news.length){
        news.sort((a, b) => a.position - b.position).map(el => result = [result.slice(0, el.position), el.id, result.slice(el.position)].flat())
    }
    return result
}

const vec_ids = [5, 7, 8, 15, 20, 25, 30, 35, 40]

//const new_ids = [{"id": 9, "position": 4}, {"id": 5, "position": 7}, {"id": 9, "position": 2}]
const new_ids = []

const resultado = insertIntoVec_ids(vec_ids, new_ids)
console.log(resultado)