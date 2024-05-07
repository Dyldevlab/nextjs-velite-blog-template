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
        Je me présente, Nalin Dylan, étudiant de 20 ans. Je suis en formation BTS Ciel 1ère année. C'est une formation Cybersécurité informatique et réseaux, éléctronique. <br/>
        
        Mon BTS était auparavant le BTS SNIR qui avait plus de developpement proposé dans la formation. <br/> 
        Cependant, la formation a changé et s'appelle maintenant Ciel
        elle est plus axée sur le réseaux et la Cybersécurité. <br/>
        Malgré toute appréhention la formation m'a permis d'aqcquérir quelques bases en développement qui serait le domaine qui me pationne le plus. <br/><br/>
        Lors de ma première année de BTS j'ai eu la chance de participer au challenge Passe Ton Hack qui était un challenge très intéressant car plein 
        de découvertes et qui m'a permi d'apprendre plein de choses sur la Cyber qui était un domaine totalement inconnu pour moi, malgré les "lacunes" 
        que j'avais de base. <br/>

        J'ai réussi grâce à l'acharnement, la motivation et de la perséverance à m'investir dans ce projet et ai permi à mon équipe
        d'obtenir 2 flags.<br/><br/>


        Nous sommes début Mai actuellement, nous allons entammer nos stages dans 1 semaine. <br/>

        En ce qui me concerne je vais le réaliser dans une entreprise d'un 
        ancien élève de mon école qui tient un magasin à son nom maintenant. J'espère pouvoir développer mes compétences et connaissances sur tout ce qui est 
        Web, j'apprécierais approffondir mes connaissances dans les différents langages de programmation. <br/>

        Nous avons aussi dû participer à un mini projet en Réseau. <br/>
        En ce qui me concerne je travaillais sur CTFD.io, une plateforme d'hébergement de Capture 
        The Flag. Il m'a permi de développer certaines de mes capacités notamment la curiosité, la recherche, la perséverance ainsi que la créativité. Lors de ce projet j'ai pu consulter la documentation qui expliquait
        que ce genre d'exercices était utilisé dans les grandes écoles Américaines afin d'enseigner aux élèves la Cybersécurité ainsi que de voir la
        fiabilité des réseaux.<br/><br/>




        Sur ce projet je devais créer des challenges auxquels des utilisateurs factices pouvaient participer. Le challenge se résoud à l'aide d'un flag 
        et grâce à ces flags on pouvait consulter un classement des différents utilisateurs qui participaient (ou non) aux challenges. L'objectif était de
        découvrir la plateforme ainsi que de voir sa fiabilité et son accessibilité pour l'utiliser dans un but pédagogique ensuite. <br/>

        Effectivement, il nous permettrait en deuxième année de réaliser des Capture The Flag en interne, ce qui serait interessant pour nous car 
        on pourrait être en concurrence et 
        </p>
       </div>
    </div>
  );
}
