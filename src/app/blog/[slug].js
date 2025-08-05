export async function generateStaticParams() {
  return [
    { slug: "top-areas-karachi" },
    { slug: "plot-buying-checklist" },
  ];
}

const blogContent = {
  "top-areas-karachi": {
    title: "Top 5 Areas to Buy Plots in Karachi",
    date: "2025-07-01",
    content: `
Karachi is a massive real estate hub. Here are the top 5 areas:
1. DHA Karachi
2. Bahria Town
3. Gulshan-e-Iqbal
4. Scheme 33
5. North Nazimabad

Each area offers unique advantages like accessibility, amenities, and growth potential.
    `,
  },
  "plot-buying-checklist": {
    title: "Plot Buying Checklist for Beginners",
    date: "2025-06-15",
    content: `
Before buying a plot, make sure to:
- Verify ownership documents
- Check zoning laws
- Ensure utility access
- Visit the site
- Compare with market rates
    `,
  },
};

export default function BlogPost({ params }) {
  const post = blogContent[params.slug];

  if (!post) return <p className="p-10">Post not found.</p>;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-500 mb-6">{new Date(post.date).toDateString()}</p>
      <div className="prose prose-lg">
        {post.content.split("\n").map((line, i) => (
          <p key={i}>{line.trim()}</p>
        ))}
      </div>
    </div>
  );
}
