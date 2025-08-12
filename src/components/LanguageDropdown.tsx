// LanguageDropdown.tsx
import { useState } from 'react'
import dropdownArrow from '../assets/icons/dropdown.svg'

// Language type define kiya for type safety
interface Language {
  name: string
  code: string
  flag: string
}

const LanguageDropdown: React.FC = () => {
  // Available languages list
  const languages: Language[] = [
    { name: 'English', code: 'en', flag: 'https://flagcdn.com/gb.svg' },
    { name: 'Spanish (Coming soon)', code: 'es', flag: 'https://flagcdn.com/es.svg' },
    { name: 'French (Coming soon)', code: 'fr', flag: 'https://flagcdn.com/fr.svg' }
  ]

  // Dropdown open/close state
  const [open, setOpen] = useState<boolean>(false)

  // Currently selected language
  const [selected, setSelected] = useState<Language>(languages[0])

  // Language select hone par state update karega
  const handleSelect = (lang: Language): void => {
    setSelected(lang)
    setOpen(false)
    console.log(`Switched to ${lang.code}`)
    // TODO: Yahan i18n language change logic add kar sakte ho
  }

  return (
    <div
      className="lang-dropdown-wrapper"
      onMouseLeave={() => setOpen(false)}
      onMouseEnter={() => setOpen(true)}
    >
      {/* Selected language display */}
      <button
        onClick={() => setOpen(!open)}
        className="lang-dropdown-button"
      >
        <img
          src={selected.flag}
          alt={`${selected.name} flag`}
          className="lang-flag-icon"
        />
        {selected.name}
        <img
          src={dropdownArrow}
          alt="Dropdown arrow"
          className="dropdownArrow"
        />
      </button>

      {/* Dropdown menu */}
      {open && (
        <div className="lang-dropdown-menu">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleSelect(lang)}
              className="lang-dropdown-item"
            >
              <img
                src={lang.flag}
                alt={`${lang.name} flag`}
                className="lang-flag-icon"
              />
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default LanguageDropdown
