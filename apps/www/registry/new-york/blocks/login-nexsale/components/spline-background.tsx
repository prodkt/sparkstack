"use client"

import React, { useEffect } from "react"

const BackgroundAnimation = () => {
  useEffect(() => {
    const script = document.createElement("script")
    script.type = "module"
    script.src = "https://unpkg.com/@splinetool/viewer/build/spline-viewer.js"
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div>
      <div
        dangerouslySetInnerHTML={{
          __html: `<spline-viewer
            url="https://prod.spline.design/cqUJoJ1IxHEw1NX1/scene.splinecode"
            style="width: 100%; height: 100vh;"
          ></spline-viewer>`,
        }}
      />
    </div>
  )
}

export default BackgroundAnimation
