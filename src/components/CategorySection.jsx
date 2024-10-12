import BookImg from "../assets/Images/book.png";
import MagazineImg from "../assets/Images/magazine.png";
import ComicImg from "../assets/Images/comic.png";

const categories = [
    {
        title: 'Book',
        imageUrl: BookImg,
        bgColor: 'bg-blue-300'
    },
    {
        title: 'Magazine',
        imageUrl: MagazineImg,
        bgColor: 'bg-yellow-200'
    },
    {
        title: 'Comic',
        imageUrl: ComicImg,
        bgColor: 'bg-red-300'
    },
];

const CategorySection = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
        {categories.map((category, index) => (
            <div key={index} className={`relative h-64 transform transition-transform duration-300 hover:scale-105 cursor-pointer ${category.bgColor} rounded-lg flex flex-row justify-between`}>
                <div className="w-full h-full object-cover rounded-lg shadow-md">
                    <img src={category.imageUrl} alt="" className="w-72 m-4" />
                </div>
                
                <div className="absolute top-20 right-12">
                    <p className="text-xl font-bold">{category.title}</p>
                    <p className="text-gray-600">View All</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default CategorySection