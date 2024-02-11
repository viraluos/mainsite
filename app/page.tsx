import Header from "./components/Header";
import Content from "./components/Content";

export default function Home(){
  return (
    <div className="w-full h-full overflow-hidden overflow-y-auto bg-neutral-900" >

      <Content></Content>

      {
        //<Footer></Footer>
      }

    </div>
  );
}
