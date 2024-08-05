import Footer from "@/app/(marketing)/_components/footer";
import Navbar from "@/app/(marketing)/_components/navbar";


const MarketingLayout = (
  { children }: { children: React.ReactNode }
) => {
  return (
    <div className="h-full bg-slate-100">
      <Navbar />
      <main className="pt-40 pb-20 bg-slate-100 h-screen">
        {children}
      </main>
      <Footer />

    </div>
  )
}

export default MarketingLayout;