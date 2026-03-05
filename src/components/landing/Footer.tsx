import { useNavigate } from "react-router-dom";

const blogPosts = [
  {
    title: "Why Human Accountability Works for ADHD (And Why Apps Don't)",
    path: "/blog/why-human-accountability-works-for-adhd",
  },
];

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="py-12 px-4 bg-[#0D0A08] border-t border-white/[0.06]" role="contentinfo">
      <div className="container max-w-4xl mx-auto space-y-8">
        {/* Blog articles */}
        <div className="text-center">
          <p className="text-white/30 text-xs uppercase tracking-widest mb-4">From our blog</p>
          <div className="flex flex-col items-center gap-2">
            {blogPosts.map((post) => (
              <button
                key={post.path}
                onClick={() => navigate(post.path)}
                className="text-white/50 text-sm hover:text-yellow-300/70 transition-colors duration-300"
              >
                {post.title} →
              </button>
            ))}
          </div>
        </div>

        <div className="text-center text-white/30 text-sm space-y-2">
          <p>© {new Date().getFullYear()} Meowy.Care. All rights reserved.</p>
          <p className="text-xs">This is not a medical service and does not provide diagnosis or treatment.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
