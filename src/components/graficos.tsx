export const Graficos = () => {
  return (
    <section className="flex flex-col px-4 gap-10 items-center">

      <div className="flex flex-col justify-center gap-4  ">
        <h2 className="text-5xl text-center">Histogramas</h2>
        <div className="flex flex-wrap justify-center">
          <img src="/hist-days-before-class.png" alt="" />
          <img src="/hist-weight.png" alt="" />
          <img src="/hist-month-as-member.png" alt="" />
          <img src="/hist-day-of-class_attended.png" alt="" />
        </div>
      </div>

      <div className="flex flex-col justify-center gap-4  ">
        <h2 className="text-5xl text-center">Boxplot</h2>
        <div className="flex flex-wrap justify-center">
          <img src="/box-days-before-class.png" alt="" />
          <img src="/box-weight.png" alt="" />
          <img src="/box-months-as-member.png" alt="" />
        </div>
      </div>

      <div className="flex flex-col justify-center gap-4  ">
        <h2 className="text-5xl text-center">Heatmap</h2>
        <div className="flex flex-wrap justify-center">
          <img src="/heatmap.png" alt="" />
        </div>
      </div>
    </section>
  )
} 