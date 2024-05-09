import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { siteConfig } from "@/config/site";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "Information about me",
};


export default async function AboutPage() {
  
  return (
    <div className="container max-w-6xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-x-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">
            About Me
          </h1>
        </div>
      </div>
      <hr className="my-8" />
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        <div className="min-w-48 max-w-48 flex flex-col gap-2">
          <Avatar className="h-48 w-48">
            <AvatarImage src="/avatar.png" alt={siteConfig.author} />
            <AvatarFallback>JC</AvatarFallback>
          </Avatar>
          <h2 className="text-2xl font-bold text-center break-words">
            {siteConfig.author}
          </h2>
          <p className="text-muted-foreground text-center break-words">
            Software Developer
          </p>
        </div>
        <p className="text-muted-foreground text-lg py-4">
        Je me présente, Nalin Dylan, étudiant de 20 ans. Je suis en formation BTS Ciel 1ère année. C&aposest une formation Cybersécurité informatique et réseaux, éléctronique. <br/>
        
        Mon BTS était auparavant le BTS SNIR qui avait plus de developpement proposé dans la formation. <br/> 
        Cependant, la formation a changé et s&aposappelle maintenant Ciel
        elle est plus axée sur le réseaux et la Cybersécurité. <br/>
        Malgré toute appréhention la formation m&aposa permis d&aposaqcquérir quelques bases en développement qui serait le domaine qui me pationne le plus. <br/><br/>
        Lors de ma première année de BTS j&aposai eu la chance de participer au challenge Passe Ton Hack qui était un challenge très intéressant car plein 
        de découvertes et qui m&aposa permi d&aposapprendre plein de choses sur la Cyber qui était un domaine totalement inconnu pour moi, malgré les "lacunes" 
        que j&aposavais de base. <br/>

        J&aposai réussi grâce à l&aposacharnement, la motivation et de la perséverance à m&aposinvestir dans ce projet et ai permi à mon équipe
        d&aposobtenir 2 flags.<br/><br/>


        Nous sommes début Mai actuellement, nous allons entammer nos stages dans 1 semaine. <br/>

        En ce qui me concerne je vais le réaliser dans une entreprise d&aposun 
        ancien élève de mon école qui tient un magasin à son nom maintenant. J&aposespère pouvoir développer mes compétences et connaissances sur tout ce qui est 
        Web, j&aposapprécierais approffondir mes connaissances dans les différents langages de programmation. <br/>

        Nous avons aussi dû participer à un mini projet en Réseau. <br/>
        En ce qui me concerne je travaillais sur CTFD.io, une plateforme d&aposhébergement de Capture 
        The Flag. Il m&aposa permi de développer certaines de mes capacités notamment la curiosité, la recherche, la perséverance ainsi que la créativité. Lors de ce projet j&aposai pu consulter la documentation qui expliquait
        que ce genre d&aposexercices était utilisé dans les grandes écoles Américaines afin d&aposenseigner aux élèves la Cybersécurité ainsi que de voir la
        fiabilité des réseaux.<br/><br/>




        Sur ce projet je devais créer des challenges auxquels des utilisateurs factices pouvaient participer. Le challenge se résoud à l&aposaide d&aposun flag 
        et grâce à ces flags on pouvait consulter un classement des différents utilisateurs qui participaient (ou non) aux challenges. L&aposobjectif était de
        découvrir la plateforme ainsi que de voir sa fiabilité et son accessibilité pour l&aposutiliser dans un but pédagogique ensuite. <br/>

        Effectivement, il nous permettrait en deuxième année de réaliser des Capture The Flag en interne, ce qui serait interessant pour nous car 
        on pourrait être en concurrence et 
        </p>
       </div>
    </div>
  );
}
