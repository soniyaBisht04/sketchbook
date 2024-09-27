import DrawingBoard from "@/components/DrawingBoard";
import Menu from "@/components/Menu";
import Tools from "@/components/Tools";

export default function Home() {
  return ( <div>
    <Menu/>
    <Tools/>
    <DrawingBoard/>
  </div>
  );
}
