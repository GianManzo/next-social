import { getClass, getCourse, getCourses } from "@/api/courses.api";
import { IClass } from "@/interfaces/courses.interfaces";
import { Metadata } from "next";
import Link from "next/link";

interface Params {
  class: string;
  course: string;
}

export async function generateStaticParams() {
  const courses = await getCourses();

  const classData = await Promise.all(
    courses.map((course) => getCourse({ course: course.slug }))
  );
  return classData
    .reduce((acc: IClass[], course) => acc.concat(course.aulas), [])
    .map((aula) => ({
      course: courses.find((course) => course.id === aula.curso_id)?.slug,
      class: aula.slug,
    }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { class: classParams, course } = await params;
  const data = await getClass({ classSlug: classParams, courseSlug: course });
  return {
    title: data.nome,
    description: data.descricao,
  };
}

export default async function ClassPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { class: classParams, course } = await params;
  const data = await getClass({ classSlug: classParams, courseSlug: course });

  return (
    <div>
      <Link href={`/courses/${course}`}>Voltar</Link>
      <h1>{data.nome}</h1>
      <p>{data.descricao}</p>
      <p>Duração: {data.tempo} min</p>
    </div>
  );
}
