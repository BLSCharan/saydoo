import { Instagram, Facebook, Linkedin } from "lucide-react";
import { FaSnapchatGhost } from "react-icons/fa";

export default function StepSocial({ data, setData }) {
  const social = data?.social || {};

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
      </div>

      {/* FOLLOWERS */}
      <div className="mt-8">
        <p className="text-sm font-medium text-gray-700 mb-3">
          Total followers on each platform
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {["instagram", "facebook", "linkedin", "snapchat"].map((p) => (
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

    </div>
  );
}
