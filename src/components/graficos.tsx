export const Graficos = () => {
  return (
    <section className="flex flex-col px-4 gap-16 items-center">

      <div className="flex items-center">
        <p className="w-[500px] text-2xl">GoalZone é uma rede de academias canadense que administra aulas de yoga, ciclismo, HIIT, entre outras. Porém estas aulas que tem capacidade de 18 a 25 alunos estão com uma média de presença de 30%. O objetivo é prever se um aluno que reservou uma vaga na aula vai ou não comparecer para disponibilizar mais vagas.</p>
        <img className="size-[500px]" src="/pie-attended.png" alt="" />
      </div>  

      <div className="flex flex-col justify-center gap-4">
        <h2 className="text-5xl text-center">Histogramas</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="flex flex-col items-center max-w-[500px]">
            <img className="size-[500px]" src="/hist-days-before-class.png" alt="" />
            <p className="text-2xl text-center">Aqui vemos que não há um padrão nas reservas para as aulas.</p>
          </div>
          <div className="flex flex-col items-center max-w-[500px]">
            <img className="size-[500px]" src="/hist-weight.png" alt="" />
            <p className="text-2xl text-center">Podemos ver que a maioria dos alunos que se inscrevem em aulas estão numa média de peso por volta de 100-120 quilos.</p>
          </div>
          <div className="flex flex-col items-center max-w-[500px]">
            <img className="size-[500px]" src="/hist-month-as-member.png" alt="" />
            <p className="text-2xl text-center">A grande maioria dos alunos estão matriculados na academia entre 1 e 1.5 ano.</p>
          </div>
          <div className="flex flex-col items-center max-w-[500px]">
            <img className="size-[500px]" src="/hist-day-of-class_attended.png" alt="" />
            <p className="text-2xl text-center">Vemos que o sexta feira tem mais aulas ou mais incritos em aulas mas quarta feira é o dia que tem maior porcentagem de faltas.</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center gap-4">
        <h2 className="text-5xl text-center">Boxplot</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="flex flex-col items-center max-w-[500px]">
            <img className="size-[500px]" src="/box-days-before-class.png" alt="" />
            <p className="text-2xl text-center">Vemos que não tem muita diferença baseada no dia que o aluno se inscreve na aula e a taxa de presença.</p>
          </div>
          <div className="flex flex-col items-center max-w-[500px]">
            <img className="size-[500px]" src="/box-weight.png" alt="" />
            <p className="text-2xl text-center">É perceptivel que ocorrem muito mais faltas quando os alunos tem pesos acima da média.</p>
          </div>
          <div className="flex flex-col items-center max-w-[500px]">
            <img className="size-[500px]" src="/box-months-as-member.png" alt="" />
            <p className="text-2xl text-center">É visivel que os alunos que mais atendem as aulas são o que estão matriculados na academia por um tempo acima da média.</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center gap-4  ">
        <h2 className="text-5xl text-center">Heatmap</h2>
        <div className="flex flex-wrap justify-center">
          <div className="flex flex-col items-center max-w-[500px]">
            <img src="/heatmap.png" alt="" />
            <p className="text-2xl text-center">Este HeatMap concretiza a relação de presença com peso e tempo de matriculado na academia, onde os matriculados a mais tempo tem maior taxa de presença e os com peso acima da média tem menor taxa de presença.</p>
          </div>
          
        </div>
      </div>
    </section>
  )
} 