export const invoke = (code, data = null) => {
  console.log(`[Web] invoke "${code}"`);
  window.dispatchEvent(
    new CustomEvent('JBridge', { detail: { code, data } })
  );
};

export const runsInSafari = () => {
  const ua = navigator.userAgent;
  return /Safari/.test(ua);
};
