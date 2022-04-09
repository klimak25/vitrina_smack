
import { useEffect, useState } from "react" 
import { getAllCategories} from '../api'
import {Loader} from '../components/Loader'
import { Serch } from '../components/Serch'
import {CategoryList} from '../components/CategoryList'
function  Home() {

    const [catolog, setCatolog] = useState([])
    const [filter, setFilter] = useState([])


    const handleSearh = (str) => {
       setFilter(
           catolog.filter((item) =>
            item.strCategory.toLowerCase().includes(str.toLowerCase()))
       )
    }
  
    useEffect(() => {
        getAllCategories().then(data => {
           setCatolog(data.categories)
           setFilter(data.categories)
          
        })
    }, [])
    return <>
       <Serch cb={handleSearh}/>
   
      {!catolog.length ? <Loader/> : (
          <CategoryList catolog={filter}/>
      )}
    </>
}
export {Home}