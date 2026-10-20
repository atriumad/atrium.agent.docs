/* @ds-bundle: {"format":4,"namespace":"ARTIUMADDesignSystem_c5fefc","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Chip","sourcePath":"components/core/Chip.jsx"},{"name":"Emphasis","sourcePath":"components/core/Emphasis.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Highlight","sourcePath":"components/core/Highlight.jsx"},{"name":"Rule","sourcePath":"components/core/Rule.jsx"},{"name":"StatFigure","sourcePath":"components/core/StatFigure.jsx"},{"name":"Wordmark","sourcePath":"components/core/Wordmark.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"d835268133af","components/core/Button.jsx":"a7a1db4d6dbd","components/core/Card.jsx":"e31b7cdc1aeb","components/core/Chip.jsx":"ab03e6b15297","components/core/Emphasis.jsx":"15fde568867f","components/core/Eyebrow.jsx":"e0cdcdddc56d","components/core/Highlight.jsx":"d551dfb819f5","components/core/Rule.jsx":"2c23cff8621c","components/core/StatFigure.jsx":"9669fe82c064","components/core/Wordmark.jsx":"d16d6d3c705f","components/forms/Checkbox.jsx":"a8e1ab484f2c","components/forms/Input.jsx":"e5e441b3b878","components/forms/Select.jsx":"815f002c82cf","ui_kits/atrium-site/AtriumKit.jsx":"70968e5380f8","ui_kits/atrium-site/AtriumSections.jsx":"08810570bf22"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ARTIUMADDesignSystem_c5fefc = window.ARTIUMADDesignSystem_c5fefc || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** ATRIUM AD Badge — squared micro-label for status and counts. */
function Badge({
  children,
  variant = "ink",
  style = {},
  ...rest
}) {
  const variants = {
    ink: {
      background: "var(--charcoal-800)",
      color: "var(--cream-200)"
    },
    lime: {
      background: "var(--lime-500)",
      color: "var(--charcoal-900)"
    },
    clay: {
      background: "var(--clay-500)",
      color: "var(--cream-100)"
    },
    quiet: {
      background: "var(--cream-300)",
      color: "var(--charcoal-500)"
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      padding: "3px 7px",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-2xs)",
      fontWeight: 500,
      letterSpacing: "var(--tracking-wide)",
      textTransform: "uppercase",
      lineHeight: 1.2,
      borderRadius: "var(--radius-xs)",
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** ATRIUM AD Button — squared, printed. Flat fills, 1px strokes, press nudges down. */
function Button({
  children,
  variant = "primary",
  size = "md",
  as = "button",
  iconLeft = null,
  iconRight = null,
  fullWidth = false,
  disabled = false,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: "7px 14px",
      fontSize: "13px",
      gap: "6px"
    },
    md: {
      padding: "11px 22px",
      fontSize: "15px",
      gap: "8px"
    },
    lg: {
      padding: "15px 30px",
      fontSize: "17px",
      gap: "10px"
    }
  };
  const variants = {
    primary: {
      background: "var(--charcoal-800)",
      color: "var(--cream-200)",
      border: "1px solid var(--charcoal-800)"
    },
    lime: {
      background: "var(--lime-500)",
      color: "var(--charcoal-900)",
      border: "1px solid var(--lime-500)"
    },
    clay: {
      background: "var(--clay-500)",
      color: "var(--cream-100)",
      border: "1px solid var(--clay-500)"
    },
    outline: {
      background: "transparent",
      color: "var(--charcoal-800)",
      border: "1px solid var(--charcoal-800)"
    },
    ghost: {
      background: "transparent",
      color: "var(--charcoal-800)",
      border: "1px solid transparent"
    }
  };
  const hoverStyle = {
    primary: {
      background: "var(--charcoal-900)"
    },
    lime: {
      background: "var(--lime-600)"
    },
    clay: {
      background: "var(--clay-600)"
    },
    outline: {
      background: "var(--charcoal-800)",
      color: "var(--cream-200)"
    },
    ghost: {
      background: "var(--cream-300)"
    }
  }[variant];
  const Comp = as;
  const [hover, setHover] = React.useState(false);
  const [pressed, setPressed] = React.useState(false);
  return /*#__PURE__*/React.createElement(Comp, _extends({
    disabled: as === "button" ? disabled : undefined,
    onPointerEnter: () => setHover(true),
    onPointerLeave: () => {
      setHover(false);
      setPressed(false);
    },
    onPointerDown: () => setPressed(true),
    onPointerUp: () => setPressed(false),
    style: {
      display: fullWidth ? "flex" : "inline-flex",
      width: fullWidth ? "100%" : undefined,
      alignItems: "center",
      justifyContent: "center",
      gap: sizes[size].gap,
      fontFamily: "var(--font-sans)",
      fontWeight: 500,
      lineHeight: 1,
      letterSpacing: "0.01em",
      borderRadius: "var(--radius-sm)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.4 : 1,
      textDecoration: "none",
      whiteSpace: "nowrap",
      transition: "transform var(--dur-fast) var(--ease-out), background var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out)",
      transform: pressed ? "translateY(var(--press-shift))" : "translateY(0)",
      ...sizes[size],
      ...variants[variant],
      ...(hover && !disabled ? hoverStyle : {}),
      ...style
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** ATRIUM AD Card — a drawn container. Hairline by default; ruled/offset for emphasis. */
function Card({
  children,
  tone = "paper",
  elevation = "flat",
  interactive = false,
  padding = "md",
  style = {},
  ...rest
}) {
  const pads = {
    none: 0,
    sm: "var(--space-4)",
    md: "var(--space-6)",
    lg: "var(--space-8)"
  };
  const tones = {
    paper: {
      background: "var(--surface-card)",
      color: "var(--text-body)",
      border: "1px solid var(--border-light)"
    },
    ruled: {
      background: "var(--surface-card)",
      color: "var(--text-body)",
      border: "1px solid var(--charcoal-800)"
    },
    sunken: {
      background: "var(--surface-sunken)",
      color: "var(--text-body)",
      border: "1px solid transparent"
    },
    dark: {
      background: "var(--surface-dark)",
      color: "var(--text-on-dark)",
      border: "1px solid var(--charcoal-800)"
    },
    lime: {
      background: "var(--surface-lime)",
      color: "var(--text-on-lime)",
      border: "1px solid var(--lime-500)"
    },
    clay: {
      background: "var(--surface-clay)",
      color: "var(--text-on-clay)",
      border: "1px solid var(--clay-500)"
    }
  };
  const elev = {
    flat: "var(--shadow-none)",
    card: "var(--shadow-card)",
    offset: "var(--shadow-raised)",
    pop: "var(--shadow-pop)"
  };
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onPointerEnter: () => interactive && setHover(true),
    onPointerLeave: () => interactive && setHover(false),
    style: {
      borderRadius: "var(--radius-md)",
      padding: pads[padding],
      boxShadow: elev[elevation],
      transition: "transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)",
      cursor: interactive ? "pointer" : undefined,
      ...tones[tone],
      ...(hover ? {
        transform: "translateY(-2px)",
        borderColor: "var(--charcoal-800)",
        boxShadow: "var(--shadow-raised)"
      } : {}),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** ATRIUM AD Chip — the only pill shape in the system. Tags, filters, service labels. */
function Chip({
  children,
  variant = "outline",
  size = "md",
  active = false,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: "4px 10px",
      fontSize: "11px"
    },
    md: {
      padding: "6px 14px",
      fontSize: "13px"
    }
  };
  const variants = {
    outline: {
      background: "transparent",
      color: "var(--charcoal-800)",
      border: "1px solid var(--border-light)"
    },
    ink: {
      background: "var(--charcoal-800)",
      color: "var(--cream-200)",
      border: "1px solid var(--charcoal-800)"
    },
    lime: {
      background: "var(--lime-500)",
      color: "var(--charcoal-900)",
      border: "1px solid var(--lime-500)"
    },
    clay: {
      background: "var(--clay-200)",
      color: "var(--clay-600)",
      border: "1px solid var(--clay-200)"
    },
    dark: {
      background: "transparent",
      color: "var(--cream-300)",
      border: "1px solid var(--charcoal-500)"
    }
  };
  const on = active ? {
    background: "var(--charcoal-800)",
    color: "var(--cream-200)",
    borderColor: "var(--charcoal-800)"
  } : {};
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      fontFamily: "var(--font-sans)",
      fontWeight: 500,
      lineHeight: 1.2,
      letterSpacing: "var(--tracking-wide)",
      textTransform: "uppercase",
      borderRadius: "var(--radius-pill)",
      whiteSpace: "nowrap",
      transition: "background var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out)",
      ...sizes[size],
      ...variants[variant],
      ...on,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Chip.jsx", error: String((e && e.message) || e) }); }

// components/core/Emphasis.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** ATRIUM AD Emphasis — the italic-serif phrase set inside a display headline. */
function Emphasis({
  children,
  as = "em",
  style = {},
  ...rest
}) {
  const Comp = as;
  return /*#__PURE__*/React.createElement(Comp, _extends({
    style: {
      fontFamily: "var(--font-serif)",
      fontStyle: "italic",
      fontWeight: 400,
      letterSpacing: "var(--tracking-normal)",
      paddingRight: "0.18em",
      marginRight: "0.04em",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Emphasis });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Emphasis.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** ATRIUM AD Eyebrow — the wide-caps label above a headline, with an optional leading rule. */
function Eyebrow({
  children,
  rule = true,
  tone = "muted",
  style = {},
  ...rest
}) {
  const colors = {
    muted: "var(--text-muted)",
    ink: "var(--charcoal-800)",
    onDark: "var(--cream-400)",
    lime: "var(--lime-600)"
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-3)",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-2xs)",
      fontWeight: 500,
      letterSpacing: "var(--tracking-wider)",
      textTransform: "uppercase",
      color: colors[tone],
      ...style
    }
  }, rest), rule ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: "28px",
      height: "1px",
      background: "currentColor",
      opacity: 0.5
    }
  }) : null, children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Highlight.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** ATRIUM AD Highlight — flat lime block behind an emphasised word. */
function Highlight({
  children,
  color = "lime",
  style = {},
  ...rest
}) {
  const fills = {
    lime: "var(--lime-500)",
    clay: "var(--clay-200)"
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      backgroundImage: "linear-gradient(" + fills[color] + "," + fills[color] + ")",
      backgroundRepeat: "no-repeat",
      backgroundSize: "100% 0.5em",
      backgroundPosition: "left bottom 0.14em",
      padding: "0 0.1em",
      WebkitBoxDecorationBreak: "clone",
      boxDecorationBreak: "clone",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Highlight });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Highlight.jsx", error: String((e && e.message) || e) }); }

// components/core/Rule.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** ATRIUM AD Rule — the heavy section divider, optionally carrying a caps label. */
function Rule({
  label = null,
  weight = "bold",
  tone = "ink",
  style = {},
  ...rest
}) {
  const w = {
    hair: "1px",
    bold: "3px"
  }[weight];
  const c = {
    ink: "var(--charcoal-800)",
    light: "var(--border-light)",
    onDark: "var(--charcoal-500)"
  }[tone];
  const textColor = tone === "onDark" ? "var(--cream-400)" : "var(--text-muted)";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)",
      width: "100%",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: w,
      background: c
    }
  }), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-2xs)",
      fontWeight: 500,
      letterSpacing: "var(--tracking-wider)",
      textTransform: "uppercase",
      color: textColor
    }
  }, label) : null, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: w,
      background: c
    }
  }) : null);
}
Object.assign(__ds_scope, { Rule });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Rule.jsx", error: String((e && e.message) || e) }); }

