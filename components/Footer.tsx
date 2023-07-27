import Link from "next/link"
export function Footer(){
    return(
        <footer className="py-6 text-center " >
          <div className="mx-auto" >
             <p className="text-center text-sm text-black" >
                &copy; 2023 <Link href={"https://bibek-portfolio.vercel.app/"}  target="_blank" className="font-bold text-xl" >Bibek</Link>-Store, Inc . All rights reserved
             </p>
          </div>
        </footer>
    )
}