export const Header = () => {
  return (
    <header className="flex justify-between py-8 px-16 bg-transparent fixed h-32 w-full">
      <img 
        className=""
        src="https://iconape.com/wp-content/files/sb/194520/svg/194520.svg" 
      />
      <ul className="flex items-center gap-6 font-medium">
        <li>
          <a href="">Topo</a>
        </li>
        <li>
          <a href="https://www.kaggle.com/datasets/ddosad/datacamps-data-science-associate-certification" target="_blank">DataFrame</a>
        </li>
        <li>
          <a href="">Participantes</a>
        </li>
      </ul>
    </header>
  )
}