export const formatPokemonName = ( name: string ) : string => {

    let newName

    if( name.includes('♀')) {
        newName = name.replace('♀', '-f')
    } else if( name.includes('♂') ) {
        newName = name.replace('♂', '-m')
    } else if( name.includes('. ') ) {
        newName = name.replace('. ', '-')
    } else if( name.includes("Farfetch'd")) {
        newName = name.replace("Farfetch'd", "farfetchd")
    } else newName = name

    return newName.toLowerCase()
}

export const waitFor = ( time: number) => 
    new Promise( resolve => setTimeout(resolve, time))