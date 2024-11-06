import { Link } from 'react-router-dom';

const Header : React.FC =()=>{
    return(
        <header className="h-[5%] bg-[#313647] flex justify-between items-center p-2 font-mono">
        <h1 className="text-white font-bold text-xl">求人検索アプリ</h1>
        <div className="flex gap-4">
        <Link to="/" className="text-white">求人検索</Link>
        <Link to="/post-job" className="text-white">求人投稿</Link>
        </div>
        </header>
    )
}

export default Header;