import { px, rem } from "../layout"
import { variableFontFamily } from "./fontFamily"
import { fontWeights } from "./fontWeight"
import { getTypeSize } from "./scale"

export const caption01 = {
  fontSize: rem(getTypeSize(0)),
  fontWeight: fontWeights.regular,
  lineHeight: 1.33333,
  letterSpacing: px(0.32),
}

export const caption02 = {
  fontSize: rem(getTypeSize(1)),
  fontWeight: fontWeights.regular,
  lineHeight: 1.28572,
  letterSpacing: px(0.32),
}

export const label01 = {
  fontSize: rem(getTypeSize(0)),
  fontWeight: fontWeights.regular,
  lineHeight: 1.33333,
  letterSpacing: px(0.32),
}

export const label02 = {
  fontSize: rem(getTypeSize(1)),
  fontWeight: fontWeights.regular,
  lineHeight: 1.28572,
  letterSpacing: px(0.16),
}

export const helperText01 = {
  fontSize: rem(getTypeSize(0)),
  lineHeight: 1.33333,
  letterSpacing: px(0.32),
}

export const helperText02 = {
  fontSize: rem(getTypeSize(1)),
  lineHeight: 1.28572,
  letterSpacing: px(0.16),
}

export const bodyShort01 = {
  fontSize: rem(getTypeSize(1)),
  fontWeight: fontWeights.regular,
  lineHeight: 1.28572,
  letterSpacing: px(0.16),
}

export const bodyLong01 = {
  fontSize: rem(getTypeSize(1)),
  fontWeight: fontWeights.regular,
  lineHeight: 1.42857,
  letterSpacing: px(0.16),
}

export const bodyShort02 = {
  fontSize: rem(getTypeSize(2)),
  fontWeight: fontWeights.regular,
  lineHeight: 1.375,
  letterSpacing: 0,
}

export const bodyLong02 = {
  fontSize: rem(getTypeSize(2)),
  fontWeight: fontWeights.regular,
  lineHeight: 1.5,
  letterSpacing: 0,
}
export const code01 = {
  fontFamily: variableFontFamily.mono,
  fontSize: rem(getTypeSize(0)),
  fontWeight: fontWeights.regular,
  lineHeight: 1.33333,
  letterSpacing: px(0.32),
}

export const code02 = {
  fontFamily: variableFontFamily.mono,
  fontSize: rem(getTypeSize(1)),
  fontWeight: fontWeights.regular,
  lineHeight: 1.42857,
  letterSpacing: px(0.32),
}

export const heading01 = {
  fontSize: rem(getTypeSize(1)),
  fontWeight: fontWeights.semibold,
  lineHeight: 1.42857,
  letterSpacing: px(0.16),
}

export const productiveHeading01 = {
  fontSize: rem(getTypeSize(1)),
  fontWeight: fontWeights.semibold,
  lineHeight: 1.28572,
  letterSpacing: px(0.16),
}

export const heading02 = {
  fontSize: rem(getTypeSize(2)),
  fontWeight: fontWeights.semibold,
  lineHeight: 1.5,
  letterSpacing: 0,
}

export const productiveHeading02 = {
  fontSize: rem(getTypeSize(2)),
  fontWeight: fontWeights.semibold,
  lineHeight: 1.375,
  letterSpacing: 0,
}

export const productiveHeading03 = {
  fontSize: rem(getTypeSize(4)),
  fontWeight: fontWeights.regular,
  lineHeight: 1.4,
  letterSpacing: 0,
}

export const productiveHeading04 = {
  fontSize: rem(getTypeSize(6)),
  fontWeight: fontWeights.regular,
  lineHeight: 1.28572,
  letterSpacing: 0,
}

export const productiveHeading05 = {
  fontSize: rem(getTypeSize(7)),
  fontWeight: fontWeights.regular,
  lineHeight: 1.25,
  letterSpacing: 0,
}

export const productiveHeading06 = {
  fontSize: rem(getTypeSize(9)),
  fontWeight: fontWeights.light,
  lineHeight: 1.199,
  letterSpacing: 0,
}

export const productiveHeading07 = {
  fontSize: rem(getTypeSize(11)),
  fontWeight: fontWeights.light,
  lineHeight: 1.199,
  letterSpacing: 0,
}

export const expressiveHeading01 = {
  ...heading01,
  lineHeight: 1.25,
}