// components/core/StatFigure.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** ATRIUM AD StatFigure — a big Bodoni number with a caps caption. */
function StatFigure({
  value,
  label,
  tone = "ink",
  size = "md",
  style = {},
  ...rest
}) {
  const sizes = {
    sm: "40px",
    md: "64px",
    lg: "96px"
  };
  const tones = {
    ink: "var(--charcoal-900)",
    lime: "var(--lime-600)",
    clay: "var(--clay-500)",
    cream: "var(--cream-200)"
  };
  const labelTone = tone === "cream" ? "var(--cream-400)" : "var(--text-muted)";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-serif)",
      fontWeight: 400,
      fontSize: sizes[size],
      lineHeight: 0.9,
      letterSpacing: "var(--tracking-tight)",
      color: tones[tone]
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-2xs)",
      fontWeight: 500,
      letterSpacing: "var(--tracking-wider)",
      textTransform: "uppercase",
      color: labelTone
    }
  }, label));
}
Object.assign(__ds_scope, { StatFigure });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatFigure.jsx", error: String((e && e.message) || e) }); }

// components/core/Wordmark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ATRIUM AD Wordmark — typographic only. No logo artwork was supplied for this
 * brand, so the mark IS the name set in the display face.
 */
function Wordmark({
  size = "md",
  tone = "ink",
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      fontSize: "16px",
      letterSpacing: "0.02em"
    },
    md: {
      fontSize: "24px",
      letterSpacing: "0.01em"
    },
    lg: {
      fontSize: "44px",
      letterSpacing: "-0.01em"
    },
    xl: {
      fontSize: "96px",
      letterSpacing: "-0.03em"
    }
  };
  const tones = {
    ink: "var(--charcoal-900)",
    cream: "var(--cream-200)",
    lime: "var(--lime-500)",
    clay: "var(--clay-500)"
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "baseline",
      gap: "0.34em",
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      lineHeight: 1,
      textTransform: "uppercase",
      color: tones[tone],
      ...sizes[size],
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", null, "Atrium"), /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.45
    }
  }, "AD"));
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** ATRIUM AD Checkbox — squared box, lime fill when checked. */
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  style = {},
  ...rest
}) {
  const controlled = checked !== undefined;
  const [inner, setInner] = React.useState(!!defaultChecked);
  const on = controlled ? checked : inner;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-3)",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-sm)",
      color: disabled ? "var(--charcoal-400)" : "var(--text-body)",
      cursor: disabled ? "not-allowed" : "pointer",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", _extends({
    onClick: () => {
      if (disabled) return;
      if (!controlled) setInner(!on);
      onChange && onChange(!on);
    },
    style: {
      width: "18px",
      height: "18px",
      flex: "0 0 18px",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "var(--radius-xs)",
      border: "1px solid " + (on ? "var(--charcoal-800)" : "var(--border-light)"),
      background: on ? "var(--lime-500)" : "var(--cream-100)",
      transition: "background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)"
    }
  }, rest), on ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: "9px",
      height: "5px",
      borderLeft: "2px solid var(--charcoal-900)",
      borderBottom: "2px solid var(--charcoal-900)",
      transform: "rotate(-45deg) translate(1px,-1px)"
    }
  }) : null), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** ATRIUM AD Input — squared field with a caps label and clay focus ring. */
