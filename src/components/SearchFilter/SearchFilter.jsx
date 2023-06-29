export default function SearchFilter ({searchChange}){
    return(
        <div>
            <label htmlFor="filter">Find contacts by name</label>
            <input type="text" name="filter" id='filter' onChange={searchChange}/>
        </div>
    )
}