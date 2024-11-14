import Image from "next/image";
import style from "./animals.module.css";
type Animals = {
  id: number;
  nome: string;
  descricao: string;
  imagem: string;
};

export default async function AnimalsPage() {
  const response = await fetch("https://api.origamid.online/animais", {
    cache: "no-store",
  });
  const animais = (await response.json()) as Animals[];
  return (
    <main>
      <h1>Animais</h1>

      <ul className={style.animals}>
        {animais.map((animal, i) => (
          <li key={animal.id}>
            <h2>{animal.nome}</h2>
            <Image
              width={2400}
              height={1800}
              src={animal.imagem}
              alt={animal.descricao}
              sizes="(max-width: 600px) 100vw, 50vw"
              priority={i < 2}
            />
          </li>
        ))}
      </ul>
    </main>
  );
}
