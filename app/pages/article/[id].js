import { useRouter } from "next/router";
import maBaseDeDonnee from "../../dataBase";

export default function DetailsArticle (){
    console.log(maBaseDeDonnee);
    const router = useRouter()
    const {id} = router.query
    
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