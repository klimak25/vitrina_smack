import {useEffect, useState} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import {getFilteredCategory} from '../api'
import {Loader} from '../components/Loader'
import {MealList} from '../components/MealList'
function Category() {
  const {name} = useParams()
  let navigate = useNavigate()
  const [meals, setMeals] = useState([])
  useEffect(() => {
       getFilteredCategory(name).then((data => setMeals(data.meals)))
  },[name])

  return <>
    <button className='btn' onClick={() => navigate(-1)}> Go back</button>
    {!meals.length ? <Loader/> : <MealList meals={meals}/>}
  </>

}

export {Category} 

