import { FaHome, FaRegStar } from "react-icons/fa"; //Main y Home
import { MdHistoryEdu } from "react-icons/md"; //History
import { SiAboutdotme } from "react-icons/si"; //About
import { RiTeamFill } from "react-icons/ri"; //team
import { TbSocial } from "react-icons/tb"; //social media y contacto
import { GiFireflake } from "react-icons/gi"; //Slogan o Eslogan
import { MdCategory } from "react-icons/md"; //Categorías de productos

export const links = [
  {
    name: "Home",
    href: "/dashboard",
    icon: FaHome,
    head: {
      title: "Sección Home",
      description:
        "Ten cuidado con las acciones que puedas ejecutar en esta sección.",
    },
  },
  {
    name: "Principal",
    href: "/dashboard/main",
    icon: FaRegStar,
    head: {
      title: "Sección Principal",
      description:
        "Aquí podrás configurar la sección principal de tu página, tanto los textos como la imagen de fondo.",
    },
  },
  {
    name: "Historia",
    href: "/dashboard/history",
    icon: MdHistoryEdu,
    head: {
      title: "Sección Historia",
      description: "Deberás armar tu Historia, Misión, Visión y Valores.",
    },
  },
  {
    name: "About",
    href: "/dashboard/about",
    icon: SiAboutdotme,
    head: {
      title: "Sección About",
      description:
        "La sección About o Sobre Nosotros presenta a las personas detrás de la empresa, sus roles, experiencias y valores, ayudando a los visitantes a conocer el equipo y sus contribuciones.",
    },
  },
  {
    name: "Team",
    href: "/dashboard/team",
    icon: RiTeamFill,
    head: {
      title: "Sección Team o Equipo",
      description:
        "En esta sección podrás mencionar a los miembors de tu equipo. Las imágenes que subas de cada uno serán redondeadas automáticamente.",
    },
  },
  {
    name: "Contacto",
    href: "/dashboard/socialMedia",
    icon: TbSocial,
    head: {
      title: "Contacto y Social Media",
      description:
        "Aquí colocarás los datos de contacto y redes sociales. Verifica que la información que incluyes sea correcta, de lo contrario no podrán ubicarte y puede que pierdas clientes.",
    },
  },
  {
    name: "Eslogan",
    href: "/dashboard/slogan",
    icon: GiFireflake,
    head: {
      title: "Sección del eslogan",
      description: "Una frase o unas palabras de cierre para que te recuerden.",
    },
  },
  {
    name: "Categorías",
    href: "/dashboard/category",
    icon: MdCategory,
    head: {
      title: "Sección Categorías de productos",
      description:
        "Podrás crear y administrar categorías de productos. Trata de no hacer cambios radicales cuando modificas categorías ya creadas.",
    },
  },
];