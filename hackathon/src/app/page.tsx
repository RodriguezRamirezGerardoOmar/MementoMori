"use client"

import Image from "next/image";
import ButtonComponent from "@/app/components/ButtonComponent";
import TextFieldComponent from "./components/TextFieldComponent";
import SelectComponent from "./components/SelectComponent";
import CardInventarioComponent from "./components/CardInventarioComponent";

export default function Home() {
  const options = [
    { value: "1", label: "Option 1" },
    { value: "2", label: "Option 2" },
    { value: "3", label: "Option 3" },
  ];
  const onSelect = (value: string) => {
    console.log(value);
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ButtonComponent text="Enviar" />
      <form>
        <TextFieldComponent />
        <SelectComponent options={options} onSelect={onSelect} />
      </form>
      <CardInventarioComponent nombre="Producto 1" precio={100} cantidad={10} imagenSrc="/images/producto1.jpg" />
    </main>
  );
}
