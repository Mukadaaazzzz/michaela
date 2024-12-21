/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

interface BlogPost {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  slug: string;
}

const BlogPage = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "5 Proven Steps to Rebuild Confidence After a Breakup",
      date: "November 18, 2024",
      excerpt: "Discover actionable strategies to regain self-esteem and rebuild your confidence post-breakup.",
      image: "/images/blogs/confidence.jpg",
      slug: "/blogpage/rebuild-confidence",
    },
    {
      id: 2,
      title: "The Ultimate Guide to First Dates: How to Make a Great Impression",
      date: "August 7, 2024",
      excerpt: "Nail your first date with confidence! Learn expert-backed tips to connect and impress.",
      image: "/images/blogs/first-date-tips.jpg",
      slug: "/blogpage/first-date-tips",
    },
    {
      id: 3,
      title: "How to Identify and Avoid Red Flags in Relationships",
      date: "May 23, 2024",
      excerpt: "Protect your heart by learning how to spot relationship red flags before it's too late.",
      image: "/images/blogs/red-flags.jpg",
      slug: "/blogpage/red-flags",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 mb-40">
      <h1 className="text-4xl font-bold text-center mb-12">Mihaela's Blog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <Image
              src={post.image}
              alt={post.title}
              width={600}
              height={400}
              className="w-full h-40 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-sm text-gray-600 mb-4">{post.date}</p>
              <p className="text-gray-700 text-base">{post.excerpt}</p>
              <a
                href={post.slug}
                className="mt-4 inline-block text-blue-600 hover:underline"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
