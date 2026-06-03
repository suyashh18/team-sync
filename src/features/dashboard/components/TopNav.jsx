import { Bell, Lightbulb, Menu, Moon, Search } from 'lucide-react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { themeSlice, toggleTheme } from '../../../shared/state/ThemeSlice.jsx'

const TopNav = () => {
    const dispatch = useDispatch()
    function handleThemeChange(){
        dispatch(toggleTheme())
    }

    const{mode} = useSelector((store)=> store.theme)
  return (
     <div className="flex justify-between bg-[--bg-card] items-center">
      <div className="flex gap-4 items-center w-[30%] rounded px-3 py-2 bg-[var(--bg-surface)] border border-gray-600">
        <Search size={23} />
        <input
          className="outline-0 w-full text-[var(--text-primary)]"
          type="text"
          placeholder="Search workspace.."
        />
      </div>
      <div className="flex gap-4 cursor-pointer">
        {mode === "light" ? (
          <Moon onClick={handleThemeChange} size={23} />
        ) : (
          <Lightbulb onClick={handleThemeChange} size={23} />
        )}

        <Bell size={23} />
        <Menu size={23} />
      </div>
    </div>
  )
}

export default TopNav
