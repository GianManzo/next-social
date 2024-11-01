import { getCourses } from "@/api/courses.api";
import Link from "next/link";

export default async function CoursesPage() {
  const curses = await getCourses();

  return (
    <div>
      {curses.map((course) => (
        <div key={course.id}>
          <Link href={`/courses/${course.slug}`}>{course.nome}</Link>
        </div>
      ))}
    </div>
  );
}
