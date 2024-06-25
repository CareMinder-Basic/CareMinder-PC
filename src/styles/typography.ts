const calcRem = (px: number) => `${px / 16}rem`;

const typography = {
  fontFamily: "Pretendard, Arial, sans-serif",
  /**
   * @description Pretendard Bold, Font Size: 24px, Font Weight: 500
   */
  h1: {
    fontFamily: "Pretendard Bold",
    fontSize: calcRem(24),
    fontWeight: 500,
    lineHeight: 1.5,
    letterSpacing: "-3%",
  } /**   * @description Pretendard Medium, Font Size: 18px, Font Weight: 500   */,
  h2: {
    fontFamily: "Pretendard Medium",
    fontSize: calcRem(18),
    fontWeight: 500,
    lineHeight: 1.44,
    letterSpacing: "-3%",
  } /**   * @description Pretendard Medium, Font Size: 16px, Font Weight: normal   */,
  h3: {
    fontFamily: "Pretendard Medium",
    fontSize: calcRem(16),
    lineHeight: 1.5,
    letterSpacing: "-3%",
  } /**   * @description Pretendard Regular, Font Size: 14px, Font Weight: normal   */,
  body1: {
    fontFamily: "Pretendard Regular",
    fontSize: calcRem(14),
    lineHeight: 1.42,
    letterSpacing: "-3%",
  } /**   * @description Pretendard Medium, Font Size: 13px, Font Weight: normal   */,
  body2: {
    fontFamily: "Pretendard Medium",
    fontSize: calcRem(13),
    lineHeight: 1.54,
    letterSpacing: "-3%",
  },
  /**
   * @description Pretendard SemiBold, Font Size: 16px, Font Weight: normal
   */
  subtitle1: {
    fontFamily: "Pretendard SemiBold",
    fontSize: calcRem(16),
    lineHeight: 1.5,
    letterSpacing: "-3%",
  },
  /**
   * @description Pretendard SemiBold, Font Size: 14px, Font Weight: normal
   */
  subtitle2: {
    fontFamily: "Pretendard SemiBold",
    fontSize: calcRem(14),
    lineHeight: 1.42,
    letterSpacing: "-3%",
  },
  /**
   * @description Pretendard, Font Size: 12px, Font Weight: 600
   */
  caption: {
    fontSize: calcRem(12),
    fontWeight: 600,
    lineHeight: 1.3,
    letterSpacing: "-3%",
  },
  /**
   * @description Pretendard, Font Size: 14px, Font Weight: 600
   */
  overline: {
    fontSize: calcRem(14),
    fontWeight: 600,
    lineHeight: 1.2,
    letterSpacing: "-3%",
  },
} as const;

export default typography;
