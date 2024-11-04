import { getClass } from "@/api/courses.api";
import Link from "next/link";

interface Params {
  class: string;
  course: string;
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
