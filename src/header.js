import Input from "./../src/input"
import StartSearch from "./../src/startSearch"

export default function Header({isStartPage, search}) {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="bg-slate-100 w-full h-60" />
      {isStartPage ? <Input /> : <StartSearch search={search}/>}
    </div>
  )
}