export const expressiveHeading02 = {
  ...heading02,
  lineHeight: 1.5,
}

export const expressiveHeading03 = {
  fontSize: rem(getTypeSize(4)),
  fontWeight: fontWeights.regular,
  lineHeight: 1.4,
  letterSpacing: 0,
  breakpoints: {
    xlg: {
      fontSize: rem(getTypeSize(4)),
      lineHeight: 1.4,
    },
    max: {
      fontSize: rem(getTypeSize(5)),
      lineHeight: 1.334,
    },
  },
}

export const expressiveHeading04 = {
  fontSize: rem(getTypeSize(6)),
  fontWeight: fontWeights.regular,
  lineHeight: 1.28572,
  letterSpacing: 0,
  breakpoints: {
    xlg: {
      fontSize: rem(getTypeSize(7)),
      fontWeight: fontWeights.regular,
      lineHeight: 1.25,
    },
    max: {
      fontSize: rem(getTypeSize(7)),
      fontWeight: fontWeights.regular,
    },
  },
}

export const expressiveHeading05 = {
  fontSize: rem(getTypeSize(7)),
  fontWeight: fontWeights.regular,
  lineHeight: 1.25,
  letterSpacing: 0,
  breakpoints: {
    md: {
      fontSize: rem(getTypeSize(8)),
      fontWeight: fontWeights.light,
      lineHeight: 1.22,
      letterSpacing: 0,
    },
    lg: {
      fontSize: rem(getTypeSize(9)),
      lineHeight: 1.19,
      letterSpacing: 0,
    },
    xlg: {
      fontSize: rem(getTypeSize(10)),
      lineHeight: 1.17,
      letterSpacing: 0,
    },
    max: {
      fontSize: rem(getTypeSize(12)),
      letterSpacing: 0,
    },
  },
}

export const expressiveHeading06 = {
  fontSize: rem(getTypeSize(7)),
  fontWeight: fontWeights.semibold,
  lineHeight: 1.25,
  letterSpacing: 0,
  breakpoints: {
    md: {
      fontSize: rem(getTypeSize(8)),
      fontWeight: fontWeights.semibold,
      lineHeight: 1.22,
      letterSpacing: 0,
    },
    lg: {
      fontSize: rem(getTypeSize(9)),
      fontWeight: fontWeights.semibold,
      lineHeight: 1.19,
      letterSpacing: 0,
    },
    xlg: {
      fontSize: rem(getTypeSize(10)),
      fontWeight: fontWeights.semibold,
      lineHeight: 1.17,
      letterSpacing: 0,
    },
    max: {
      fontSize: rem(getTypeSize(12)),
      fontWeight: fontWeights.semibold,
      letterSpacing: 0,
    },
  },
}

export const expressiveParagraph01 = {
  fontSize: rem(getTypeSize(5)),
  fontWeight: fontWeights.light,
  lineHeight: 1.334,
  letterSpacing: 0,
  breakpoints: {
    lg: {
      fontSize: rem(getTypeSize(6)),
      lineHeight: 1.28572,
    },
    max: {
      fontSize: rem(getTypeSize(7)),
      lineHeight: 1.25,
    },
  },
}

export const quotation01 = {
  fontFamily: variableFontFamily.serif,
  fontSize: rem(getTypeSize(4)),
  fontWeight: fontWeights.regular,
  lineHeight: 1.3,
  letterSpacing: 0,
  breakpoints: {
    md: {
      fontSize: rem(getTypeSize(4)),
      fontWeight: fontWeights.regular,
      letterSpacing: 0,
    },
    lg: {
      fontSize: rem(getTypeSize(5)),
      fontWeight: fontWeights.regular,
      lineHeight: 1.334,
      letterSpacing: 0,
    },
    xlg: {
      fontSize: rem(getTypeSize(6)),
      fontWeight: fontWeights.regular,
      lineHeight: 1.28572,
      letterSpacing: 0,
    },
    max: {
      fontSize: rem(getTypeSize(7)),
      fontWeight: fontWeights.regular,
      lineHeight: 1.25,
      letterSpacing: 0,
    },
  },
}

export const quotation02 = {
  fontFamily: variableFontFamily.serif,
  fontSize: rem(getTypeSize(7)),
  fontWeight: fontWeights.light,
  lineHeight: 1.25,
  letterSpacing: 0,
  breakpoints: {
    md: {
      fontSize: rem(getTypeSize(8)),
      lineHeight: 1.22,
    },
    lg: {
      fontSize: rem(getTypeSize(9)),
      lineHeight: 1.19,
    },
    xlg: {
      fontSize: rem(getTypeSize(10)),
      lineHeight: 1.17,
    },
    max: {
      fontSize: rem(getTypeSize(12)),
    },
  },
}

