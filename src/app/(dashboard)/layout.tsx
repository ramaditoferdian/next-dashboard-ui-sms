import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex max-w-screen">
      {/* LEFT */}
      <div className="w-[14%] md:w-[10%] lg:min-w-[200px] p-4">
        <Link
          href="/"
          className="flex items-center justify-center lg:justify-start gap-2"
        >
          <Image src="/logo.png" alt="Logo" width={32} height={32} />
          <span className="hidden lg:block font-bold">SchooLama</span>
        </Link>

        <Menu />
      </div>

      {/* RIGHT */}
      <div className="w-[86%] md:w-[90%] lg:min-w-[calc(100%-200px)] bg-[#F6F8FA] overflow-scroll flex flex-col">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
