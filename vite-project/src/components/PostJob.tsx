import React from 'react';
import { useState } from 'react';
import { useNavigate } from'react-router-dom';


const PostJob = ({ addJobPost }) => {
    const categories = ['事務','エンジニア','営業','デザイン','マーケティング','財務・経理','人事','カスタマーサポート','製造','医療・介護'];
    const [category, setCategory] = useState('カテゴリを選択 ▼');
    const [salary, setSalary] = useState('');
    const [title, setTitle] = useState('');

    const navigate = useNavigate();

    const handleSubmit = ()=>{
        const postData = { category, salary, title};
        addJobPost(postData);
        alert('求人を投稿しました');
        navigate('/');
        setCategory('カテゴリを選択');
        setSalary('');
        setTitle('');
    };
  return (
    <div className="mx-12 my-4">
      <h2 className="font-mono mb-8 text-xl font-bold">求人投稿</h2>
      <p className="mb-2">求人カテゴリ選択</p>
      <select className="appearance-none w-[250px] h-[30px] pl-2 border-2 rounded-none mb-2" value={category} onChange={(e)=>setCategory(e.target.value)}>
        <option value="カテゴリを選択 ▼" disabled >カテゴリを選択 ▼</option>
        {categories.map((cat)=>(
            <option key={cat} value={cat}>
                {cat}
            </option>
        ))}
      </select>
      <p className="mb-2">年収（万円）</p>
      <input className="w-[250px] h-[30px] border-2 mb-2" type="text" value={salary} onChange={(e)=>setSalary(e.target.value)}
      />
      <p className="mb-2">求人タイトル</p>
      <input className="w-[600px] h-[30px] mb-8 border-2" type="text" value={title} onChange={(e)=>setTitle(e.target.value)}></input>
      <div>
        <button onClick={handleSubmit} className="bg-blue-400 text-white w-[250px] h-[30px] rounded">投稿</button>
      </div>
    </div>
  );
};

export default PostJob;