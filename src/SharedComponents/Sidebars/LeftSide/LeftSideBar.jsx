import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import SmallNewsCard from "../../../Components/SmallNewsCard";


const LeftSideBar = () => {
    const [categories, setCategories] = useState([])
    const [news, setNews] = useState([])
    useEffect(() => {
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])

    useEffect(() => {
        fetch('news.json')
        .then(res => res.json())
        .then(data => setNews(data))
    } ,[])

    return (
        <div className="lg:w-1/4">
            <div className="mb-9">
                <h1 className="font-bold text-xl">All Category</h1>
                <div className="p-4 ">
                    {
                        categories.map(category => <NavLink to={`/categories/${category.id}`} className={"block mb-4"} key={category.id}>{category.name}</NavLink>)
                    }
                </div>
            </div>
            <div>
                <h1 className="font-bold text-xl mb-4">All News</h1>
                <div className="space-y-3">
                    {
                        news.slice(0,3).map((n, idx) => <SmallNewsCard key={idx} n={n}></SmallNewsCard>)
                    }
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default LeftSideBar;