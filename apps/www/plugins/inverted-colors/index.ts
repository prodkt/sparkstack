import plugin from "tailwindcss/plugin"

// addVariant('optional', '&:optional')
// addVariant('hocus', ['&:hover', '&:focus'])

export default plugin(({ addVariant }) => {
  addVariant("inverted-colors", "@media (inverted-colors: inverted)")
  addVariant("group-inverted-colors", ":merge(.group):inverted-colors &")
  addVariant("peer-inverted-colors", ":merge(.peer):inverted-colors ~ &")
})
