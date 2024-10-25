"use client";

import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@radix-ui/react-dropdown-menu';
import { motion } from 'framer-motion';

export default function LanguageSelector() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button style={{ display: 'flex', alignItems: 'center' }}>
          English
          <span style={{ marginLeft: 8 }}>▼</span> {/* Ícone da seta */}
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent asChild>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <DropdownMenuItem onSelect={() => console.log('Selected English')}>English</DropdownMenuItem>
          <DropdownMenuItem onSelect={() => console.log('Selected Portuguese')}>Portuguese</DropdownMenuItem>
          <DropdownMenuItem onSelect={() => console.log('Selected Spanish')}>Spanish</DropdownMenuItem>
        </motion.div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
