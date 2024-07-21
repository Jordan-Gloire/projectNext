
import maBaseDeDonnee from "../../dataBase";

export default async function DetailsArticle (props){
    const id=props.params.id;
    console.log(id)
    const article = maBaseDeDonnee.find(article => String(article.id) === id)
    
    if(!article){
        return <p>Artucle introuvable</p>
    }
    return (
        <div>
            <h1>Article {id}</h1>
            <p>{article.contenu}</p>
        </div>
    )
}