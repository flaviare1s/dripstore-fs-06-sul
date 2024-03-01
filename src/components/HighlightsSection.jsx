import ShirtImage from "../assets/camisa.png";

export function HighlightsSection() {
  return (
    <section className="px-5 lg:px-24 ">
      <div className="flex justify-between mb-[10px]">
        <h3>Coleções em Destaque</h3>
      </div>
      <div className="lg:grid grid-cols-3 lg:gap-3">
        <div className="border relative bg-[#D8E3F2] w-full my-[10px] rounded-lg p-5 ">
          <div className=" relative z-50 ">
            <div className="flex">
              <p className=" bg-[#E7FF86] rounded-3xl px-[15px] py-[5px] mb-[10px]">30% OFF</p>
            </div>
            <p className="mb-[10px]">Novo Drop Supreme</p>
            <button className="bg-white z-20 text-[#C92071] px-[20px] py-[10px] rounded-md ">Comprar</button>
          </div>
          <img src={ShirtImage} className="absolute z-10 right-0 bottom-0" alt="" />
        </div>
        <div className="border relative bg-[#D8E3F2] w-full my-[10px] rounded-lg p-5 ">
          <div className=" relative z-50 ">
            <div className="flex">
              <p className=" bg-[#E7FF86] rounded-3xl px-[15px] py-[5px] mb-[10px]">30% OFF</p>
            </div>
            <p className="mb-[10px]">Coleção Adidas</p>
            <button className="bg-white z-20 text-[#C92071] px-[20px] py-[10px] rounded-md ">Comprar</button>
          </div>
          <img src={ShirtImage} className="absolute z-10 right-0 bottom-0" alt="" />
        </div>
        <div className="border relative bg-[#D8E3F2] w-full my-[10px] rounded-lg p-5 ">
          <div className=" relative z-50 ">
            <div className="flex">
              <p className=" bg-[#E7FF86] rounded-3xl px-[15px] py-[5px] mb-[10px]">30% OFF</p>
            </div>
            <p className="mb-[10px]">Novo Beats Bass</p>
            <button className="bg-white z-20 text-[#C92071] px-[20px] py-[10px] rounded-md ">Comprar</button>
          </div>
          <img src={ShirtImage} className="absolute z-10 right-0 bottom-0" alt="" />
        </div>
      </div>
    </section>
  );
}
