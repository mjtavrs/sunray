'use client'

import { useState } from 'react'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@radix-ui/react-dropdown-menu'
import { motion } from 'framer-motion'
import { CaretDown } from '@phosphor-icons/react/dist/ssr'

type Language = {
  label: string
  code: string
  flag: string
}

export default function LanguageSelector() {
  const [selectedLanguage, setSelectedLanguage] = useState<string>('English')

  const languages: Language[] = [
    {
      label: 'English',
      code: 'gb',
      flag: 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.6/flags/4x3/gb.svg',
    },
    {
      label: 'Portuguese',
      code: 'pt',
      flag: 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.6/flags/4x3/br.svg',
    },
    {
      label: 'Spanish',
      code: 'es',
      flag: 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.6/flags/4x3/es.svg',
    },
  ]

  const handleSelectLanguage = (language: Language) => {
    setSelectedLanguage(language.label)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center">
          <img
            src={
              languages.find((lang) => lang.label === selectedLanguage)?.flag ||
              ''
            }
            alt={selectedLanguage}
            className="mr-2 h-5 w-5"
          />
          {selectedLanguage}
          <span className="ml-2">
            <CaretDown />
          </span>
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent asChild>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="mt-1 divide-y divide-solid divide-stone-400 rounded-sm bg-gray-100 p-2"
        >
          {languages
            .filter((lang) => lang.label !== selectedLanguage)
            .map((language) => (
              <DropdownMenuItem
                key={language.code}
                onSelect={() => handleSelectLanguage(language)}
                className="flex cursor-pointer items-center px-2"
              >
                <img
                  src={language.flag}
                  alt={language.label}
                  className="my-2 mr-2 h-5 w-5"
                />
                {language.label}
              </DropdownMenuItem>
            ))}
        </motion.div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
