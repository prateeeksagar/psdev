import Footer from "@/components/Footer";
import ProfileHead from "@/components/ProfileHead";

export default function AppLayout({children}: {children: React.ReactNode}) {
    return (
        <>
        <ProfileHead/>
        <main className="max-w-screen">{children}</main>
        <Footer/>
        </>
    )
}