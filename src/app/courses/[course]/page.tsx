import { getCourse } from "@/api/courses.api";
import Link from "next/link";

interface Params {
  course: string;
}

export default async function CoursePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { course } = await params;
  const data = await getCourse({ course });

  return (
    <div>
      <Link href={`/courses`}>Voltar</Link>
      <h1>{data.nome}</h1>
      <p>{data.descricao}</p>
      <p>Total de horas: {data.total_horas} hrs</p>
      <p>Total de aulas: {data.total_aulas}</p>
      <h2>Aulas</h2>
      <ul>
        {data.aulas.map((aula) => (
          <li key={aula.id}>
            <Link href={`/courses/${data.slug}/${aula.slug}`}>{aula.nome}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
