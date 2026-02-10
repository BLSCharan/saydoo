import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const cardsData = [
	{
		id: 1,
		title: "AI Chat Assistant",
		description: "Let people talk to you 24×7",
		icon: "💬",
	},
	{
		id: 2,
		title: "Instant Responses",
		description: "Get replies from your AI clone anytime",
		icon: "⚡",
	},
	{
		id: 3,
		title: "Smart Learning",
		description: "AI learns your style and preferences",
		icon: "🧠",
	},
	{
		id: 4,
		title: "Always Available",
		description: "24/7 support without any breaks",
		icon: "🕐",
	},
	{
		id: 5,
		title: "Secure & Private",
		description: "Your data is encrypted and protected",
		icon: "🔒",
	},
	{
		id: 6,
		title: "Multi-language",
		description: "Communicate in your preferred language",
		icon: "🌐",
	},
	{
		id: 7,
		title: "Easy Integration",
		description: "Works with all your favorite platforms",
		icon: "🔗",
	},
	{
		id: 8,
		title: "Analytics & Insights",
		description: "Track conversations and engagement",
		icon: "📊",
	},
	{
		id: 9,
		title: "AI Chat Assistant",
		description: "Let people talk to you 24×7",
		icon: "💬",
	},
	{
		id: 10,
		title: "Instant Responses",
		description: "Get replies from your AI clone anytime",
		icon: "⚡",
	},
	{
		id: 11,
		title: "Smart Learning",
		description: "AI learns your style and preferences",
		icon: "🧠",
	},
	{
		id: 12,
		title: "Always Available",
		description: "24/7 support without any breaks",
		icon: "🕐",
	},
];

export default function ScrollingCards() {
	const containerRef = useRef(null);
	const [scrollY, setScrollY] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			if (containerRef.current) {
				const rect = containerRef.current.getBoundingClientRect();
				const scrollProgress =
					(window.innerHeight - rect.top) / (window.innerHeight + rect.height);
				setScrollY(Math.max(0, Math.min(scrollProgress, 1)));
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Split cards into rows (6 per row for continuous scrolling)
	const row1 = cardsData.slice(0, 6);
	const row2 = cardsData.slice(6, 12);

	return (
		<section
			ref={containerRef}
			className="w-full py-20 bg-white overflow-x-hidden"
		>
			<div className="w-full px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<div className="text-center mb-16 mx-auto max-w-7xl">
					<h2 className="text-3xl md:text-5xl font-bold text-blue-600 mb-4">
						Where creators thrive and brands trust
					</h2>
					
				</div>

				{/* Row 1 - Scrolls Right */}
				<div className="mb-8 overflow-hidden w-full">
					<motion.div
						className="flex gap-4 justify-start"
						style={{
							x: scrollY * 150, // Moves right as you scroll down
						}}
						transition={{ type: "spring", stiffness: 400, damping: 90 }}
					>
						{row1.map((card) => (
							<CardItem key={card.id} card={card} />
						))}
					</motion.div>
				</div>

				{/* Row 2 - Scrolls Left */}
				<div className="overflow-hidden w-full">
					<motion.div
						className="flex gap-4 justify-start"
						style={{
							x: scrollY * -150, // Moves left as you scroll down
						}}
						transition={{ type: "spring", stiffness: 400, damping: 90 }}
					>
						{row2.map((card) => (
							<CardItem key={card.id} card={card} />
						))}
					</motion.div>
				</div>
			</div>
		</section>
	);
}

function CardItem({ card }) {
	return (
		<motion.div
			className="flex-shrink-0 w-72 sm:w-80 h-48"
			whileHover={{ y: -8 }}
			transition={{ duration: 0.3 }}
		>
			<div
				className={`h-full rounded-2xl p-6 bg-white border-2 border-blue-400 text-black shadow-md hover:shadow-xl hover:border-blue-600 transition-all duration-300 cursor-pointer group flex flex-col justify-between`}
			>
				<div>
					<div className="text-4xl mb-4">{card.icon}</div>
					<h3 className="text-lg font-bold mb-2 text-black group-hover:text-blue-600 transition-colors">
						{card.title}
					</h3>
					<p className="text-gray-700 text-sm leading-relaxed group-hover:text-gray-900 transition-colors">
						{card.description}
					</p>
				</div>
			</div>
		</motion.div>
	);
}
