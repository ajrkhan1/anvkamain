'use client'
import { useState } from 'react'
import styles from './YoutubeSlider.module.css'

// Sirf YouTube video ID daalo (URL ka last part)
const videos = [
  { id: 'rNzhJQwYMW4', title: 'Video 1' },
  { id: '3Ohn8swWT6k', title: 'Video 2' },  
  { id: 'rNzhJQwYMW4', title: 'Video 4' },
  { id: '3Ohn8swWT6k', title: 'Video 3' },
  { id: 'rNzhJQwYMW4', title: 'Video 5' },
]

const POS = ['farLeft', 'left', 'center', 'right', 'farRight']

export default function YoutubeSlider() {
  const [cur, setCur] = useState(2)
  const [animating, setAnimating] = useState(false)
  const n = videos.length

  const goTo = (idx) => {
    if (animating) return
    setAnimating(true)
    setCur((idx + n) % n)
    setTimeout(() => setAnimating(false), 650)
  }

  const getPos = (i) => {
    const pi = POS.findIndex((_, pi) => (cur + pi - 2 + n * 100) % n === i)
    return pi === -1 ? 'hidden' : POS[pi]
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.track}>
        {videos.map((v, i) => {
          const pos = getPos(i)
          return (
            <div
              key={v.id}
              className={`${styles.slide} ${styles[pos]}`}
              onClick={() => {
                if (pos === 'left' || pos === 'farLeft') goTo(cur - 1)
                if (pos === 'right' || pos === 'farRight') goTo(cur + 1)
              }}
            >
             <iframe
                  src={`https://www.youtube.com/embed/${v.id}?autoplay=1&mute=1&loop=1&playlist=${v.id}`}
                  title={v.title}
                  height="400"
                  width="100%"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
            </div>
          )
        })}

        <button className={`${styles.navBtn} ${styles.navLeft}`} onClick={() => goTo(cur - 1)}>
            <div class="sw-button style-2 nav-prev-layout" tabindex="0" role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-61515b32d235d38e">
                <i class="icon-CaretLeft"></i>
            </div>
        </button>
        <button className={`${styles.navBtn} ${styles.navRight}`} onClick={() => goTo(cur + 1)}>
            <div class="sw-button style-2 nav-next-layout" tabindex="0" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-61515b32d235d38e">
                <i class="icon-CaretRight"></i>
            </div>
        </button>
      </div>

      {/* <div className={styles.dots}>
        {videos.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === cur ? styles.active : ''}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div> */}
    </div>
  )
}