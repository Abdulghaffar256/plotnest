import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ post }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <div className="bg-white border rounded-md overflow-hidden hover:shadow-md transition cursor-pointer">
        <div className="relative w-full h-44">
          <Image
            src={post.image}
            alt={post.title}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="p-4">
          <span className="text-xs text-gray-500 uppercase">{post.category}</span>
          <h3 className="text-lg font-semibold mt-1 line-clamp-2">{post.title}</h3>
          <p className="text-xs text-gray-400 mt-1">{post.author} | {post.date}</p>
        </div>
      </div>
    </Link>
  );
}
