// import React from "react";
// import * as Select from "@radix-ui/react-select";
// import { LightBulbIcon } from "@heroicons/react/16/solid";

// type Language = "en" | "it";

// interface LanguagesSelectProps {
//   value: Language;
//   onChange: (value: Language) => void;
// }

// const languageData: Record<Language, { label: string; icon: React.ReactNode }> =
//   {
//     en: { label: "en", icon: <LightBulbIcon width={16} /> },
//     it: { label: "it", icon: <LightBulbIcon width={16} /> },
//   };

// export const LanguagesSelect: React.FC<LanguagesSelectProps> = ({
//   value,
//   onChange,
// }) => {
//   return (
//     <div className="flex flex-col max-w-60">
//       <Select.Root value={value} onValueChange={onChange}>
//         <Select.Trigger>
//           <span className="flex items-center gap-2">
//             {languageData[value]?.icon}
//             {languageData[value]?.label}
//           </span>
//         </Select.Trigger>
//         <Select.Content className="bg-white" position="popper">
//           {Object.entries(languageData).map(([key, { label }]) => (
//             <Select.Item key={key} value={key}>
//               {label}
//             </Select.Item>
//           ))}
//         </Select.Content>
//       </Select.Root>
//     </div>
//   );
// };
