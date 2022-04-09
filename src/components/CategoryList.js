import {CategoryItem} from './CategoryItem'
function CategoryList({catolog = []}) {
    return <div className="list">
        {catolog.map(el => (
            <CategoryItem key={el.idCategory} {...el}/>
        ))}
    </div>
}

export {CategoryList}