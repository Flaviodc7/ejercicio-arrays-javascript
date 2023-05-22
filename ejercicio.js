function insertIntoVec_ids(original, news){
    if (news.length){
        let result = [...original];
        news.sort((a, b) => a.position - b.position)
        .map(el => result = result.toSpliced(el.position, 0, el.id));
        return result;
    } else return original;
}

const vec_ids = [5, 7, 8, 15, 20, 25, 30, 35, 40]

const new_ids = [{"id": 9, "position": 4}, {"id": 5, "position": 7}, {"id": 9, "position": 2}]
// const new_ids = []

const resultado = insertIntoVec_ids(vec_ids, new_ids)
console.log(resultado)