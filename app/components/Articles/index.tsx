import Image from "next/image";
import Link from "next/link";

interface BlogPost {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  slug: string;
}

const Articles = () => {
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

  const featuredPosts = blogPosts.slice(0, 2);

  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-50 py-16 shadow-lg">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-10">
          Explore My Blog
        </h2>
        <p className="text-lg text-gray-600 text-center mb-10">
          Stay informed and inspired with the latest tips, advice, and insights from Michaela.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {featuredPosts.map((post) => (
            <div
              key={post.id}
              className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-4 right-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow-md">
                  {post.date}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-gray-600 mt-4">{post.excerpt}</p>
                <Link
                  href={post.slug}
                  className="inline-block mt-6 text-blue-600 font-semibold hover:underline"
                >
                  Read More &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blogpage"
            className="inline-block bg-blue-600 text-black px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300"
          >
            View All Blogs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Articles;
