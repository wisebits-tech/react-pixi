import React from 'react'
import { BitmapText, Text } from '../../docz-rp'
import { Loader } from '@pixi/loaders'
import { extensions } from '@pixi/extensions'
import { BitmapFontLoader } from '@pixi/text-bitmap'

extensions.add(BitmapFontLoader)

// eslint-disable-next-line react/display-name
export default props => {
  const [loaded, setLoaded] = React.useState(false)
  const x = props.x
  const y = props.y

  React.useEffect(() => {
    const loader = new Loader()

    loader.add('desyrel', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/bitmapfont.xml').load(() => {
      setLoaded(true)
    })

    return () => {
      loader.destroy()
    }
  }, [])

  return loaded ? (
    <BitmapText {...props} />
  ) : (
    <Text anchor={0.5} x={x} y={y} text="⌛ Loading font..." style={{ fontFamily: 'Arial', fontSize: 15 }} />
  )
}
