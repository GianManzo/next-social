import { IClass, IClassParams, ICourse } from "@/interfaces/courses.interfaces";

export async function getCourses() {
  const response = await fetch(`https://api.origamid.online/cursos`);
  return (await response.json()) as ICourse[];
}

export async function getCourse(slug: string) {
  const response = await fetch(`https://api.origamid.online/cursos/${slug}`);
  return (await response.json()) as ICourse & {
    aulas: IClass[];
  };
}

export async function getClass({
  courseSlug,
  classSlug,
}: IClassParams): Promise<IClass> {
  const response = await fetch(
    `https://api.origamid.online/cursos/${courseSlug}/${classSlug}`
  );
  return await response.json();
}
