import { useState, useRef, useEffect } from "react";
import { ChevronDown, X } from "lucide-react";

export default function StepBasic({ data, setData }) {
  const { basicProfile } = data;
  const [openDropdown, setOpenDropdown] = useState(null);
  const [searchNiche, setSearchNiche] = useState("");
  const [searchLanguage, setSearchLanguage] = useState("");
  const dropdownRef = useRef(null);

  const niches = [
    "Fashion",
    "Technology",
    "Fitness",
    "Education",
    "Gaming",
    "Travel",
    "Finance",
    "Food",
    "Beauty",
    "Health",
    "Lifestyle",
    "Sports",
    "Music",
    "Art",
    "Other",
  ];

  const languages = [
    "English",
    "Hindi",
    "Telugu",
    "Tamil",
    "Kannada",
    "Malayalam",
    "Marathi",
    "Gujarati",
    "Punjabi",
    "French",
    "Spanish",
    "German",
    "Other",
  ];

  const selectedNiches = Array.isArray(basicProfile.niche)
    ? basicProfile.niche
    : basicProfile.niche
    ? [basicProfile.niche]
    : [];
  const selectedLanguages = Array.isArray(basicProfile.language)
    ? basicProfile.language
    : basicProfile.language
    ? [basicProfile.language]
    : [];

  const filteredNiches = niches.filter((niche) =>
    niche.toLowerCase().includes(searchNiche.toLowerCase())
  );

  const filteredLanguages = languages.filter((lang) =>
    lang.toLowerCase().includes(searchLanguage.toLowerCase())
  );

  const toggleNiche = (niche) => {
    const updated = selectedNiches.includes(niche)
      ? selectedNiches.filter((n) => n !== niche)
      : [...selectedNiches, niche];
    setData({
      ...data,
      basicProfile: { ...basicProfile, niche: updated },
    });
  };

  const toggleLanguage = (language) => {
    const updated = selectedLanguages.includes(language)
      ? selectedLanguages.filter((l) => l !== language)
      : [...selectedLanguages, language];
    setData({
      ...data,
      basicProfile: { ...basicProfile, language: updated },
    });
  };

  const removeNiche = (niche, e) => {
    e.stopPropagation();
    toggleNiche(niche);
  };

  const removeLanguage = (language, e) => {
    e.stopPropagation();
    toggleLanguage(language);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const MultiSelectDropdown = ({
    label,
    selected,
    options,
    searchValue,
    onSearchChange,
    onToggle,
    onRemove,
    isOpen,
    onToggleOpen,
    filteredOptions,
  }) => (
    <div className="mt-5 relative">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <button
        type="button"
        onClick={onToggleOpen}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 text-left bg-white flex items-center justify-between"
      >
        <span className="text-gray-600">
          {selected.length === 0
            ? "Select options..."
            : `${selected.length} selected`}
        </span>
        <ChevronDown
          size={18}
          className={`transition ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {/* Selected Items */}
      {selected.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-2">
          {selected.map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm"
            >
              <span>{item}</span>
              <button
                type="button"
                onClick={(e) => onRemove(item, e)}
                className="hover:text-indigo-900"
              >
                <X size={14} />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg z-50">
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search..."
            value={searchValue}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full px-4 py-2 border-b border-gray-200 outline-none focus:ring-2 focus:ring-indigo-500"
          />

          {/* Options List */}
          <div className="max-h-48 overflow-y-auto">
            {filteredOptions.length === 0 ? (
              <div className="px-4 py-3 text-gray-500 text-sm">
                No options found
              </div>
            ) : (
              filteredOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => onToggle(option)}
                  className={`w-full text-left px-4 py-3 hover:bg-indigo-50 transition flex items-center gap-3 ${
                    selected.includes(option)
                      ? "bg-indigo-50 text-indigo-600 font-medium"
                      : "text-gray-700"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={selected.includes(option)}
                    readOnly
                    className="w-4 h-4 accent-indigo-600 cursor-pointer"
                  />
                  <span>{option}</span>
                </button>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm">

      {/* TITLE */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
        Basic Profile
      </h2>
      <p className="mt-2 text-gray-500 text-sm md:text-base">
        Tell us about yourself so we can personalize your AI clone
      </p>

      {/* FULL NAME */}
      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Full Name
        </label>
        <input
          type="text"
          placeholder="Enter your full name"
          value={basicProfile.fullName}
          onChange={(e) =>
            setData({
              ...data,
              basicProfile: {
                ...basicProfile,
                fullName: e.target.value,
              },
            })
          }
          className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* NICHE */}
      <MultiSelectDropdown
        label="Primary Niche / Content Category (Select Multiple)"
        selected={selectedNiches}
        options={niches}
        searchValue={searchNiche}
        onSearchChange={setSearchNiche}
        onToggle={toggleNiche}
        onRemove={removeNiche}
        isOpen={openDropdown === "niche"}
        onToggleOpen={() =>
          setOpenDropdown(openDropdown === "niche" ? null : "niche")
        }
        filteredOptions={filteredNiches}
      />

      {/* LANGUAGE */}
      <MultiSelectDropdown
        label="Content Language (Select Multiple)"
        selected={selectedLanguages}
        options={languages}
        searchValue={searchLanguage}
        onSearchChange={setSearchLanguage}
        onToggle={toggleLanguage}
        onRemove={removeLanguage}
        isOpen={openDropdown === "language"}
        onToggleOpen={() =>
          setOpenDropdown(openDropdown === "language" ? null : "language")
        }
        filteredOptions={filteredLanguages}
      />

      {/* COLLAB OPEN */}
      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Are you open to collaborations from all locations?
        </label>

        <div className="flex gap-4">
          <button
            type="button"
            onClick={() =>
              setData({
                ...data,
                basicProfile: {
                  ...basicProfile,
                  openToCollab: "yes",
                },
              })
            }
            className={`flex-1 py-3 rounded-lg border transition ${
              basicProfile.openToCollab === "yes"
                ? "border-indigo-600 bg-indigo-50 text-indigo-600"
                : "border-gray-300 text-gray-600 hover:bg-gray-50"
            }`}
          >
            Yes
          </button>

          <button
            type="button"
            onClick={() =>
              setData({
                ...data,
                basicProfile: {
                  ...basicProfile,
                  openToCollab: "no",
                },
              })
            }
            className={`flex-1 py-3 rounded-lg border transition ${
              basicProfile.openToCollab === "no"
                ? "border-indigo-600 bg-indigo-50 text-indigo-600"
                : "border-gray-300 text-gray-600 hover:bg-gray-50"
            }`}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}
