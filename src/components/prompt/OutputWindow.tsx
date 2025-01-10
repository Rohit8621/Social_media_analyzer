// import { motion, AnimatePresence } from 'framer-motion';
// import { Card } from '../ui/card';

// interface OutputWindowProps {
//   output: string | null;
// }

// export function OutputWindow({ output }: OutputWindowProps) {
//   return (
//     <AnimatePresence>
//       {output && (
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -20 }}
//           className="mt-8"
//         >
//           <Card className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 text-white p-8 shadow-xl">
//             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 animate-gradient" />
//             <div className="relative z-10">
//               <pre className="font-mono text-sm whitespace-pre-wrap break-words">
//                 {output}
//               </pre>
//             </div>
//             <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 pointer-events-none" />
//           </Card>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '../ui/card';

interface OutputWindowProps {
  output: string | null;
}

export function OutputWindow({ output }: OutputWindowProps) {
  return (
    <AnimatePresence>
      {output && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="mt-8"
        >
          <Card className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 text-white p-8 shadow-xl">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 animate-gradient" />
            <div className="relative z-10">
              <pre className="font-mono text-sm whitespace-pre-wrap break-words">
                {output}
              </pre>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 pointer-events-none" />
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  );
}