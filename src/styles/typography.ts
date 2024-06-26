const calcRem = (px: number) => `${px / 16}rem`;

const typography = {
  fontFamily: "Pretendard, Arial, sans-serif",
  /**
   * @description Pretendard Bold, Font Size: 24px
   */
  h1: {
    fontFamily: "Pretendard Bold",
    fontSize: calcRem(24),
    fontWeight: 700,
    lineHeight: 1.5,
    letterSpacing: "-0.03em",
  },
  /**
   * @description Pretendard Bold, Font Size: 18px
   */
  h2: {
    fontFamily: "Pretendard Bold",
    fontSize: calcRem(18),
    fontWeight: 700,
    lineHeight: 1.44,
    letterSpacing: "-0.03em",
  },
  /**
   * @description Pretendard Medium, Font Size: 16px
   */
  h3: {
    fontFamily: "Pretendard Medium",
    fontSize: calcRem(16),
    fontWeight: 700,
    lineHeight: 1.5,
    letterSpacing: "-0.03em",
  },
  /**
   * @description Pretendard Medium, Font Size: 14px
   */
  h4: {
    fontFamily: "Pretendard Medium",
    fontSize: calcRem(14),
    fontWeight: 700,
    lineHeight: 1.5,
    letterSpacing: "-0.03em",
  },
  /**
   * * @description Pretendard Medium, Font Size: 13px
   */
  h5: {
    fontFamily: "Pretendard Medium",
    fontSize: calcRem(13),
    fontWeight: 700,
    lineHeight: 1.5,
    letterSpacing: "-0.03em",
  },
  /**
   * @description Pretendard Regular, Font Size: 14px
   */
  body1: {
    fontFamily: "Pretendard Regular",
    fontSize: calcRem(14),
    lineHeight: 1.42,
    letterSpacing: "-0.03em",
  },
  /**
   * @description Pretendard Regular, Font Size: 13px
   */
  body2: {
    fontFamily: "Pretendard Regular",
    fontSize: calcRem(13),
    lineHeight: 1.54,
    letterSpacing: "-0.03em",
  },
  /**
   * @description Pretendard Regular, Font Size: 16px
   */
  subtitle1: {
    fontFamily: "Pretendard Regular",
    fontSize: calcRem(16),
    lineHeight: 1.5,
    letterSpacing: "-0.03em",
  },
  /**
   * @description Pretendard Regular, Font Size: 14px
   */
  subtitle2: {
    fontFamily: "Pretendard Regular",
    fontSize: calcRem(14),
    lineHeight: 1.42,
    letterSpacing: "-0.03em",
  },
  /**
   * @description Pretendard Regular, Font Size: 12px
   */
  caption: {
    fontFamily: "Pretendard Regular",
    fontSize: calcRem(12),
    fontWeight: 600,
    lineHeight: 1.3,
    letterSpacing: "-0.03em",
  },
  /**
   * @description Pretendard Regular, Font Size: 14px
   */
  overline: {
    fontFamily: "Pretendard Regular",
    fontSize: calcRem(14),
    fontWeight: 600,
    lineHeight: 1.2,
    letterSpacing: "-0.03em",
  },
} as const;

export default typography;
