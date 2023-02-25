export function getParam(param) {
    console.log(location.search)
    let value = ''
    const searchTerm = location.search.replace(/&amp;/g, '&').replace('?', '').split('&')
    console.log(searchTerm)
    for(let i=0; i<searchTerm.length; i++) {
        const valueSplit = searchTerm[i].split('=')
        if(valueSplit[0]===param) {
            value = valueSplit[1]
        }
    }
    return value
}