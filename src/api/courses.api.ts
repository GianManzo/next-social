import { API_URL } from "@/config";
import { IClass, IClassParams, ICourse } from "@/interfaces/courses.interfaces";

export async function getCourses() {
  const response = await fetch(API_URL);
  return (await response.json()) as ICourse[];
}

export async function getCourse({ course }: { course: string }) {
  const response = await fetch(`${API_URL}/${course}`);
  return (await response.json()) as ICourse & {
    aulas: IClass[];
  };
}

export async function getClass({
  courseSlug,
  classSlug,
}: IClassParams): Promise<IClass> {
  const response = await fetch(`${API_URL}/${courseSlug}/${classSlug}`);
  return await response.json();
}
