import Link from "next/link";
import { Footer } from ".";

type MainLayoutProps = {
  children: React.ReactNode;
};

const NavBar = () => {
  return (
    <div className="navbar bg-base-100">
      <Link className="btn btn-ghost text-xl" href={'/'}>Internation</Link>
    </div>
  )
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar/>
      <main className="relative w-full max-w-7xl mx-auto mb-8 mt-4 flex-grow flex flex-col">{children}</main>
      <Footer/>
    </div>
  )
}

