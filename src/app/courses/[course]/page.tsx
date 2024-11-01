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
  const data = await getCourse(course);

  return (
    <div>
      <h1>{data.nome}</h1>
      {data.aulas.map((aula) => (
        <div key={aula.id}>
          <Link href={`/courses/${data.slug}/${aula.slug}`}>{aula.nome}</Link>
        </div>
      ))}
    </div>
  );
}
