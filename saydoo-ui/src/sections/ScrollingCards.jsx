import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import card1 from "../assets/card1.jpeg";
import card2 from "../assets/card2.jpeg";

const cardsData = [
	{
		id: 1,
		title: "AI Chat Assistant",
		description: "Let people talk to you 24×7",
		image: card1,
	},
	{
		id: 2,
		title: "Instant Responses",
		description: "Get replies from your AI clone anytime",
		image: card1,
	},
	{
		id: 3,
		title: "Smart Learning",
		description: "AI learns your style and preferences",
		image: card1,
	},
	{
		id: 4,
		title: "Always Available",
		description: "24/7 support without any breaks",
		image: card1,
	},
	{
		id: 5,
		title: "Secure & Private",
		description: "Your data is encrypted and protected",
		image: card1,
	},
	{
		id: 6,
		title: "Multi-language",
		description: "Communicate in your preferred language",
		image: card1,
	},
	{
		id: 7,
		title: "Easy Integration",
		description: "Works with all your favorite platforms",
		image: card2,
	},
	{
		id: 8,
		title: "Analytics & Insights",
		description: "Track conversations and engagement",
		image: card2,
	},
	{
		id: 9,
		title: "AI Chat Assistant",
		description: "Let people talk to you 24×7",
		image: card2,
	},
	{
		id: 10,
		title: "Instant Responses",
		description: "Get replies from your AI clone anytime",
		image: card2,
	},
	{
		id: 11,
		title: "Smart Learning",
		description: "AI learns your style and preferences",
		image: card2,
	},
	{
		id: 12,
		title: "Always Available",
		description: "24/7 support without any breaks",
		image: card2,
	},
];

export default function ScrollingCards() {
	const containerRef = useRef(null);

	// Split cards into rows (6 per row for continuous scrolling)
	const row1 = cardsData.slice(0, 6);
	const row2 = cardsData.slice(6, 12);
	
	// Duplicate rows for continuous scrolling effect
	const row1Extended = [...row1, ...row1];
	const row2Extended = [...row2, ...row2];

	return (
		<section
			ref={containerRef}
			className="w-full py-20 bg-white overflow-x-hidden"
		>
			{/* Header */}
			<div className="w-full px-4 sm:px-6 lg:px-8 mb-16">
				<div className="text-center mx-auto max-w-7xl">
					<h2 className="text-3xl md:text-5xl font-bold text-blue-600 mb-4">
						Where creators thrive and brands trust
					</h2>
					
				</div>
			</div>

			{/* Row 1 - Scrolls Right */}
			<div className="mb-8 overflow-hidden w-full">
				<motion.div
					className="flex gap-4 justify-start"
					animate={{
						x: [-1500, 0],
					}}
					transition={{
						duration: 35,
						repeat: Infinity,
						ease: "linear",
					}}
				>
					{row1Extended.map((card, index) => (
						<CardItem key={`${card.id}-${index}`} card={card} />
					))}
				</motion.div>
			</div>

			{/* Row 2 - Scrolls Left */}
			<div className="overflow-hidden w-full">
				<motion.div
					className="flex gap-4 justify-start"
					animate={{
						x: [0, -1500],
					}}
					transition={{
						duration: 35,
						repeat: Infinity,
						ease: "linear",
					}}
				>
					{row2Extended.map((card, index) => (
						<CardItem key={`${card.id}-${index}`} card={card} />
					))}
				</motion.div>
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
				className={`h-full rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer`}
			>
				<img 
					src={card.image} 
					alt={card.title}
					className="w-full h-full object-cover"
				/>
			</div>
		</motion.div>
	);
}
