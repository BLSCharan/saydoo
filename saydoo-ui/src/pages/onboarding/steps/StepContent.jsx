export default function StepContent({ data, setData }) {
  const content = data?.content || { links: [] };
  const links = Array.isArray(content.links) ? content.links : [];

  const updateContent = (links) => {
    setData({
      ...data,
      content: { links },
    });
  };

  const addLink = () => {
    updateContent([...links, ""]);
  };

  const updateLink = (index, value) => {
    const updated = [...links];
    updated[index] = value;
    updateContent(updated);
  };

  const removeLink = (index) => {
    const updated = links.filter((_, i) => i !== index);
    updateContent(updated);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm">

      {/* TITLE */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
        Best Content Showcase
      </h2>
      <p className="mt-2 text-gray-500 text-sm md:text-base">
        Share links to your top performing posts or reels
      </p>

      {/* CONTENT LINKS */}
      <div className="mt-6 space-y-4">
        {links.map((link, index) => (
          <div key={index} className="flex items-center gap-3">
            <input
              type="url"
              placeholder="Paste content link (Instagram, YouTube, etc.)"
              value={link}
              onChange={(e) => updateLink(index, e.target.value)}
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <button
              type="button"
              onClick={() => removeLink(index)}
              className="text-red-500 hover:text-red-600 font-bold text-lg"
            >
              ×
            </button>
          </div>
        ))}
      </div>

      {/* ADD BUTTON */}
      <button
        type="button"
        onClick={addLink}
        className="mt-6 text-sm font-medium text-indigo-600 hover:underline"
      >
        + Add another content link
      </button>

      {/* NOTE */}
      <p className="mt-4 text-xs text-gray-500">
        Tip: Add links with highest views, engagement, or shares
      </p>

    </div>
  );
}
