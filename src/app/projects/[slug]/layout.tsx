import Footer from "@/components/Footer";
import ProfileHead from "@/components/ProfileHead";
import { mainProjects, otherProjects } from "@/dataStatic/dataStatic";

export function generateStaticParams() {
  const allProjects = [...mainProjects, ...otherProjects];
  return allProjects.map((p) => ({ slug: p.slug }));
}

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
      <ProfileHead />
      <main className="max-w-screen px-2">{children}</main>
      <Footer />
    </div>
  );
}
