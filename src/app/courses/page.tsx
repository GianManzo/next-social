import { getCourses } from "@/api/courses.api";
import Link from "next/link";

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
