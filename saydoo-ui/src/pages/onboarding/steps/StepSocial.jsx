import { Instagram, Facebook, Linkedin, Send, Globe, Play, Heart, Link2 } from "lucide-react";
import { FaSnapchatGhost } from "react-icons/fa";

export default function StepSocial({ data, setData }) {
  const social = data?.social || {};
  const customLinks = Array.isArray(social.customLinks) ? social.customLinks : [];

  const updateSocial = (key, value) => {
    setData({
      ...data,
      social: { ...social, [key]: value },
    });
  };

  const updateFollowers = (platform, value) => {
    setData({
      ...data,
      social: {
        ...social,
        followers: {
          ...(social.followers || {}),
          [platform]: value,
        },
      },
    });
  };

  const updateCustomLinks = (links) => {
    setData({
      ...data,
      social: { ...social, customLinks: links },
    });
  };

  const addCustomLink = () => {
    updateCustomLinks([...customLinks, { name: "", url: "" }]);
  };

  const updateCustomLink = (index, field, value) => {
    const updated = [...customLinks];
    updated[index] = { ...updated[index], [field]: value };
    updateCustomLinks(updated);
  };

  const removeCustomLink = (index) => {
    const updated = customLinks.filter((_, i) => i !== index);
    updateCustomLinks(updated);
  };

  const getIconForLinkName = (name) => {
    const lowerName = (name || "").toLowerCase().trim();
    
    const iconMap = {
      youtube: Play,
      portfolio: Globe,
      wishlink: Heart,
      website: Globe,
      blog: Globe,
      tiktok: Play,
      twitter: Send,
      x: Send,
    };
    
    return iconMap[lowerName] || Link2;
  };

  const updateCustomLinkFollowers = (index, value) => {
    const updated = [...customLinks];
    updated[index] = { ...updated[index], followers: value };
    updateCustomLinks(updated);
  };

  const InputWithIcon = ({ icon: Icon, placeholder, value, onChange }) => (
    <div className="relative">
      <Icon
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        size={18}
      />
      <input
        type="url"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>
  );

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm">

      {/* TITLE */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
        Social Media Presence
      </h2>
      <p className="mt-2 text-gray-500 text-sm">
        Share your social profiles and engagement details
      </p>

      {/* SOCIAL LINKS */}
      <div className="mt-6 space-y-4">

        <InputWithIcon
          icon={Instagram}
          placeholder="Instagram Profile Link"
          value={social.instagram || ""}
          onChange={(e) => updateSocial("instagram", e.target.value)}
        />

        <InputWithIcon
          icon={Facebook}
          placeholder="Facebook Profile Link"
          value={social.facebook || ""}
          onChange={(e) => updateSocial("facebook", e.target.value)}
        />

        <InputWithIcon
          icon={Linkedin}
          placeholder="LinkedIn Profile Link"
          value={social.linkedin || ""}
          onChange={(e) => updateSocial("linkedin", e.target.value)}
        />

        <InputWithIcon
          icon={FaSnapchatGhost}
          placeholder="Snapchat Profile Link"
          value={social.snapchat || ""}
          onChange={(e) => updateSocial("snapchat", e.target.value)}
        />

        <InputWithIcon
          icon={Send}
          placeholder="Telegram Profile Link"
          value={social.telegram || ""}
          onChange={(e) => updateSocial("telegram", e.target.value)}
        />
      </div>

      {/* FOLLOWERS */}
      <div className="mt-8">
        <p className="text-sm font-medium text-gray-700 mb-3">
          Total followers on each platform
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {["instagram", "facebook", "linkedin", "snapchat", "telegram"].map((p) => (
            <input
              key={p}
              type="number"
              placeholder={`${p.charAt(0).toUpperCase() + p.slice(1)} followers`}
              value={social.followers?.[p] || ""}
              onChange={(e) => updateFollowers(p, e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
            />
          ))}
        </div>
      </div>

      {/* CUSTOM LINKS */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Other Links</h3>
        <p className="text-sm text-gray-600 mb-4">Add custom links like YouTube, Portfolio, Wishlink, etc.</p>
        
        {/* Custom Links Input Section */}
        <div className="space-y-4 mb-6">
          {customLinks.map((link, index) => {
            const IconComponent = getIconForLinkName(link.name);
            return (
              <div key={index}>
                <div className="flex gap-2 items-start">
                  <input
                    type="text"
                    placeholder="Link name (e.g., YouTube, Portfolio, Wishlink)"
                    value={link.name || ""}
                    onChange={(e) => updateCustomLink(index, "name", e.target.value)}
                    className="w-24 px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                  />
                  <input
                    type="url"
                    placeholder="Link URL"
                    value={link.url || ""}
                    onChange={(e) => updateCustomLink(index, "url", e.target.value)}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <button
                    type="button"
                    onClick={() => removeCustomLink(index)}
                    className="text-red-500 hover:text-red-600 font-bold text-lg px-3 py-3"
                  >
                    ×
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Add Custom Link Button */}
        <button
          type="button"
          onClick={addCustomLink}
          className="w-full mb-6 px-4 py-3 border-2 border-dashed border-indigo-300 rounded-lg text-indigo-600 font-medium hover:bg-indigo-50 transition"
        >
          + Add Custom Link
        </button>

        {/* Custom Links Display Cards */}
        {customLinks.length > 0 && (
          <div>
            <p className="text-sm font-medium text-gray-700 mb-3">Custom Links Preview</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
              {customLinks.map((link, index) => {
                const IconComponent = getIconForLinkName(link.name);
                return (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                    <IconComponent size={24} className="text-indigo-600 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">{link.name || "Unnamed"}</p>
                      <p className="text-xs text-gray-500 truncate">{link.url || "No URL set"}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Custom Links Followers */}
            <p className="text-sm font-medium text-gray-700 mb-3">Followers on custom links</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {customLinks.map((link, index) => (
                link.name && (
                  <input
                    key={index}
                    type="number"
                    placeholder={`${link.name} followers`}
                    value={link.followers || ""}
                    onChange={(e) => updateCustomLinkFollowers(index, e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                )
              ))}
            </div>
          </div>
        )}
      </div>

    </div>
  );
}
