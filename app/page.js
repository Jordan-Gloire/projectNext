"use client"
import Image from "next/image";
import Link from "next/link";
import HOME5 from "../public/images/img7.jpg";
import myBaseDeDonnee from "./dataBase";
import { useRouter } from 'next/navigation'
export default function Home() {
  const router = useRouter()
  
  const redirectionDetail = (id) => {
    router.push(`/article/${id}`);
  }
  return (
    <nav className="bg-orange-600 flex flex-col items-center justify-between">
      <ul className="py-4 px-6 rounded-full mt-4 bg-black flex text-white justify-center items-center gap-5">
        <Link className="text-orange-600" href="/">
          Home
        </Link>
        <Link href="/">About</Link>
        <Link href="/">Services</Link>
        <Link href="/">Article</Link>
        <Link href="/">Contact</Link>
        <input className="text-white rounded-full bg-transparent placeholder:text-white" type="text" placeholder="Rechercher"/>
      </ul>
      <div className="flex justify-center items-center gap-5 w-screen">
        <div>
          <Image
            className="w-96 my-9 rounded-lg"
            src={HOME5}
            alt="Vercel Logo"
            width={200}
            height={200}
          />
        </div>
        <div>
          <h1 className="text-center text-7xl">Hello I'm Pati</h1>
          <p className="text-center">
            Welcome to my <br />{" "}
            <span className="text-white text-4xl">Blog</span>
          </p>
        </div>
      </div>
      <div className="mx-8 flex justify-center items-center gap-5 w-screen">
        <div>
          {
            myBaseDeDonnee.map((article) => {
              return (
                <div key={article.id} className="text-center space-y-5 flex flex-col justify-center items-center">
                  <div>
                    <Image className="w-96 my-9 rounded-lg" src={article.image} alt="Vercel Logo" width={200} height={200} />
                    <h1>{article.titre}</h1>
                    <p>{article.description}</p>
                    <button className="bg-black text-white rounded-md py-2 px-8" onClick={() => redirectionDetail(article.id)}>Voir plus</button>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </nav>
  );
}
