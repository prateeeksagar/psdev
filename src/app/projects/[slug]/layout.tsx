import Footer from "@/components/Footer";
import ProfileHead from "@/components/ProfileHead";

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
      <ProfileHead />
      <main className="max-w-screen px-2">{children}</main>
      <Footer />
    </div>
  );
}
