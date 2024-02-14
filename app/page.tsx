import Content from "@/components/Content";
import Display from "@/components/Display";

export default function Home(){
  return (
    <div className="w-full h-full overflow-hidden overflow-y-auto bg-neutral-900" >

      <Content className={`${Display ? "" : "hidden"}`}></Content>

    </div>
  );
}
