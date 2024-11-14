import { getCourses } from "@/api/courses.api";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cursos Gian Manzo",
  description: "Cursos de programação",
  keywords: ["cursos", "programação", "nextjs"],
  authors: [{ name: "Origamid", url: "https://origamid.com" }],
};

export default async function CoursesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const curses = await getCourses();

  return (
    <div className="flex">
      <nav style={{ marginRight: "4rem" }}>
        <h2>Cursos</h2>
        <ul>
          {curses.map((course) => (
            <li key={course.id}>
              <Link href={`/courses/${course.slug}`}>{course.nome}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div>{children}</div>
    </div>
  );
}
