import { useState } from 'react';

type JobSideProps = {
    filters: string[];
    setFilters: React.Dispatch<React.SetStateAction<string[]>>;
    selectedSalary: string;
    setSelectedSalary:React.Dispatch<React.SetStateAction<string>>;
}
const JobSide: React.FC<JobSideProps> =({ filters, setFilters, selectedSalary, setSelectedSalary })=>{

    const [showArrow, setShowArrow] = useState(true);
    const categories = ['事務','エンジニア','営業','デザイン','マーケティング','財務・経理','人事','カスタマーサポート','製造','医療・介護'];

    const salaryOptions = ['300万円以上', '500万円以上', '700万円以上', '1000万円以上'];

    const handleCategoryChange = (category: string) =>{if(filters.includes(category)) {
        setFilters(filters.filter((cat) => cat !== category));
    }else {
        setFilters([...filters, category]);
    }
};
const handleSalaryChange = (e:React.ChangeEvent<HTMLSelectElement>) =>{
    setSelectedSalary(e.target.value);
    setShowArrow(false);
};

    return(
        <div className="bg-[#DFF1F4] h-[110%] w-[30%] p-4">
        <h2 className="font-mono text-xl2 font-bold  mb-2">求人カテゴリ</h2>
        {categories.map((category) => (
            <div key={category} className="flex items-center mb-2">
                <label className="font-mono text-sm">
                    <input
                    className="mg"
                    type="checkbox"
                    checked={filters.includes(category)}
                    onChange={() => handleCategoryChange(category)}/>
                    {category}
                </label>
                </div>
        ))}
        <h2 className="font-mono text-xl2 mb-2 font-bold">年収</h2>
        <div className="relative inline-block mb-4">
        <select value={selectedSalary} onChange={handleSalaryChange}
        className="appearance-none w-[120px] px-2 h-[25px] border-none text-xs rounded-none ml-2">
            {salaryOptions.map((option)=>(
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
        {showArrow && <span className="absolute right-8 top-1.5 text-sm pointer-events-none text-xs">▼</span>}
        </div>
    </div>
    );
};

export default JobSide;