function Input({
  label,
  hint,
  error,
  tone = "light",
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const onDark = tone === "dark";
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-2xs)",
      fontWeight: 500,
      letterSpacing: "var(--tracking-wider)",
      textTransform: "uppercase",
      color: onDark ? "var(--cream-400)" : "var(--text-muted)"
    }
  }, label) : null, /*#__PURE__*/React.createElement("input", _extends({
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-base)",
      lineHeight: 1.4,
      padding: "11px 13px",
      borderRadius: "var(--radius-sm)",
      background: onDark ? "transparent" : "var(--cream-100)",
      color: onDark ? "var(--cream-200)" : "var(--text-body)",
      border: "1px solid " + (error ? "var(--clay-500)" : focus ? "var(--charcoal-800)" : onDark ? "var(--charcoal-500)" : "var(--border-light)"),
      outline: focus ? "2px solid var(--focus-ring)" : "none",
      outlineOffset: "1px",
      transition: "border-color var(--dur-base) var(--ease-out)"
    }
  }, rest)), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--clay-600)"
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      color: onDark ? "var(--charcoal-400)" : "var(--text-muted)"
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** ATRIUM AD Select — native select styled to match Input. */
function Select({
  label,
  hint,
  options = [],
  tone = "light",
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const onDark = tone === "dark";
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-2xs)",
      fontWeight: 500,
      letterSpacing: "var(--tracking-wider)",
      textTransform: "uppercase",
      color: onDark ? "var(--cream-400)" : "var(--text-muted)"
    }
  }, label) : null, /*#__PURE__*/React.createElement("select", _extends({
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: "none",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-base)",
      padding: "11px 13px",
      borderRadius: "var(--radius-sm)",
      background: (onDark ? "transparent" : "var(--cream-100)") + " no-repeat right 12px center",
      color: onDark ? "var(--cream-200)" : "var(--text-body)",
      border: "1px solid " + (focus ? "var(--charcoal-800)" : onDark ? "var(--charcoal-500)" : "var(--border-light)"),
      outline: focus ? "2px solid var(--focus-ring)" : "none",
      outlineOffset: "1px",
      cursor: "pointer"
    }
  }, rest), options.map(o => {
    const v = typeof o === "string" ? o : o.value;
    const l = typeof o === "string" ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })), hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      color: onDark ? "var(--charcoal-400)" : "var(--text-muted)"
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// ui_kits/atrium-site/AtriumKit.jsx
try { (() => {
function AtriumSite() {
  const [page, setPage] = React.useState("Home");
  const [caseIndex, setCaseIndex] = React.useState(null);
  const go = p => {
    setCaseIndex(null);
    setPage(p);
  };
  const openCase = i => {
    setCaseIndex(i);
    setPage("Case");
  };
  let body;
  if (page === "Case") body = /*#__PURE__*/React.createElement(CaseStudy, {
    index: caseIndex,
    onBack: () => go("Work")
  });else if (page === "Work") body = /*#__PURE__*/React.createElement(WorkGrid, {
    onOpen: openCase,
    heading: "All work"
  });else if (page === "Services") body = /*#__PURE__*/React.createElement(Services, null);else if (page === "Studio") body = /*#__PURE__*/React.createElement(Studio, null);else if (page === "Contact") body = /*#__PURE__*/React.createElement(Contact, null);else body = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
    onNav: go
  }), /*#__PURE__*/React.createElement(Marquee, null), /*#__PURE__*/React.createElement(WorkGrid, {
    onOpen: openCase
  }), /*#__PURE__*/React.createElement(StatsBand, null), /*#__PURE__*/React.createElement(Services, null), /*#__PURE__*/React.createElement(Quote, null));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-page)",
      minHeight: "100vh"
    }
  }, /*#__PURE__*/React.createElement(Nav, {
    page: page === "Case" ? "Work" : page,
    onNav: go
  }), body, /*#__PURE__*/React.createElement(Footer, {
    onNav: go
  }));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(AtriumSite, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/atrium-site/AtriumKit.jsx", error: String((e && e.message) || e) }); }

// ui_kits/atrium-site/AtriumSections.jsx
try { (() => {
const {
  Button,
  Chip,
  Badge,
  Card,
  Eyebrow,
  Rule,
  StatFigure,
  Highlight,
  Emphasis,
  Wordmark,
  Input,
  Select,
  Checkbox
} = window.ARTIUMADDesignSystem_c5fefc;
const NAV = ["Work", "Services", "Studio", "Contact"];
const Slot = ({
  h = 220,
  label = "Image",
  tone = "sunken"
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    height: h,
    borderRadius: "var(--radius-md)",
    background: tone === "dark" ? "var(--charcoal-700)" : "var(--cream-300)",
    border: "1px solid " + (tone === "dark" ? "var(--charcoal-500)" : "var(--border-light)"),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 11,
    fontWeight: 500,
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    color: tone === "dark" ? "var(--charcoal-400)" : "var(--charcoal-400)"
  }
}, label);
const Shell = ({
  children,
  wide = false
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: wide ? "var(--container-wide)" : "var(--container-max)",
    margin: "0 auto",
    padding: "0 var(--gutter)"
  }
}, children);
function Nav({
  page,
  onNav
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 20,
      background: "var(--surface-page)",
      borderBottom: "1px solid var(--border-light)"
    }
  }, /*#__PURE__*/React.createElement(Shell, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: 72
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav("Home");
    },
    style: {
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: "md"
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: "var(--space-6)",
      alignItems: "center"
    }
  }, NAV.map(n => /*#__PURE__*/React.createElement("a", {
    key: n,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav(n);
    },
    style: {
      fontSize: "var(--text-2xs)",
      fontWeight: 500,
      letterSpacing: "var(--tracking-wider)",
      textTransform: "uppercase",
      textDecoration: "none",
      color: page === n ? "var(--charcoal-900)" : "var(--text-muted)",
      borderBottom: "2px solid " + (page === n ? "var(--lime-500)" : "transparent"),
      paddingBottom: 4
    }
  }, n)), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "lime",
    onClick: () => onNav("Contact")
  }, "Start a project")))));
}
function Hero({
  onNav
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      paddingTop: "var(--space-12)",
      paddingBottom: "var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement(Shell, null, /*#__PURE__*/React.createElement(Eyebrow, null, "Kansas City \xB7 Est. 2014"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "var(--text-display-xl)",
      margin: "var(--space-5) 0 var(--space-6)",
      maxWidth: "16ch"
    }
  }, "We make the ad you ", /*#__PURE__*/React.createElement(Highlight, null, "remember"), ", and the ", /*#__PURE__*/React.createElement(Emphasis, null, "proof"), " behind it."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-4)",
      alignItems: "center",
      flexWrap: "wrap",
      marginBottom: "var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => onNav("Work")
  }, "See the work"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "outline",
    onClick: () => onNav("Services")
  }, "What we do")), /*#__PURE__*/React.createElement(Slot, {
    h: 340,
    label: "Hero film still"
  })));
}
function Marquee() {
  const items = ["Brand", "Campaign", "Media", "Content", "Film", "Sound"];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--charcoal-800)",
      padding: "var(--space-5) 0"
    }
  }, /*#__PURE__*/React.createElement(Shell, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-8)",
      justifyContent: "space-between",
      flexWrap: "wrap"
    }
  }, items.map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 300,
      fontSize: 22,
      letterSpacing: "0.02em",
      textTransform: "uppercase",
      color: "var(--cream-300)"
    }
  }, i)))));
}
const SERVICES = [{
  n: "01",
  t: "Brand",
  d: "Positioning, identity, verbal system. The thing everything else hangs off.",
  tags: ["Strategy", "Identity"]
}, {
  n: "02",
  t: "Campaign",
  d: "One idea, built to run across every place a person might meet it.",
  tags: ["Concept", "Production"]
}, {
  n: "03",
  t: "Media",
  d: "Planning and buying with the number agreed before we start.",
  tags: ["Paid", "Measurement"]
}, {
  n: "04",
  t: "Content",
  d: "Film, stills and social built in volume without going slack.",
  tags: ["Film", "Social"]
}];
function Services({
  compact = false
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "var(--space-12) 0"
    }
  }, /*#__PURE__*/React.createElement(Shell, null, /*#__PURE__*/React.createElement(Rule, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      margin: "var(--space-5) 0 var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    rule: false
  }, "02 \u2014 What we do"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      maxWidth: "14ch",
      textAlign: "right"
    }
  }, "Four things, done properly.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: compact ? "1fr 1fr" : "1fr 1fr 1fr 1fr",
      gap: "var(--space-4)"
    }
  }, SERVICES.map(s => /*#__PURE__*/React.createElement(Card, {
    key: s.n,
    tone: "paper",
    interactive: true,
    padding: "md",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)",
      minHeight: 240
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: 30,
      lineHeight: 1,
      color: "var(--charcoal-400)"
    }
  }, s.n), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0
    }
  }, s.t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)",
      flex: 1
    }
  }, s.d), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      flexWrap: "wrap"
    }
  }, s.tags.map(t => /*#__PURE__*/React.createElement(Chip, {
    key: t,
    size: "sm"
  }, t))))))));
}
const WORK = [{
  t: "A rebrand that paid for itself in nine weeks",
  c: "Halstead Coffee",
  tag: "Brand",
  stat: "2.7x",
  statLabel: "Return on ad spend"
}, {
  t: "Selling a pickup truck to people who hate ads",
  c: "Ridgeline Motors",
  tag: "Campaign",
  stat: "$44M",
  statLabel: "Attributed revenue"
}, {
  t: "Forty films in six weeks without losing the plot",
  c: "Verdant Foods",
  tag: "Content",
  stat: "40",
  statLabel: "Films delivered"
}, {
  t: "Cutting media waste in half, then spending the rest better",
  c: "Northline Bank",
  tag: "Media",
  stat: "51%",
  statLabel: "Waste removed"
}];
function WorkGrid({
  onOpen,
  heading = "Selected work"
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "var(--space-12) 0"
    }
  }, /*#__PURE__*/React.createElement(Shell, null, /*#__PURE__*/React.createElement(Rule, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      margin: "var(--space-5) 0 var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    rule: false
  }, "01 \u2014 ", heading), /*#__PURE__*/React.createElement("span", {
    className: "art-label"
  }, "2024 \u2014 2026")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-6)"
    }
  }, WORK.map((w, i) => /*#__PURE__*/React.createElement("a", {
    key: w.t,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onOpen(i);
    },
    style: {
      textDecoration: "none",
      color: "inherit"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "paper",
    padding: "none",
    interactive: true,
    style: {
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(Slot, {
    h: 260,
    label: w.c
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(Chip, {
    size: "sm",
    variant: "lime"
  }, w.tag), /*#__PURE__*/React.createElement("span", {
    className: "art-label"
  }, w.c)), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: "var(--text-2xl)"
    }
  }, w.t))))))));
}
function StatsBand() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--charcoal-800)",
      padding: "var(--space-12) 0"
    }
  }, /*#__PURE__*/React.createElement(Shell, null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "onDark"
  }, "03 \u2014 Proof"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: "var(--space-6)",
      marginTop: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement(StatFigure, {
    value: "2.7x",
    label: "Median return on ad spend",
    tone: "cream"
  }), /*#__PURE__*/React.createElement(StatFigure, {
    value: "$44M",
    label: "Media managed a year",
    tone: "cream"
  }), /*#__PURE__*/React.createElement(StatFigure, {
    value: "91%",
    label: "Clients past year three",
    tone: "cream"
  }), /*#__PURE__*/React.createElement(StatFigure, {
    value: "18",
    label: "People, no layers",
    tone: "cream"
  }))));
}
function Quote() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "var(--space-12) 0"
    }
  }, /*#__PURE__*/React.createElement(Shell, null, /*#__PURE__*/React.createElement(Card, {
    tone: "lime",
    padding: "lg"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: "var(--text-display-md)",
      lineHeight: 1.08,
      letterSpacing: "var(--tracking-tight)",
      margin: 0,
      maxWidth: "20ch",
      color: "var(--charcoal-900)"
    }
  }, "\"They put a number on it before they started. Then they showed us the number after.\""), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-6)",
      display: "flex",
      gap: "var(--space-3)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "art-label",
    style: {
      color: "var(--charcoal-800)"
    }
  }, "Dana Okafor"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 4,
      height: 4,
      borderRadius: 999,
      background: "var(--charcoal-800)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "art-label",
    style: {
      color: "var(--charcoal-800)"
    }
  }, "CMO, Northline Bank")))));
}
function Footer({
  onNav
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--charcoal-900)",
      color: "var(--text-on-dark)",
      paddingTop: "var(--space-10)",
      paddingBottom: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Shell, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr",
      gap: "var(--space-10)",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Wordmark, {
    size: "lg",
    tone: "cream"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "var(--space-5)",
      color: "var(--cream-400)",
      maxWidth: "34ch"
    }
  }, "An independent advertising studio. We take four clients at a time.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-4)",
      alignItems: "flex-end"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    tone: "dark",
    label: "Quarterly roundup",
    placeholder: "you@company.com",
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "lime"
  }, "Subscribe"))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--charcoal-700)",
      marginTop: "var(--space-8)",
      paddingTop: "var(--space-4)",
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "art-label",
    style: {
      color: "var(--charcoal-400)"
    }
  }, "\xA9 2026 Atrium AD"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-5)"
    }
  }, NAV.map(n => /*#__PURE__*/React.createElement("a", {
    key: n,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav(n);
    },
    className: "art-label",
    style: {
      color: "var(--cream-400)",
      textDecoration: "none"
    }
  }, n))))));
}
function CaseStudy({
  index,
  onBack
}) {
  const w = WORK[index] || WORK[0];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      paddingTop: "var(--space-8)",
      paddingBottom: "var(--space-12)"
    }
  }, /*#__PURE__*/React.createElement(Shell, null, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onBack();
    },
    className: "art-label",
    style: {
      textDecoration: "none",
      color: "var(--text-muted)"
    }
  }, "\u2190 All work"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      margin: "var(--space-6) 0 var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Chip, {
    variant: "ink",
    size: "sm"
  }, w.tag), /*#__PURE__*/React.createElement(Chip, {
    size: "sm"
  }, w.c)), /*#__PURE__*/React.createElement("h1", {
    style: {
      maxWidth: "18ch"
    }
  }, w.t), /*#__PURE__*/React.createElement(Slot, {
    h: 420,
    label: w.c + " — key visual"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 340px",
      gap: "var(--space-10)",
      marginTop: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    rule: false
  }, "The problem"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "var(--space-4)",
      fontSize: "var(--text-lg)"
    }
  }, w.c, " had spent three years buying reach and could not name a single thing anyone remembered about them. The category had converged on the same photography, the same promise and the same discount."), /*#__PURE__*/React.createElement(Eyebrow, {
    rule: false
  }, "What we did"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "var(--space-4)",
      fontSize: "var(--text-lg)"
    }
  }, "We rebuilt the brand around one claim we could defend, wrote a campaign that used it plainly, and moved the media budget to the two channels where the claim actually landed. Everything shipped in nine weeks.")), /*#__PURE__*/React.createElement(Card, {
    tone: "ruled",
    padding: "md",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-6)",
      height: "fit-content"
    }
  }, /*#__PURE__*/React.createElement(StatFigure, {
    value: w.stat,
    label: w.statLabel,
    size: "sm"
  }), /*#__PURE__*/React.createElement(StatFigure, {
    value: "9 wks",
    label: "Concept to air",
    size: "sm"
  }), /*#__PURE__*/React.createElement(StatFigure, {
    value: "4",
    label: "Channels, down from 11",
    size: "sm"
  })))));
}
function Contact() {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "var(--space-10) 0 var(--space-12)"
    }
  }, /*#__PURE__*/React.createElement(Shell, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-12)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "04 \u2014 Contact"), /*#__PURE__*/React.createElement("h1", {
    style: {
      marginTop: "var(--space-5)",
      maxWidth: "12ch"
    }
  }, "Tell us what you're ", /*#__PURE__*/React.createElement(Emphasis, null, "up against"), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-lg)",
      color: "var(--text-muted)"
    }
  }, "We reply within two working days, and we will tell you if we're the wrong studio for it."), /*#__PURE__*/React.createElement(Rule, {
    weight: "hair"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-8)",
      marginTop: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(StatFigure, {
    value: "4",
    label: "Clients at a time",
    size: "sm"
  }), /*#__PURE__*/React.createElement(StatFigure, {
    value: "2 days",
    label: "Reply window",
    size: "sm"
  }))), /*#__PURE__*/React.createElement(Card, {
    tone: "ruled",
    padding: "lg"
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "lime"
  }, "Sent"), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0
    }
  }, "Got it. We'll come back within two days."), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => setSent(false)
  }, "Send another")) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Name",
    placeholder: "Your name"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Work email",
    placeholder: "you@company.com"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "What do you need",
    options: ["Brand", "Campaign", "Media", "Content", "Not sure yet"]
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Budget band",
    options: ["Under $50k", "$50k — $150k", "$150k — $500k", "$500k+"]
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Send me the quarterly work roundup"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "lime",
    size: "lg",
    fullWidth: true,
    onClick: () => setSent(true)
  }, "Send it"))))));
}
function Studio() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "var(--space-10) 0 var(--space-12)"
    }
  }, /*#__PURE__*/React.createElement(Shell, null, /*#__PURE__*/React.createElement(Eyebrow, null, "05 \u2014 Studio"), /*#__PURE__*/React.createElement("h1", {
    style: {
      marginTop: "var(--space-5)",
      maxWidth: "18ch"
    }
  }, "Eighteen people. ", /*#__PURE__*/React.createElement(Emphasis, null, "No layers.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "var(--space-6)",
      marginTop: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement(Slot, {
    h: 280,
    label: "Studio"
  }), /*#__PURE__*/React.createElement(Slot, {
    h: 280,
    label: "Team"
  }), /*#__PURE__*/React.createElement(Slot, {
    h: 280,
    label: "Edit suite"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-10)",
      marginTop: "var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-xl)"
    }
  }, "The people who pitch the work make the work. There is no strategy department that hands a deck to a creative department that hands a file to a media department."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-xl)"
    }
  }, "We take four clients at a time because that is how many we can do this way. When we are full we will say so."))));
}
Object.assign(window, {
  Nav,
  Hero,
  Marquee,
  Services,
  WorkGrid,
  StatsBand,
  Quote,
  Footer,
  CaseStudy,
  Contact,
  Studio,
  Shell,
  Slot,
  WORK
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/atrium-site/AtriumSections.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.Emphasis = __ds_scope.Emphasis;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Highlight = __ds_scope.Highlight;

__ds_ns.Rule = __ds_scope.Rule;

__ds_ns.StatFigure = __ds_scope.StatFigure;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

})();
