export const Header = () => {
  return (
    <header id="header" className="flex flex-col items-center gap-6 mb-2 pt-4 md:p-0 md:justify-between md:py-8 md:px-16 md:flex-row bg-transparent min-h-32 w-full">
      <img 
        className="w-1/2 max-w-40"
        src="https://iconape.com/wp-content/files/sb/194520/svg/194520.svg" 
      />
      <ul className="flex items-center gap-6 font-medium">
        <li>
          <a href="https://www.kaggle.com/datasets/ddosad/datacamps-data-science-associate-certification" target="_blank">DataFrame</a>
        </li>
      </ul>
    </header>
  )
}