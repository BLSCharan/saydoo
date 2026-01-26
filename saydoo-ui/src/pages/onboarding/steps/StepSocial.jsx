import { Instagram, Facebook, Linkedin} from "lucide-react";
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
      <Icon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
      <input
        type="url"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full pl-10 pr-4 py-3 bg-black/40 border border-white/10 rounded-lg outline-none text-white"
      />
    </div>
  );

  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8">

      <h2 className="text-2xl md:text-3xl font-bold text-white">
        Social Media Presence
      </h2>

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

      {/* Followers */}
      <div className="mt-8">
        <p className="text-sm text-gray-300 mb-4">Total followers</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {["instagram", "facebook", "linkedin", "snapchat"].map((p) => (
            <input
              key={p}
              type="number"
              placeholder={`${p} followers`}
              value={social.followers?.[p] || ""}
              onChange={(e) => updateFollowers(p, e.target.value)}
              className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg outline-none text-white"
            />
          ))}
        </div>
      </div>

    </div>
  );
}
