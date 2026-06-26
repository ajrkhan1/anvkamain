// components/ProtectedContent.jsx
'use client'

import { useEffect } from 'react'
import styles from './ProtectedContent.module.css'

export default function ProtectedContent({ children }) {
  useEffect(() => {
    // Right-click disable
    const handleContextMenu = (e) => e.preventDefault()
    
    // Keyboard shortcuts disable (Ctrl+S, Ctrl+U, Ctrl+A, F12, etc.)
    const handleKeyDown = (e) => {
      if (
        (e.ctrlKey && ['s', 'u', 'a', 'c', 'p'].includes(e.key.toLowerCase())) ||
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && ['i', 'j', 'c'].includes(e.key.toLowerCase()))
      ) {
        e.preventDefault()
      }
    }

    document.addEventListener('contextmenu', handleContextMenu)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <div className={styles.protected}>
      {children}
    </div>
  )
}