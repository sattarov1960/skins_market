import {Footer} from "@/layout/components/footer/footer";
import {Header} from "@/layout/components/header/header";

export function TopWrap({ children }: { children: React.ReactChild}) {
  return (
    <>
      <Header/>
      {children}
      <Footer/>
    </>
  );
}