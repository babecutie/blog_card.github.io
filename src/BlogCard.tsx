import spaceImage from "../img/spacejoy-YqFz7UMm8qE-unsplash.jpg";
import { ArrowRightIcon } from "lucide-react";
function BlogCard() {
  return (
    <div className="w-[340px] mt-[120px] rounded-xl overflow-hidden shadow-lg bg-white border border-gray-100 hover:shadow-xl transition-shadow duration-300">
      <img src={spaceImage} alt="Blog" className="w-full h-full object-cover" />
      <div className="py-6 px-4">
        <h2 className="mb-2 inline-block rounded-full border border-green-200 bg-green-50 px-2 py-1 text-sm leading-5 font-normal text-success">
          Interior
        </h2>
        <p className="py-2 text-lg leading-7 font-semibold text-primary">
          Top 5 Living Room Inspirations
        </p>
        <p className="pb-8 text-base leading-6 font-medium text-secondary">
          Curated vibrants colors for your living, make it pop & calm in the same time.
        </p>
        <button className="inline-flex items-center gap-2 rounded-xl py-1 text-base leading-6 font-medium text-indigo-700 transition-colors hover:text-indigo-900 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-100">
          Read more
          <ArrowRightIcon aria-hidden="true" size={20} />
        </button>
      </div>
    </div>
  );
}

export default BlogCard;