export const display01 = {
  fontSize: rem(getTypeSize(9)),
  fontWeight: fontWeights.light,
  lineHeight: 1.19,
  letterSpacing: 0,
  breakpoints: {
    md: {
      fontSize: rem(getTypeSize(9)),
    },
    lg: {
      fontSize: rem(getTypeSize(11)),
    },
    xlg: {
      fontSize: rem(getTypeSize(12)),
      lineHeight: 1.17,
    },
    max: {
      fontSize: rem(getTypeSize(14)),
      lineHeight: 1.13,
    },
  },
}

export const display02 = {
  fontSize: rem(getTypeSize(9)),
  fontWeight: fontWeights.semibold,
  lineHeight: 1.19,
  letterSpacing: 0,
  breakpoints: {
    md: {
      fontSize: rem(getTypeSize(9)),
    },
    lg: {
      fontSize: rem(getTypeSize(11)),
    },
    xlg: {
      fontSize: rem(getTypeSize(12)),
      lineHeight: 1.16,
    },
    max: {
      fontSize: rem(getTypeSize(14)),
      lineHeight: 1.13,
    },
  },
}

export const display03 = {
  fontSize: rem(getTypeSize(9)),
  fontWeight: fontWeights.light,
  lineHeight: 1.19,
  letterSpacing: 0,
  breakpoints: {
    md: {
      fontSize: rem(getTypeSize(11)),
      lineHeight: 1.18,
    },
    lg: {
      fontSize: rem(getTypeSize(12)),
      lineHeight: 1.16,
      letterSpacing: px(-0.64),
    },
    xlg: {
      fontSize: rem(getTypeSize(14)),
      lineHeight: 1.13,
    },
    max: {
      fontSize: rem(getTypeSize(15)),
      lineHeight: 1.11,
      letterSpacing: px(-0.96),
    },
  },
}

export const display04 = {
  fontSize: rem(getTypeSize(9)),
  fontWeight: fontWeights.light,
  lineHeight: 1.19,
  letterSpacing: 0,
  breakpoints: {
    md: {
      fontSize: rem(getTypeSize(13)),
      lineHeight: 1.15,
    },
    lg: {
      fontSize: rem(getTypeSize(16)),
      lineHeight: 1.11,
      letterSpacing: px(-0.64),
    },
    xlg: {
      fontSize: rem(getTypeSize(19)),
      lineHeight: 1.07,
      letterSpacing: px(-0.64),
    },
    max: {
      fontSize: rem(getTypeSize(22)),
      lineHeight: 1.05,
      letterSpacing: px(-0.96),
    },
  },
}

// Type changes - V11

// Small styles
// No changes for code-01, code-02, label-01, label-02
export const legal01 = {
  fontSize: rem(getTypeSize(0)),
  fontWeight: fontWeights.regular,
  lineHeight: 1.33333,
  letterSpacing: px(0.32),
}

export const legal02 = {
  fontSize: rem(getTypeSize(1)),
  fontWeight: fontWeights.regular,
  lineHeight: 1.28572,
  letterSpacing: px(0.16),
}

// Body styles
export const bodyCompact01 = bodyShort01
export const bodyCompact02 = bodyShort02
export const body01 = bodyLong01
export const body02 = bodyLong02

// Fixed heading styles
export const headingCompact01 = productiveHeading01
export const headingCompact02 = productiveHeading02
export const heading03 = productiveHeading03
export const heading04 = productiveHeading04
export const heading05 = productiveHeading05
export const heading06 = productiveHeading06
export const heading07 = productiveHeading07

// Fluid heading styles
export const fluidHeading03 = expressiveHeading03
export const fluidHeading04 = expressiveHeading04
export const fluidHeading05 = expressiveHeading05
export const fluidHeading06 = expressiveHeading06

// Additional fluid styles
export const fluidParagraph01 = expressiveParagraph01
export const fluidQuotation01 = quotation01
export const fluidQuotation02 = quotation02
export const fluidDisplay01 = display01
export const fluidDisplay02 = display02
export const fluidDisplay03 = display03
export const fluidDisplay04 = display04
