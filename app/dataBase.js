const maBaseDeDonnee = [
    {
        id: 1,
        titre: "Mon premier article",
        description: "Description du premier article",
        contenu: "Contenu du premier article",
        image: "/images/img4.jpg",
        comments: [
            {id: 1, text: "text numero un", author: "author numero un"}
        ]
    },
    {
        id: 2,
        titre: "Mon deuxieme article",
        description: "Description du deuxieme article",
        image: "/images/img3.jpg",

        contenu: "Contenu du deuxieme article",
        comments: [
            {id: 2, text: "text numero deux", author: "author numero deux"}
        ]
    },
    {
        id: 3,
        titre: "Mon troisieme article",
        description: "Description du troisieme article",
        image: "/images/img2.jpg",

        contenu: "Contenu du troisieme article",
        comments: [
            {id: 1, text: "text numero trois", author: "author numero trois"}
        ]
    },
    {
        id: 4,
        titre: "Mon quatre article",
        description: "Description du quatre article",
        image: "/images/img7.jpg",
        contenu: "Contenu du quatre article",
        comments: [
            {id: 1, text: "text numero quatre", author: "author numero quatre"}
        ]
    }
]    

export default maBaseDeDonnee