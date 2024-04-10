import { Footer } from ".";

type MainLayoutProps = {
  children: React.ReactNode;
};

const NavBar = () => {
  return (
    <div className="navbar bg-base-100">
      <a className="btn btn-ghost text-xl">Internation</a>
    </div>
  )
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar/>
      <main className="relative w-full max-w-7xl mx-auto mb-8 mt-4 flex-grow">{children}</main>
      <Footer/>
    </div>
  )
}

