import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart2, MessageSquare, TrendingUp, Lightbulb } from 'lucide-react';
import { PromptCard } from './PromptCard';
import { SearchBar } from './SearchBar';
import { OutputWindow } from './OutputWindow';
import { Card } from '../ui/card';

const prebuiltPrompts = [
  {
    icon: BarChart2,
    title: 'Top Post Types',
    description: 'Analyze the dataset and return the post type with the highest engagement.',
    prompt: 'Based on the current dataset:\n\nCarousel posts show the highest engagement rate at 4.2%, followed by Reels at 3.8% and static posts at 2.9%. Carousel posts consistently outperform other formats, generating 45% more likes and 60% more comments on average.',
  },
  {
    icon: MessageSquare,
    title: 'Engagement Insights',
    description: 'Generate insights comparing average likes, shares, and comments for each post type.',
    prompt: 'Engagement Analysis:\n\nCarousel Posts:\n- Avg. Likes: 1,200\n- Avg. Shares: 150\n- Avg. Comments: 85\n\nReels:\n- Avg. Likes: 950\n- Avg. Shares: 200\n- Avg. Comments: 65\n\nStatic Posts:\n- Avg. Likes: 750\n- Avg. Shares: 90\n- Avg. Comments: 45',
  },
  {
    icon: TrendingUp,
    title: 'Performance Trends',
    description: 'Identify the post type with the fastest-growing engagement over time.',
    prompt: 'Growth Analysis:\n\nReels show the highest growth rate in engagement:\n- Month 1: +15%\n- Month 2: +25%\n- Month 3: +40%\n\nThis represents a 2.5x faster growth rate compared to other post types, suggesting a strong preference for video content.',
  },
  {
    icon: Lightbulb,
    title: 'Optimization Tips',
    description: 'Provide three strategies to improve engagement based on current data trends.',
    prompt: 'Optimization Strategies:\n\n1. Content Mix Optimization\n- Increase carousel posts to 40% of content mix\n- Focus on 4-5 slides per carousel\n- Include a mix of educational and entertaining content\n\n2. Timing Enhancement\n- Post during peak engagement hours (9-11 AM, 7-9 PM)\n- Maintain consistent posting schedule\n- Test different days for different content types\n\n3. Engagement Triggers\n- Include clear calls-to-action in first slide/frame\n- Use carousel posts for step-by-step guides\n- Implement storytelling format in Reels',
  },
];

export function PromptSection() {
  const [activePromptIndex, setActivePromptIndex] = useState<number | null>(null);
  const [output, setOutput] = useState<string | null>(null);
  const outputRef = useRef<HTMLDivElement>(null);

  const scrollToOutput = () => {
    outputRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const handlePromptClick = (index: number) => {
    setActivePromptIndex(index);
    setOutput(prebuiltPrompts[index].prompt);
    setTimeout(scrollToOutput, 100);
  };

  const handleCustomPrompt = (prompt: string) => {
    setActivePromptIndex(null);
    setOutput(`Custom Analysis for: "${prompt}"\n\nAnalyzing your request...\n\nBased on the available data, here are the key insights:\n\n1. Content Performance\n- Your content shows strong engagement patterns\n- Recent posts have achieved above-average interaction rates\n- User sentiment is predominantly positive\n\n2. Growth Opportunities\n- Consider increasing post frequency during peak hours\n- Experiment with more video content\n- Engage more with user comments to boost visibility\n\n3. Recommendations\n- Implement A/B testing for content types\n- Develop a consistent brand voice\n- Focus on community building through interactive content`);
    setTimeout(scrollToOutput, 100);
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            AI-Powered Analysis
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Get instant insights and optimization suggestions for your social media strategy
          </p>
        </motion.div>

        <div className="flex flex-col items-center space-y-8">
          {/* Centered Prompt Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl mx-auto">
            {prebuiltPrompts.map((prompt, index) => (
              <PromptCard
                key={index}
                icon={prompt.icon}
                title={prompt.title}
                description={prompt.description}
                onClick={() => handlePromptClick(index)}
                isActive={activePromptIndex === index}
              />
            ))}
          </div>

          {/* Centered Search Bar */}
          <div className="w-full max-w-2xl mx-auto mt-8">
            <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-purple-100 dark:border-purple-900">
              <SearchBar onSubmit={handleCustomPrompt} />
            </Card>
          </div>
        </div>

        <div ref={outputRef}>
          <OutputWindow output={output} />
        </div>
      </div>
    </section>
  );
}