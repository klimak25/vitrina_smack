import {useEffect, useState} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import {getMealByid} from '../api'
import {Loader} from '../components/Loader'


function Recepte() {
  const {id} = useParams()
  let navigate = useNavigate()
  const [recepte, setRecepte] = useState([])
  useEffect(() => {
       getMealByid(id).then((data => setRecepte(data.meals[0])))
  },[id])

  return <>
      <button className='btn' onClick={() => navigate(-1)}> Go back</button>
    {!recepte ? (<Loader/> ) :(<div className="card">
    <div className="card-image" style={{maxWidth:700}} >
        <img src={recepte.strMealThumb} alt={recepte.strMeal} style={{marginLeft: 350}}/>
    </div>
    <div className="card-content">
    <span className="card-title">{recepte.strMeal}</span>
    <h5>Category: {recepte.strCategory}</h5>
    {recepte.strArea ? <h6>Area: {recepte.strArea}</h6> : null}
    <p>{recepte.strInstructions}</p>
    </div>
    <div className="card-action">
         <table className='centered'>
           <thead>
             <tr>
                <th>Ingrdient</th> 
                <th>Measure</th>
             </tr>
           </thead>
           <tbody>
             {
               Object.keys(recepte).map((key) => {
                 if(key.includes('Ingredient') && recepte[key]) {
                   return (
                     <tr key={key}>
                     <td>{recepte[key]}</td>
                     <td>{
                       recepte[`strMeasure${key.slice(13)}`]
                       }</td>
                     </tr>
                   )
               }
               return null
           })}
           </tbody>
         </table>
         {recepte.strYoutube ? (
           <div className='row'>
             <h4>Video Recipe</h4>
             <iframe title={id} src={`https://www.youtube.com/embed/${recepte.strYoutube.slice(-11)}`}/>
           </div>
         ) : null }
        <a  href={recepte.strSource} className="btn">Instogram</a>
    </div>
</div>)}
  </>

}

export {Recepte} 

