import { getCourses } from "@/api/courses.api";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cursos Gian Manzo",
  description: "Cursos de programação",
  keywords: ["cursos", "programação", "nextjs"],
  authors: [{ name: "Origamid", url: "https://origamid.com" }],
};

export default async function CoursesPage() {
  const curses = await getCourses();

  return (
    <div>
      <h1>Cursos</h1>
      <ul>
        {curses.map((course) => (
          <li key={course.id}>
            <Link href={`/courses/${course.slug}`}>{course.nome}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
