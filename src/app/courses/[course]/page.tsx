import { getCourse, getCourses } from "@/api/courses.api";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Params {
  course: string;
}

export async function generateStaticParams() {
  const courses = await getCourses();
  return courses.map((course) => ({
    course: course.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { course } = await params;
  const data = await getCourse({ course });
  return {
    title: data.nome,
    description: data.descricao,
  };
}

export default async function CoursePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { course } = await params;
  const data = await getCourse({ course });
  if (data.error) return notFound();
  return (
    <div>
      <h1>{data.nome}</h1>
      <p>{data.descricao}</p>
      <p>Total de horas: {data.total_horas} hrs</p>
      <p>Total de aulas: {data.total_aulas}</p>
      <h2>Aulas</h2>
      <ul>
        {data.aulas?.map((aula) => (
          <li key={aula.id}>
            <Link href={`/courses/${data.slug}/${aula.slug}`}>{aula.nome}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
